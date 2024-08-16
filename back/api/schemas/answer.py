# schemas/answer.py
from pydantic import BaseModel

class AnswerBase(BaseModel):
    id: int
    user_id: int
    question_text: str

    class Config:
        orm_mode = True
        
class AnswerCreate(BaseModel):
    id: int
    user_id: int
    question_text: str
    
class AnswerCreateResponse(AnswerBase):
    id: int  # 作成後にデータベースが生成したIDを含む

    class Config:
        orm_mode = True
        
class Answer(AnswerBase):
    id: int

    class Config:
        orm_mode = True
