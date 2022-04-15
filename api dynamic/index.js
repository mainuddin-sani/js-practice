const countriesApi = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => countriesApi2(data))
}
countriesApi();

const countriesApi2 = (data) =>{
    const countries = document.getElementById('countries');
    data.forEach(country => {
        console.log(country);
        let div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = ` 
            <h1>${country.name}</h1>
            <p>${country.capital}</p>
            <button>Click</button>
        `
        countries.appendChild(div);
    })
}