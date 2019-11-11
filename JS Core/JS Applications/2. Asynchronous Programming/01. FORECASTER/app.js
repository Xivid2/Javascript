function attachEvents() {
    const elements = {
        inputField: document.getElementById('location'),
        button: document.getElementById('submit'),
        current: document.getElementById('current'),
        upcoming: document.getElementById('upcoming'),
        forecast: document.getElementById('forecast')
    };

    const symbols = {
        sunny: '☀',
        partlySunny: '⛅',
        overcast: '☁',
        rain: '☂',
        degrees: '°'
    }

    elements.button.addEventListener('click', loadWeatherInfo);
    
    function loadWeatherInfo(data) {
        fetch('https://judgetests.firebaseio.com/locations.json')
        .then(handler)
        .then(loadLocationWeatherInfo);
    }

    function loadLocationWeatherInfo(data) {
        let location = data.filter((object) => object.name === elements.inputField.value)[0];
        
        fetch(`https://judgetests.firebaseio.com/forecast/today/${location.code}.json`)
        .then(handler)
        .then((data) => showLocationWeatherInfo(data, location.code));
    }

    function showLocationWeatherInfo(data, code) {
        elements.forecast.style.display = 'block';
        removeElementsByClass('forecasts');

        let divForecast = createHTMLElement('div', 'forecasts');

        let spanHolder = createHTMLElement('span', 'condition');

        let symbol = symbols[data.forecast.condition.toLowerCase()];
        let spanSymbol = createHTMLElement('span', ['condition', 'symbol'], symbol);

        let degrees = `${data.forecast.low}${symbols.degrees}/${data.forecast.high}${symbols.degrees}`;
        let spanDegrees = createHTMLElement('span', 'forecast-data', degrees );

        let spanName = createHTMLElement('span', 'forecast-data', data.name);

        let spanCondition = createHTMLElement('span', 'forecast-data', data.forecast.condition);

        spanHolder = appendChildrenToParent( [spanName, spanDegrees, spanCondition], spanHolder );
        divForecast = appendChildrenToParent( [spanSymbol, spanHolder], divForecast );
        elements.current.appendChild(divForecast);
        loadUpcomingLocationWeatherInfo(code) 
    }

    function removeElementsByClass(className){
        var elements = document.getElementsByClassName(className);
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    function showUpcomingLocationWeatherInfo(data) {
        removeElementsByClass('forecast-info');
        let divForcast = createHTMLElement('div', 'forecast-info');
        data.forecast.forEach((child) => {
            let spanHolder = createHTMLElement('span', 'upcoming');
            let symbol = symbols[child.condition.toLowerCase()] || symbols['partlySunny'];
            let spanSymbol = createHTMLElement('span', 'symbol', symbol);
            let degrees = `${child.low}${symbols.degrees}/${child.high}${symbols.degrees}`;
            let spanDegrees = createHTMLElement('span', 'forecast-data', degrees);
            let condition = child.condition;
            let spanCondition = createHTMLElement('span', 'forecast-data', condition);
            
            divForcast.appendChild(appendChildrenToParent( [spanSymbol, spanDegrees, spanCondition], spanHolder ))
        });
        elements.upcoming.appendChild(divForcast);
    }

    function loadUpcomingLocationWeatherInfo(code) {
        fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
        .then(handler)
        .then(showUpcomingLocationWeatherInfo);
    }

    function createHTMLElement(tagName, className, textContent) {
        let currentElement = document.createElement(tagName);
        if ( typeof(className) === 'string' ) {
            currentElement.classList.add(className);
        } else if ( typeof(className) === 'object' ) {
            currentElement.classList.add(...className);
        }

        if ( textContent ) {
            currentElement.textContent = textContent;
        }
        return currentElement;
    }

    function appendChildrenToParent(children, parent) {
        children.forEach((child) => parent.appendChild(child));
        return parent;
    }

    function handler(response) {
        if (response.status > 400) {
            throw new Error(`Something went wrong. Error: ${request.statusText}`);
        }
        return response.json();
    }
}

attachEvents();