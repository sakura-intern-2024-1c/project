# schemas/question.py
from pydantic import BaseModel

class QuestionBase(BaseModel):
    id: int
    name: str
    question_text: str

    class Config:
        orm_mode = True
        
class QuestionCreate(BaseModel):
    id: int
    name: str
    question_text: str
    
class QuestionCreateResponse(QuestionBase):
    id: int  # 作成後にデータベースが生成したIDを含む

    class Config:
        orm_mode = True
        
class Question(QuestionBase):
    id: int

    class Config:
        orm_mode = True
        
    