# 🚀 MeetEase

<img src="/assets/MeetEaseLogo.png" alt="MeetEase Logo" width="200" style="display:block; margin:20px auto;" />

*Turn meetings into actionable insights instantly*  

🔗 **Live at:** [meetease-psi.vercel.app](https://meetease-psi.vercel.app)

---

## ✨ What is MeetEase?

MeetEase is an **AI-powered meeting assistant** that saves you time by:
- 🎙️ Transcribing discussions in real-time  
- 📝 Generating concise summaries & action points  
- 🔍 Making past meetings searchable  
- 🤝 Helping teams stay aligned without manual note-taking


## ⭐ Why Choose MeetEase Over Manual ChatGPT?

### 1️⃣ What MeetEase Does Differently
- **Automates meeting summaries**: Instead of copying the transcript and pasting it into ChatGPT, MeetEase lets you paste or upload the meeting transcript and immediately get actionable points.
- **Consistency & structure**: The summaries are always formatted in a standardized, actionable format (tasks, deadlines, responsibilities). ChatGPT alone may vary depending on prompts.
- **Team-focused**: Designed specifically for team meetings, so the model knows to pull out who does what by when, not just general text.
- **Single-click workflow**: You don't have to craft a detailed prompt every time — just submit transcript → get summary.

### 2️⃣ How It Could Be More Effective Than Plain ChatGPT
- Integrate voice transcription → automatically get summaries from Zoom/Teams
- Maintain team-specific context → the app "remembers" roles and recurring tasks
- Generate reports for management or follow-ups automatically
- Can combine with other features like voice reminders, notifications, or task tracking

### 3️⃣ Current Limitations
- Right now, the input is manual (paste transcript). Anyone could do the same in ChatGPT.
- Free API limitations (rate limits, small quota) reduce reliability.
- The value increases when you integrate it with live meeting recordings, calendar events, or team apps — then it's truly automating your workflow.

---

## 🛠️ Tech Stack

- ⚛️ **Frontend:** React + Vite + TailwindCSS
- 🖥️ **Backend:** Node.js + Express
- 🤖 **AI Engine:** OpenAI GPT models
- ☁️ **Deployment:** Vercel (Frontend) + Render/Railway (Backend)

---

## 🚀 Getting Started

Follow these simple steps to run **MeetEase** on your machine:

### 🔧 Clone the Repository
```bash
git clone https://github.com/x2ankit/MeetEase.git
cd MeetEase
```

### ▶️ Backend Setup
Move into backend folder & install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in `/backend` and add your API key:
```ini
OPENAI_API_KEY=your_openai_api_key_here
```

Start the backend server:
```bash
npm start
```

### 💻 Frontend Setup
Move into frontend folder & install dependencies:
```bash
cd frontend
npm install
```

Start the frontend dev server:
```bash
npm run dev
```

---

## 🎤 Future Integrations

- **ElevenLabs** → Adding voice-powered AI features to make meetings more natural and interactive
- **Maxim** → Enabling scalable collaboration for startups and enterprises to boost team productivity

---

## ⚡ Challenges We Solved

- 🔑 **API Security** → Protected keys using .env and server-only access
- 🐞 **Rate Limits** → Implemented retries & batching for smoother responses
- ⚡ **Integration** → Achieved fast communication between Vite frontend & Express backend

---

## 📜 License

This project is licensed under the MIT License.  
© 2025 MeetEase

---
