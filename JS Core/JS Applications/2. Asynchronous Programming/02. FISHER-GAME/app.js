function attachEvents() {
    let mainUrl = 'https://fisher-game.firebaseio.com/catches.json';

    const elements = {
        btnLoad: document.querySelector('button.load'),
        btnUpdate: document.querySelector('button.create'),
        btnAdd: document.querySelector('button.add'),
        btnDelete: document.querySelector('button.delete'),
        firstCatchForCopy: document.querySelectorAll('.catch')[0],
        addForm: document.querySelector('#addForm')
    }

    elements.btnLoad.addEventListener('click', loadAllCatches);
    elements.btnAdd.addEventListener('click', createNewCatch);

    function createNewCatch() {
        let createNewCatchObj = {};
        Array.from(elements.addForm.getElementsByTagName('input'))
        .forEach((o) => {
            createNewCatchObj[o.className] = o.value
        });
        fetch(mainUrl, {
            method: 'POST',
            body: JSON.stringify(createNewCatchObj)
        });
        clearForm();
        loadAllCatches();
    }    

    function loadAllCatches() {
        fetch(mainUrl)
        .then(handler)
        .then(appendAllCatches);
    }

    function appendAllCatches(data) {
        document.querySelector('#catches').innerHTML = '';
        for ( let newCatch in data ) {
            document.getElementById('catches').appendChild(createCatchAsTemplate( data[newCatch], newCatch ));
        }
    }

    function createCatchAsTemplate(catchObject, catchId) {
        let newCatch = elements.firstCatchForCopy.cloneNode(true);
        newCatch.removeAttribute('data-id');
        newCatch.setAttribute('id', catchId);
        newCatch.children[1].setAttribute('value', catchObject.angler);
        newCatch.children[4].setAttribute('value', catchObject.weight);
        newCatch.children[7].setAttribute('value', catchObject.species);
        newCatch.children[10].setAttribute('value', catchObject.location);
        newCatch.children[13].setAttribute('value', catchObject.bait);
        newCatch.children[16].setAttribute('value', catchObject.captureTime);
        newCatch.children[18].addEventListener('click', updateCatch);
        newCatch.children[19].addEventListener('click', deleteCatch);
        return newCatch;        
    }

    function deleteCatch() {
        let catchId = this.parentNode.id;
        fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, {
            method: 'DELETE'
        })
        .then(loadAllCatches)
    }

    function updateCatch() {
        let updatedCatchObj = {};
        let catchId = this.parentNode.id;
        Array.from(this.parentNode.getElementsByTagName('input'))
        .forEach((o) => {
            updatedCatchObj[o.className] = o.value
        });
        fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, {
            method: 'PUT',
            body: JSON.stringify(updatedCatchObj)
        })
        .then(loadAllCatches);
    }

    function handler(response) {
        if ( response.status > 400 ) {
            throw new Error(`Something went wrong. Error: ${response.statusText}`)
        }
        return response.json();
    }

    function clearForm() {
        Array.from(elements.addForm.getElementsByTagName('input'))
        .forEach((el) => el.value = '');
    }
}

attachEvents();

