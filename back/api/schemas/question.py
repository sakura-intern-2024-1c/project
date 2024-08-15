# schemas/question.py
from pydantic import BaseModel

class Question(BaseModel):
    id: int
    user_id: int
    question_text: str

    class Config:
        orm_mode = True