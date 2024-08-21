async function getSettings() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;

    if (idInstance === "" || apiTokenInstance === "") {
        alert("idInstance и ApiTokenInstance не должны быть пустыми!");
        return;
    }

    try {
        const response = await fetch('/api/get-settings', {
            method: 'POST',  
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idInstance: idInstance,
                apiTokenInstance: apiTokenInstance
            })
        });

        if (!response.ok) {
            throw new Error('Ошибка запроса');
        }

        const data = await response.json();
        document.getElementById('response').textContent = JSON.stringify(data, null, 4);
    } catch (error) {
        document.getElementById('response').textContent = 'Ошибка: ' + error.message;
    }
}

async function getStateInstance() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;

    if (idInstance === "" || apiTokenInstance === "") {
        alert("idInstance и ApiTokenInstance не должны быть пустыми!");
        return;
    }

    try {
        const response = await fetch('http://localhost:8000/api/get-state-instance', {
            method: 'POST',  
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idInstance: idInstance,
                apiTokenInstance: apiTokenInstance
            })
        });

        if (!response.ok) {
            throw new Error('Ошибка запроса');
        }

        const data = await response.json();
        document.getElementById('response').textContent = JSON.stringify(data, null, 4);
    } catch (error) {
        document.getElementById('response').textContent = 'Ошибка: ' + error.message;
    }
}

async function sendMessage() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;

    if (phoneNumber === "" || message === "" || idInstance === "" || apiTokenInstance === "") {
        alert("Поля не должны быть пустыми!");
        return;
    }

    try {
        const response = await fetch('http://localhost:8000/api/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idInstance: idInstance,
                apiTokenInstance: apiTokenInstance,
                phoneNumber: phoneNumber,
                message: message
            })
        });

        if (!response.ok) {
            throw new Error('Ошибка запроса');
        }

        const data = await response.json();
        document.getElementById('response').textContent = JSON.stringify(data, null, 4);
    } catch (error) {
        document.getElementById('response').textContent = 'Ошибка: ' + error.message;
    }
}

async function sendFileByUrl() {
    const phoneNumberFile = document.getElementById('phoneNumberFile').value;
    const fileUrl = document.getElementById('fileUrl').value;
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const caption = document.getElementById('caption').value;
    if (phoneNumberFile === "" || fileUrl === "" || idInstance === "" || apiTokenInstance === "") {
        alert("Поля не должны быть пустыми!");
        return;
    }

    try {
        const response = await fetch('http://localhost:8000/api/send-file-by-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                idInstance: idInstance,
                apiTokenInstance: apiTokenInstance,
                phoneNumberFile: phoneNumberFile,
                fileUrl: fileUrl, 
                caption: caption
            })
        });

        if (!response.ok) {
            throw new Error('Ошибка запроса');
        }

        const data = await response.json();
        document.getElementById('response').textContent = JSON.stringify(data, null, 4);
    } catch (error) {
        document.getElementById('response').textContent = 'Ошибка: ' + error.message;
    }
}