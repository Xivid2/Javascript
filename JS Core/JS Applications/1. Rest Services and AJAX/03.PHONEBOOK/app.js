function attachEvents() {
    document.getElementById('btnCreate').addEventListener('click', createUser);
    document.getElementById('btnLoad').addEventListener('click', loadUsers);
    let mainUrl = 'https://phonebook-nakov.firebaseio.com/phonebook';
    
    function createUser() {
        let newUserName = document.getElementById('person').value;
        let newUserPhone = document.getElementById('phone').value;
        document.getElementById('person').value = '';
        document.getElementById('phone').value = '';
        let newUser = {
            "person": newUserName,
            "phone": newUserPhone
        };
        fetch(mainUrl + '.json', {
            method: 'POST',
            body: JSON.stringify(newUser),
        })
        .then(loadUsers())
    }

    function deleteUser() {
        let userId = this.parentNode.id;
        let userUl = this.parentNode.parentNode;
        userUl.removeChild(document.getElementById(userId));
        fetch(`${mainUrl}/${userId}.json`, {
            method: 'DELETE'
        })
    }

    function loadUsers() {
        let allUsersURL = mainUrl + '.json';
        fetch(allUsersURL)
        .then(data => data.json())
        .then(data => load(data));
    }

    function load(data) {
        let allUsersArray = Object.entries(data);
        if ( document.getElementById('phonebook').innerHTML !== '' ) {
            document.getElementById('phonebook').innerHTML = '';
        }
        for (let user of allUsersArray) {
            let userId = user[0];
            let userName = user[1].person;
            let userPhone = user[1].phone;
            let newListItem = document.createElement('li');
            newListItem.innerHTML = `${userName}: ${userPhone}<button class='delete'>Delete</button>`;
            newListItem.setAttribute('id', userId)
            document.getElementById('phonebook').appendChild(newListItem);
            document.querySelector(`li#${userId} button`).addEventListener('click', deleteUser);
        }
    }
}

attachEvents();