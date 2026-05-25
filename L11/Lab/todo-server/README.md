# ToDo Server (Lab 08)

Run:

1. npm install
2. npm start

Server URL: http://localhost:3001

Endpoints:

- GET /api/todos
- POST /api/todos
- PUT /api/todos/:id
- DELETE /api/todos/:id

Alias endpoints (same behavior):

- GET /todos
- POST /todos
- PUT /todos/:id
- DELETE /todos/:id

Notes:

- Every request is throttled by 500ms.
- Validation returns 400 for invalid payload.
- Duplicate todo text returns 409.
