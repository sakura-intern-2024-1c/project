from pydantic import BaseModel

class SearchRequest(BaseModel):
    word: str
