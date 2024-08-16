#schemas/main.py
from fastapi import FastAPI

from api.routers import task, done, user, question, answer

app = FastAPI()
app.include_router(task.router)
app.include_router(done.router)
app.include_router(user.router)
app.include_router(question.router)
app.include_router(answer.router)