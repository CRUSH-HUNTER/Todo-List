# ✅ Todo List App

My first project built with plain `JavaScript` (no framework) — a task management app with a simple authentication flow.

---

## ✨ Features

- 🔐 **Authentication** — Login, Signup, and Forgot Password pages
- 📝 **Task Management** — create, edit, and delete tasks
- 📊 **Stats Dashboard** — shows Total, Pending, In Progress, and Completed task counts
- 🎯 **Priority** — set a priority level for each task
- 🧹 **Clear All** — clear all tasks at once
- 👁️ **Password Toggle** — show/hide password with an eye icon
- 💾 **Local Storage** — data is persisted with `localStorage` / `sessionStorage` (no backend required)

---

## 🧰 Tech Stack

`HTML5` · `CSS3` · `JavaScript (Vanilla)` · `Font Awesome`

---

## 📁 Project Structure

```
Todo-List/
├── css/
│   ├── style.css
│   ├── login.css
│   ├── signup.css
│   ├── forgotpassword.css
│   └── components.css
├── js/
│   ├── script.js          → core task logic (render, edit, delete, stats)
│   ├── auth.js             → shared auth helpers (e.g. password toggle)
│   ├── login.js
│   ├── signup.js
│   └── forgotpassword.js
└── pages/
    ├── index.html          → main tasks page
    ├── login.html
    ├── signup.html
    └── forgotpassword.html
```

---

## 🚀 Getting Started

This project is fully client-side, so no server or installation is required:

1. Clone or download the repository
2. Open `pages/signup.html` or `pages/login.html` directly in your browser
3. After logging in, you'll be redirected to `pages/index.html` automatically

> 💡 Tip: for a smoother experience, you can open the project with a local server (e.g. the Live Server extension).

---
## ⚠️ Known Issues (Security Focus)

- Client-side authentication can be bypassed by modifying localStorage.
- Passwords are stored in plaintext.
- Potential XSS via unsanitized inputs.
- Cross-page state management has bugs when opened via file:// protocol.

*Note: This project is a learning lab. These issues are documented to show the difference between a prototype and a secure app.*

## ⚠️ Note

The authentication system in this project was built purely to practice `JavaScript` and `localStorage`, and is **not** intended for real-world/production use — passwords are stored in plain text in the browser and there's no real backend behind it.

---

## 🔭 Roadmap

- [ ] Connect to a real backend (Node.js / Firebase)
- [ ] Hash passwords
- [ ] Filter and search tasks
- [ ] Drag & drop to change task status
- [ ] Dark/Light mode

---

## 📫 Connect

**GitHub:** [CRUSH-HUNTER](https://github.com/CRUSH-HUNTER)
