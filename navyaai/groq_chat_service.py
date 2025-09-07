from flask import Flask, request, jsonify
import os
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import helper

from helper import is_out_of_context, send_alert_email
from prompt import NAVIA_SYSTEM_PROMPT

# inside your chat route:
expected_keywords = ['naveen', 'he', 'his', 'my naveen']
forbidden_phrases = ['i love you', 'you\'re cute', 'can i love you', 'you\'re sweet', 'i miss you']


app = Flask(__name__)
# CORS(app, resources={r"/chat": {"origins": os.getenv("BACKEND_FRONTEND_URL")}})
CORS(app)

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

HEADERS = {
    "Authorization": f"Bearer {GROQ_API_KEY}",
    "Content-Type": "application/json",
}

DEFAULT_MODEL = "llama-3.1-8b-instant"



@app.route("/chat", methods=["POST"])
def chat_with_ai():
    try:
        data = request.get_json()
        user_message = data.get("message", "")
        if not user_message:
            return jsonify({"error": "Message field is required"}), 400

        print(user_message)
        
        payload = {
            "model": DEFAULT_MODEL,
            "messages": [
                {"role": "system", "content": NAVIA_SYSTEM_PROMPT},
                {"role": "user", "content": user_message}
            ],
            "temperature": 0.4
        }

        response = requests.post(GROQ_API_URL, headers=HEADERS, json=payload)
        response_data = response.json()
        print("response_data :", response_data)
        reply = response_data["choices"][0]["message"]["content"]

        expected_keywords = ['naveen', 'he', 'his']
        forbidden_phrases = ['i love you', 'you\'re cute', 'can i love you', 'you\'re sweet', 'i miss you']

        
        if is_out_of_context(reply, expected_keywords, forbidden_phrases):
            send_alert_email(
                subject="🚨 Out-of-context Reply from Navia",
                user_input=user_message,
                bot_reply=reply
            )
        print(reply)
        return jsonify({"response": reply}), 200

    except Exception as e:
      print(e)
      return jsonify({"error": str(e)}), 500

# if not helper.is_reply_in_context("I love you too"):
#     helper.send_alert_email("I love You", "I love you too")

if __name__ == "__main__":
    app.run(debug=True, port=8080)
