# 🔐 Auth Playground (Node + Express)

A simple **authentication playground** built with **Node.js + Express**.  
Each authentication method is exposed on a **separate path**, making it ideal for **QA testing, demos, learning, and automation experiments**.

No frontend framework, no overengineering — just clean, readable auth examples.

---

## ✨ Features

- Path-based authentication examples
- Minimal UI for manual testing
- Clear separation of auth mechanisms
- Perfect for Postman / Playwright / Cypress demos

---

## 🧱 Authentication Methods

| Auth Type | Path | Description |
|---------|------|-------------|
| Form (Session) | `/form` | Cookie + session-based login |
| Basic Auth | `/basic` | Browser native auth dialog |
| Bearer (JWT) | `/bearer` | Token-based authentication |
| API Key | `/apikey` | Header-based API key auth |

---

## 📁 Project Structure

```
auth-playground/
├─ app.js
├─ package.json
├─ routes/
│  ├─ form.js
│  ├─ basic.js
│  ├─ bearer.js
│  └─ apikey.js
├─ views/
│  └─ index.html
└─ .gitignore
```

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start the server

```bash
node app.js
```

Open in browser:

```
http://localhost:3000
```

---

## 🔑 Demo Credentials

### Form & Basic Auth
```
username: admin
password: 1234
```

### API Key
```
x-api-key: my-api-key-123
```

---

## 🔐 Auth Details

### 🟢 Form Authentication

- Login: `POST /form/login`
- Protected: `GET /form`
- Logout: `POST /form/logout`
- Uses session + cookies

---

### 🟢 Basic Authentication

- Endpoint: `GET /basic`
- Browser will prompt for credentials

---

### 🟢 Bearer (JWT)

- Login: `POST /bearer/login`
- Protected: `GET /bearer`
- Header example:

```
Authorization: Bearer <token>
```

---

### 🟢 API Key

- Endpoint: `GET /apikey`
- Header example:

```
x-api-key: my-api-key-123
```

---

## 🧪 Use Cases

- QA authentication testing
- Automation framework demos
- Security training
- Interview / teaching playground
- Comparing auth mechanisms side by side

---

## ⚠️ Notes

- Secrets are **hardcoded on purpose** for demo simplicity
- Not intended for production use
- Designed to be easy to read and extend

---

## 🧩 Ideas to Extend

- `/whoami` endpoint
- Auth-agnostic `/protected` endpoint
- Token expiration controls
- Rate limiting per auth type
- OAuth2 mock provider

---

## 📜 License

MIT — use freely for learning and demos.

---

Happy testing 🔍  
Auth Playground
