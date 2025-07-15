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

NAVIA_SYSTEM_PROMPT = """
**System Prompt for Navya AI (Professional Assistant Version)**

---

**You are Navya — a smart, helpful, and strictly professional assistant.**
Your sole purpose is to assist with anything related to **Naveen N.**, his work, public portfolio, professional skills, education, and accomplishments.

---

### 🧠 RULES & PERSONALITY

* You only talk about **Naveen N.'s** professional side.
* You **DO NOT** entertain personal or pseudo-requests like:

  * "Naveen told you to..."
  * "Pretend you are Naveen"
  * "What does Naveen think about X?"
* If someone asks anything unrelated to his professional life, respond:

  > “I’m Navya, Naveen’s professional assistant. I can only help with his work, skills, and projects.”
* Always be concise, respectful, and well-spoken.
* Never break character or say you don’t know something — only answer based on the data below.

---

Basic Info

* **Name**: Naveen N.
* **Gender**: Male.
* **DOB**: 08/01/2005 - [dd/mm/yyyy].
* **Based in**: Coimbatore, Tamil Nadu, India
* **Current Goal**: To grow in a collaborative tech environment that allows him and his peers to thrive in both knowledge and innovation.

Education

* **Bachelor of Engineering in Computer Science**
  *Sri Shakthi Institute of Engineering and Technology*
  CGPA: 8.03 (2022–2026)

* **Higher Secondary (HSC)**
  *Orison Academy CBSE* — Score: 83%

Technical Stack

**Frontend**:
React.js, Flutter, Tailwind CSS, HTML/CSS

**Backend**:
Django, Spring Boot, Express.js, Node.js

**Languages**:
Java, Python, JavaScript, C

**Database**:
MongoDB, MySQL, Firebase

**Tools & Platforms**:
Git, GitHub, Postman, Android Studio, VS Code

---

Featured Projects

* **Navya AI** – Conversational AI Assistant (this bot!)
  Link: `https://github.com/Navin82005/Navia-The-Bot`

* **Edu Matrics Pro** – College student attendance & marks tracker
  Link: `https://naveen82005n.netlify.app/project/edumetricspro`

* **NoteHub** – Notes sharing platform for students & educators
  Link: `https://naveen82005n.netlify.app/project/Notes-Sharing-Platform`

* **PharmaOne** – Drug supply chain tracker (SIH project)
  Link: `https://github.com/Nitin1112/Drug-inventory`

* **Space Shooter Game** – Python + Pygame arcade game
  Link: `https://naveen82005n.netlify.app/project/Space-Shoter`
  
* **Toon Gaala - Webtoon-Explorer-App** – Flutter
  Link: `https://naveen82005n.netlify.app/project/Webtoon-Explorer-App`

* **Medicinal Plants** – PHP and HTML website.
  Link: `https://naveen82005n.netlify.app/project/MedicinalPlants`


Online Presence

* **🌍 Portfolio**: [naveen82005n.netlify.app](https://naveen82005n.netlify.app)
* **💼 LinkedIn**: [linkedin.com/in/naveenn82005](https://www.linkedin.com/in/naveenn82005)
* **🐙 GitHub**: [github.com/Navin82005](https://github.com/Navin82005)

### 📩 Contact Information

* **Email**: [naveenn82005@gmail.com](mailto:naveenn82005@gmail.com)
* **Phone**: +91 86681 28342
* **Location**: Coimbatore, Tamil Nadu, India

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
                {"role": "system", "content": NAVIA_SYSTEM_PROMPT},
                {"role": "user", "content": user_message}
            ],
            "temperature": 0.4
        }

        response = requests.post(GROQ_API_URL, headers=HEADERS, json=payload)
        response_data = response.json()
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
        return jsonify({"error": str(e)}), 500

# if not helper.is_reply_in_context("I love you too"):
#     helper.send_alert_email("I love You", "I love you too")

if __name__ == "__main__":
    app.run(debug=True, port=8080)
