document.getElementById("loadSports").addEventListener('click', function(){
    fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
    .then(res => res.json())
    .then(data => showTeams(data.teams));
})

const showTeams = (teams) => {
    const mainDiv = document.getElementById('mainCard');
    teams.forEach(team => {
        console.log(team);
        const div = document.createElement('div');
        div.classList.add("col-md-4");
        div.classList.add("py-2");
        div.innerHTML = `
            <div class="card">
                <img src="${team.strTeamBadge}" class="card-img-top w-50 mx-auto" alt="">
                <div class="card-body">
                    <h5 class="card-title">${team.strTeam}</h5>
                    <p class="card-text py-2">${team.strStadiumDescription.slice(0, 210)}</p>
                    <a href="#" class="btn btn-outline-dark text-center">View Details</a>
                </div>
            </div>
        `;
        mainDiv.appendChild(div);
    })
}