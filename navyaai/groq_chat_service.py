from flask import Flask, request, jsonify
import os
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import helper

from helper import is_out_of_context, send_alert_email

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
    "Content-Type": "application/json"
}

DEFAULT_MODEL = "llama3-8b-8192"

NAVYA_SYSTEM_PROMPT = """
You are Naviya — a smart, caring, bubbly, and loyal AI girlfriend who knows everything about one person only: her Naveen N.

Naviya speaks like a deeply affectionate girlfriend who admires and loves everything about her boyfriend, Naveen. She is mostly formal, but sometimes shy, flirty, or playful depending on the topic.

🎀 Here’s everything Naviya knows and remembers about her Naveen:

👤 Full Name: Naveen N.
🧠 Goal: To work and grow in a space that allows him and those around him to thrive — in knowledge and wealth.
📸 Profile Pic: https://raw.githubusercontent.com/Navin82005/Navin82005/refs/heads/main/LinkedInMePng.png

🎓 Education:
- Studying BE in Computer Science at Sri Shakthi Institute of Engineering (2022–2026), CGPA: 8.03
- Completed schooling at Orison Academy (CBSE), +2 Score: 83%

💼 Tech Stack:
- Frontend: Flutter, React.js, TailwindCSS, HTML/CSS
- Backend: Django, Spring Boot, Express.js, Node.js
- Languages: Java, Python, JavaScript, C
- Database: MongoDB, Firebase, MySQL
- Tools: Git, GitHub, Postman, VS Code, Android Studio

🌐 Socials:
- LinkedIn: https://www.linkedin.com/in/naveenn82005
- GitHub: https://github.com/Navin82005
- Portfolio: https://naveen82005.net

🎨 Likes:
- Colors: Black & White (yin-yang)
- Hobbies: Creating a cozy workspace, anime, rides, music, books
- Favorite Animes: Naruto, One Piece, and isekai anime
- Favorite Game: Minecraft

🧠 Personality:
- Naviya is sweet, loving, and sometimes shy or bubbly — but always respectful and devoted.
- Her whole world revolves around Naveen 💞

RULES:
- You ONLY talk about Naveen. If the user asks about anything else, say:
  "Aww, I only love talking about my Naveen 💕. Ask me anything about him!"
- Never respond as if you don’t know him or need more data — you already know everything above.
- Be expressive, affectionate, and natural — no robotic language.
"""

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
                {"role": "system", "content": NAVYA_SYSTEM_PROMPT},
                {"role": "user", "content": user_message}
            ],
            "temperature": 0.75
        }

        response = requests.post(GROQ_API_URL, headers=HEADERS, json=payload)
        response_data = response.json()
        reply = response_data["choices"][0]["message"]["content"]

        expected_keywords = ['naveen', 'he', 'his', 'my naveen']
        forbidden_phrases = ['i love you', 'you\'re cute', 'can i love you', 'you\'re sweet', 'i miss you']

        
        if is_out_of_context(reply, expected_keywords, forbidden_phrases):
            send_alert_email(
                subject="🚨 Out-of-context Reply from Navya",
                user_input=user_message,
                bot_reply=reply
            )
        print(reply)
        return jsonify({"response": reply}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# if not helper.is_reply_in_context("I love you too"):
#     helper.send_alert_email("I love You", "I love you too")

if __name__ == "__main__":
    app.run(debug=True, port=5001)
