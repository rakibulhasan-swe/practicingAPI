document.getElementById("loadCountry").addEventListener("click", function(){
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => showingCountry(data))
})

const showingCountry = (data) => {
    const cardContainer = document.getElementById("card-container");
    data.forEach(country => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                <div>
                    <img src=${country.flags.svg} alt='flags'>
                </div>
                <div>
                    <h4>${country.name.official}</h4>
                    <p>Population: ${country.population}</p>
                </div>
        `;
        cardContainer.appendChild(card);
        
    });
}