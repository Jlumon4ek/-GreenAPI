from fastapi import APIRouter
import requests
import json
from urllib.parse import urlparse
from schemas import BaseAPI, SendMessage, SendFileByUrl

router = APIRouter(prefix="/api")

@router.post("/get-settings", tags=["GreenAPI"])
async def get_settings(data: BaseAPI):
    re = requests.get(f"https://7103.api.greenapi.com/waInstance{data.idInstance}/getSettings/{data.apiTokenInstance}")
    return {"settings": re.json()}

@router.post("/get-state-instance", tags=["GreenAPI"])
async def get_state_instance(data: BaseAPI):
    re = requests.get(f"https://7103.api.greenapi.com/waInstance{data.idInstance}/getStateInstance/{data.apiTokenInstance}")
    return {"state": re.json()}

@router.post('/send-message', tags=["GreenAPI"])
async def send_message(data : SendMessage):
    payload = json.dumps(
        {
            "chatId": f"{data.phoneNumber.replace(' ', '')}@c.us", 
            "message": f"{data.message}"
        }
    )
    headers = {
        'Content-Type': 'routerlication/json'
    }

    url = f"https://7103.api.greenapi.com/waInstance{data.idInstance}/sendMessage/{data.apiTokenInstance}"
    response = requests.request("POST", url, headers=headers, data = payload)

    return {"message": response.json()}

@router.post('/send-file-by-url', tags=["GreenAPI"])
async def send_file_by_url(data : SendFileByUrl):
    parsed_url = urlparse(data.fileUrl)
    fileName = parsed_url.path.split('/')[-1]
    
    payload = json.dumps(
       {
            "chatId": f"{data.phoneNumberFile.replace(' ', '')}@c.us",
            "urlFile": f"{data.fileUrl}",
            "fileName": fileName,
            "caption": f"{data.caption}"
       }
   )

    headers = {
        'Content-Type': 'routerlication/json'
    }

    url = f"https://7103.api.greenapi.com/waInstance{data.idInstance}/sendFileByUrl/{data.apiTokenInstance}"

    response = requests.request("POST", url, headers=headers, data = payload)

    return {"message": response.json()}
