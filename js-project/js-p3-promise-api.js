const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = [
    {
        "city": "Dhaka",
        "population": "13,87,000‬", 
        "state": "Savar"
    },
    {
        "city": "Karachi", 
        "population": "16,051,521",
        "state": "Punjab"
    },
    {
        "city": "Islamabad", 
        "population": "1,009,832",
        "state": "Islamabad"
    },
    {
        "city": "Delhi in India", 
        "population": "26,454,000",
        "state": "Delhi"
    }
];



fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

    function findMatches(wordToMatch, cities){
        return cities.filter(place => {
            // here we need to figure out if the city or state matches was searched
            const regex = new RegExp(wordToMatch, 'gi');
            return place.city.match(regex) || place.state.match(regex)
        });
    }

// this is make , in population
    function numberWithCommas(x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }


    function displayMatches(){
        const matchArray = findMatches(this.value, cities);
        const html = matchArray.map(place => {
// this is make Mark/LineHit in City or Stat name
            const regex = new RegExp(this.value, 'g');

            //const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class="h4 text-success">${this.value}</span>`);
            return `
            <li>
                <span class="name">${place.city}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
            `;
        }).join('');
        suggestions.innerHTML = html;
    }

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

