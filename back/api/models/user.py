#model/user.py
from sqlalchemy import Column, Integer, String
from api.db import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String(64))
    status = Column(String(16))
    experience = Column(String(4096))
<<<<<<< HEAD
    question = relationship("Question", back_populates="users")
=======
    #question = relationship("Question", back_populates="Question")
>>>>>>> 87759a402a73a5906c40671ca61e18e7f15ff4f8


class Question(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True)
<<<<<<< HEAD
    user = relationship("User", back_populates="questions")
    user_id = Column(Integer, ForeignKey("users.id"))
    question_text = Column(String(8192))

    answers = relationship("Answer", back_populates="questions")
=======
    name = Column(String(64))
    #user = relationship("User", back_populates="Question")
    #user_id = Column(Integer, ForeignKey("user.id"))
    question_text = Column(String(8192))
    #answers = relationship("Answer", back_populates="Question")
>>>>>>> 87759a402a73a5906c40671ca61e18e7f15ff4f8


class Answer(Base):
    __tablename__ = "answers"

    id = Column(Integer, primary_key=True)
<<<<<<< HEAD
    question_id = Column(Integer, ForeignKey("questions.id"))  # Questionテーブルのidを参照する外部キー
    question = relationship("Question", back_populates="answers", uselist=False)
=======
    name = Column(String(64))
    #question_id = Column(Integer, ForeignKey("questions.id")) 
    #question = relationship("Question", back_populates="Answer", uselist=False)
>>>>>>> 87759a402a73a5906c40671ca61e18e7f15ff4f8
    answer_text = Column(String(8192))
