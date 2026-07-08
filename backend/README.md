# YouTube Clone — Backend

REST API for a full-stack YouTube clone, built with **Node.js**, **Express**, and **MongoDB**. Handles user authentication, channel management, video CRUD, likes/dislikes, and comments.

## Tech Stack

- **Runtime:** Node.js (ES Modules)
- **Framework:** Express 5
- **Database:** MongoDB with Mongoose
- **Auth:** JWT (JSON Web Tokens) + bcrypt password hashing
- **Dev tools:** nodemon, dotenv, cors

### Prerequisites

- Node.js (v18+ recommended)
- A running MongoDB instance — either [MongoDB Atlas](https://www.mongodb.com/atlas) or a local MongoDB server

### Installation

```bash
cd backend
npm install
```

### Seed the Database (recommended)

The repo ships with realistic sample data (users, channels, videos with real YouTube embed URLs, and comments) so evaluators can test every feature without uploading their own content:

This clears existing `User`, `Channel`, `Video`, and `Comment` collections and repopulates them.

### Run the Server

```bash
npm start
```

The server starts on `http://localhost:<PORT>` (default `5000`) and prints `Server is running on port <PORT>` along with `Connected to database` once MongoDB connects.

## API Endpoints

All routes are mounted at the root path (`/`).

### Auth

| Method | Endpoint    | Auth | Description                                     |
| ------ | ----------- | ---- | ----------------------------------------------- |
| POST   | `/register` | ❌   | Register a new user (username, email, password) |
| POST   | `/login`    | ❌   | Log in, returns JWT + user object               |

### Channels

| Method | Endpoint              | Auth | Description                            |
| ------ | --------------------- | ---- | -------------------------------------- |
| POST   | `/channel`            | ✅   | Create a channel (one per user)        |
| GET    | `/channel/me`         | ✅   | Get the logged-in user's own channel   |
| GET    | `/channel/:id`        | ❌   | Get a channel by ID                    |
| GET    | `/channels`           | ❌   | List all channels                      |
| GET    | `/channel/:id/videos` | ❌   | List all videos belonging to a channel |

### Videos

| Method | Endpoint                   | Auth       | Description                                    |
| ------ | -------------------------- | ---------- | ---------------------------------------------- |
| POST   | `/video`                   | ✅         | Upload a new video (added to caller's channel) |
| GET    | `/videos`                  | ❌         | Get all videos                                 |
| GET    | `/videos/search?title=`    | ❌         | Search videos by title (case-insensitive)      |
| GET    | `/videos/filter?category=` | ❌         | Filter videos by category                      |
| GET    | `/video/:id`               | ❌         | Get a single video by ID                       |
| PUT    | `/video/:id`               | ✅ (owner) | Update a video                                 |
| DELETE | `/video/:id`               | ✅ (owner) | Delete a video                                 |
| PUT    | `/video/:id/like`          | ✅         | Like a video (toggles off dislike if present)  |
| PUT    | `/video/:id/dislike`       | ✅         | Dislike a video (toggles off like if present)  |

### Comments

| Method | Endpoint              | Auth       | Description                  |
| ------ | --------------------- | ---------- | ---------------------------- |
| POST   | `/video/:id/comment`  | ✅         | Add a comment to a video     |
| GET    | `/video/:id/comments` | ❌         | Get all comments for a video |
| PUT    | `/comment/:id`        | ✅ (owner) | Edit a comment               |
| DELETE | `/comment/:id`        | ✅ (owner) | Delete a comment             |

> **Auth ✅** means the route requires an `Authorization: Bearer <token>` header, validated by `authMiddleware`. Routes marked **(owner)** additionally verify that the requesting user owns the resource (channel/video/comment) before allowing the write.

## Data Models (summary)

**User** — `username`, `email` (unique), `password` (hashed)

**Channel** — `channelName`, `description`, `logo`, `banner`, `owner` (ref `User`), `subscribers`

**Video** — `title`, `description`, `thumbnailUrl`, `videoUrl`, `category`, `likes`, `dislikes`, `likedBy` / `dislikedBy` (ref `User`), `channel` (ref `Channel`), `views`

**Comment** — `comment`, `user` (ref `User`), `video` (ref `Video`)

## Notes

- Written entirely with ES Modules (`import`/`export`) as required.
- `node_modules/` is excluded from version control — run `npm install` after cloning.
- Passwords are hashed with `bcrypt` before being stored; JWTs expire after 30 minutes.

## Github Repo : https://github.com/im-nilesh/YouTube-Clone
