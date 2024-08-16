from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from api.db import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String(64))
    status = Column(String(16))
    experience = Column(String(4096))
    question = relationship("Question", back_populates="Question")


class Question(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True)
    user = relationship("User", back_populates="Question")
    user_id = Column(Integer, ForeignKey("user.id"))
    question_text = Column(String(8192))

    answers = relationship("Answer", back_populates="Question")


class Answer(Base):
    __tablename__ = "answers"

    id = Column(Integer, primary_key=True)
    question_id = Column(Integer, ForeignKey("questions.id"))  # Questionテーブルのidを参照する外部キー
    question = relationship("Question", back_populates="Answer", uselist=False)
    answer_text = Column(String(8192))
