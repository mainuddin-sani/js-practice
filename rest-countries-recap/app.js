// data fetch from restcountries sarver

const restcountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=>restCountriesDisplay(data))
}

const restCountriesDisplay = countries =>{
    console.log(countries[0])
    const restCountriesHtml = countries.map(country => restCountryDisplayHtml(country))
    const div = document.getElementById('countries');
    div.innerHTML = restCountriesHtml.join(' ');
}

const restCountryDisplayHtml = (country) =>{
    return `
        <div class="items">
            <h1>${country.capital}</h1>
            <img src="${country.flags.png}">
        </div>
    `
}
restcountries()