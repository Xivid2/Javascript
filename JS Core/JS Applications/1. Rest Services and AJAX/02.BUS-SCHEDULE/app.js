function solve() {

    let url = `https://judgetests.firebaseio.com/schedule/`;
    let currentStopId = 'depot';
    let currentStopName = '';

    function depart() {
        let currentUrl = url + currentStopId + ".json";
        fetch(currentUrl)
        .then(request => request.json())
        .then((data) => {
            nextStop(data);
        });
    }

    function arrive() {
        setDisabledOnButton('arrive');
        removeDisabledOnButton('depart');
        document.querySelector('span.info').innerText = `Arriving at ${currentStopName}`;
    }

    function nextStop(data) {
        currentStopName = data.name;
        document.querySelector('span.info').innerText = `Next Stop is ${currentStopName}`;
        currentStopId = data.next;
        setDisabledOnButton('depart');
        removeDisabledOnButton('arrive');
    }
    function setDisabledOnButton(buttonId) {
        document.getElementById(buttonId).setAttribute('disabled', true);
    }

    function removeDisabledOnButton(buttonId) {
        document.getElementById(buttonId).disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();