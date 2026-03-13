# Signal Dashboard

Control dashboard for multiple signal projects.

## Stack

- **Frontend:** Next.js
- **Backend:** FastAPI
- **Database:** PostgreSQL
- **Orchestration:** Docker Compose
- **Reverse proxy:** Caddy (to be added later)

## Structure

```
signal-dashboard/
├── frontend/     # Next.js app (portfolio, projects list, project overview)
├── backend/      # FastAPI app (api, models, schemas, services)
└── docker-compose.yml
```

## Run with Docker

```bash
docker compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API docs: http://localhost:8000/docs

## Run locally (dev)

**Backend**

```bash
cd backend && pip install -r requirements.txt && uvicorn main:app --reload
```

**Frontend**

```bash
cd frontend && npm install && npm run dev
```

**PostgreSQL:** start via `docker compose up postgres -d` or use a local instance.
