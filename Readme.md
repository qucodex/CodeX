# Codex Club Web Application — MERN Stack

## Project Overview

Codex Club is a full-stack MERN web application designed to manage club activities, learning content, members, events, and communication through a single platform.

The project is divided into two main parts:

### Frontend

- React.js
- TypeScript
- Tailwind CSS

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB

---

## Folder Structure

```
Codex-Club/

│

├── Frontend/   → React + TypeScript + Tailwind CSS

└── Backend/    → Node.js + Express + MongoDB + TypeScript
```

Each folder is an independent project with its own dependencies and configuration.

---

## How to Run the Project

### 1. Clone the repository

```
git clone <repo_url>

cd codex
```

### 2. Run Frontend

```
cd frontend

npm install

npm run dev
```

### 3. Run Backend

```
cd backend

npm install

npm run dev
```

Make sure that MongoDB is running locally or your cloud database URI is correctly added in the `.env` file.

---

## Environment Variables Setup?

Create a `.env` file in the **backend** folder and add the following:

PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

---

## How to Contribute?

1. Fork the repository to your local system
2. Create a new branch for your feature
3. Implement your feature with proper documentation
4. Commit your changes with clear messages
5. Create a Pull Request

Please follow clean architecture and naming conventions while contributing.

---

## Tech Stack

| Layer    | Technology                      |
| -------- | ------------------------------- |
| Frontend | React, TypeScript, Tailwind CSS |
| Backend  | Node.js, Express.js, TypeScript |
| Database | MongoDB                         |
| Auth     | JWT                             |

---

## Vision

The vision of Codex Club is to create a scalable, modular, and intelligent platform for managing learning, collaboration, and community-driven activities in one place.
