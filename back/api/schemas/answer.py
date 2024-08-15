# schemas/answer.py
from pydantic import BaseModel

class Answer(BaseModel):
    id: int
    question_id: int
    answer_text: str

    class Config:
        orm_mode = True
