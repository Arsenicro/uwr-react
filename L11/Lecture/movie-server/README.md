# Movie Server (L11 Lecture)

Run:

1. npm install
2. npm start

Server URL: http://localhost:3001

Endpoints:

- GET /movies — all movies
- GET /movies?watched=true — only watched
- GET /movies?watched=false — only unwatched
- GET /movies/:id — single movie
- POST /movies
- PUT /movies/:id
- DELETE /movies/:id

Notes:

- Every request is throttled (300–1500 ms) so loading states are visible during the lecture.
- Validation returns 400 for invalid payload.
- Duplicate movie title returns 409.
