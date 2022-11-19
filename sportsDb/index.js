document.getElementById("loadSports").addEventListener('click', function(){
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res => res.json())
    .then(data => showSports(data.sports));
})

const showSports = (sports) => {
    const mainDiv = document.getElementById('mainCard');
    sports.forEach(value => {
        console.log(value);
        const div = document.createElement('div');
        div.classList.add("col-md-4");
        div.classList.add("py-2");
        div.innerHTML = `
            <div class="card">
                <img src="${value.strSportThumb}" class="card-img-top img-fluid" alt="">
                <div class="card-body">
                    <h5 class="card-title">${value.strSport}</h5>
                    <p class="card-text">${value.strSportDescription.slice(0, 200)}</p>
                    <a href="#" class="btn btn-outline-dark text-center">View Details</a>
                </div>
            </div>
        `;
        mainDiv.appendChild(div);
    })
}