from pydantic import BaseModel
from typing import Optional

class BaseAPI(BaseModel):
    idInstance: str
    apiTokenInstance: str

class SendMessage(BaseAPI):
    phoneNumber: str
    message: str

class SendFileByUrl(BaseAPI):
    phoneNumberFile : str
    fileUrl: str
    caption: Optional[str] = ""