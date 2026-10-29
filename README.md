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
## ⚠️ Development Notes & Limitations

This project was built as a practice for Vanilla JavaScript and client-side logic.

**Current Limitations (Observed):**
- The application relies entirely on client-side storage (`localStorage`) for authentication and task management.
- **Auth Flow Bug:** The signup button does not properly initialize the user state, leading to a "User not found" error upon login. This is due to restrictions when running via the `file://` protocol and logic errors in the event listeners.
- **Inherent Security Flaw:** Because authentication is handled on the client side, a user can easily bypass the login by manipulating the browser's local storage. This demonstrates why server-side authentication is mandatory for real applications.

*Note: This app is a learning prototype and is not production-ready.*

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
