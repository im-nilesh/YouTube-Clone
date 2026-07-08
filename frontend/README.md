# YouTube Clone — Frontend

A React + Vite front end for a full-stack YouTube clone. Users can browse, search, and filter videos, watch videos with a comment section, like/dislike, sign up/log in, and manage their own channel and videos.

## Tech Stack

- **Framework:** React 19
- **Build tool:** Vite
- **Routing:** React Router v7 (`createBrowserRouter`)
- **HTTP client:** Axios
- **Styling:** Plain CSS (component-scoped `.css` files) + Bootstrap base styles
- **Icons:** react-icons

### Prerequisites

- Node.js (v18+ recommended)
- The backend server running (see `backend/README.md`) — by default expected at `http://localhost:5000`

### Installation

```bash
cd frontend
npm install
```

### Configure the API base URL

Check `src/api/axios.js` and point `baseURL` at your running backend (e.g. `http://localhost:5000`).

## Features

- **Home page** — YouTube-style header, collapsible sidebar (toggle via hamburger menu), category filter bar, responsive video grid (title, thumbnail, channel name, views).
- **Auth** — Register and log in with username/email/password, client-side validation with inline error messages, JWT stored client-side, auto-redirect to login after successful registration. Protected routes redirect unauthenticated users to `/login`.
- **Search & Filter** — Search videos by title from the header search bar; filter by category using the filter chips on the home page.
- **Watch page** — Embedded video player, title/description/views, like & dislike buttons (toggle state, synced with the backend), full comment section (add, edit, delete).
- **Channel page** — Create a channel (once signed in), view a channel's videos, edit or delete your own videos.
- **Responsive design** — Layout adapts across mobile, tablet, and desktop breakpoints (see `@media` queries in `Header.css`, `Sidebar.css`, `MainLayout.css`, `Home.css`, `Channel.css`, `Watch.css`, and `auth.css`).

## Notes

- Built with Vite (not Create React App), using ES Modules throughout.
- `node_modules/` is excluded from version control — run `npm install` after cloning.
- Run the backend and seed its database first (`npm run seed` in `backend/`) so the home page has videos to display.

## Github repo : https://github.com/im-nilesh/YouTube-Clone
