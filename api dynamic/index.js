const countriesApi = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => countriesApi2(data))
}
countriesApi();

const countriesApi2 = (data) =>{
    const countries = document.getElementById('countries');
    data.forEach(country => {
        let div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = ` 
            <h1>${country.name}</h1>
            <p>${country.capital}</p>
            <button onclick="loadCountry('${country.name}')">Click</button>
        `
        countries.appendChild(div);
    })
}

const loadCountry = (name)=>{
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]));
}
const showCountryDetails = (data)=>{
    const {name, capital, flags} = data;
    console.log('show', data);

    const showDetails = document.getElementById('showdetails');
    const divCreate = document.createElement('div');
    showDetails.innerHTML = `
    <img src="${flags.svg}" alt="">
    <h1>${name.common}</h1>
    <h1>${capital}</h1>
    <h1>${name.official}</h1>
    `
    showDetails.appendChild(divCreate);

}