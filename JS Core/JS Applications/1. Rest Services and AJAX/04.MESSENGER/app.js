function attachEvents() {
    let sendBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');
    let mainUrl = 'https://rest-messanger.firebaseio.com/messanger';
    let chatArray;
    let textarea = document.getElementById('messages');
    let name = document.getElementById('author');
    let input = document.getElementById('content');
    refreshBtn.addEventListener('click',loadChat);
    sendBtn.addEventListener('click', sendMessage);
    
    function loadChat() {
        name.value = '';
        input.value = '';
        fetch(mainUrl + '.json')
        .then(data => data.json())
        .then(data => load(data));
    }

    function load(data) {
        textarea.textContent = '';
        chatArray = Object.entries(data);
        for ( let chat of chatArray ) {
            let user = chat[1].author;
            let message = chat[1].content;
            textarea.textContent += `${user}: ${message} \n`;
        }
    }

    function sendMessage() {
        let personName = name.value;
        let personMessage = input.value;
        name.value = '';
        input.value = '';
        let newMessage = {
            "author": personName,
            "content": personMessage
        }
        fetch(`${mainUrl}.json`, {
            method: 'POST',
            body: JSON.stringify(newMessage)
        })
    }
}

attachEvents();