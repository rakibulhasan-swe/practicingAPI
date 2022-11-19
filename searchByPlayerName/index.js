//https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=neymar
document.getElementById("err").style.display = 'none';
// driver function
document.getElementById('players').addEventListener('click', function(){
    const input = document.getElementById('input');
    const text = input.value;
    // clear value
    input.value = "";

    if(text===""){
        document.getElementById('mainCard').textContent = "";
        Error();
    }else{
        document.getElementById("err").style.display = 'none';
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${text}`;
        fetch(url)
        .then(res => res.json())
        .then(data => players(data.player))
        .catch(err => Error(err))
    }
});
// showing player details
const players = (data) => {
    const mainDiv = document.getElementById('mainCard');
    mainDiv.textContent = "";
    data.forEach(player => {
        const div = document.createElement('div');
        div.classList.add("col-md-8");
        div.classList.add("mx-auto");
        div.classList.add("py-2");
        div.innerHTML = `
            <div class="card">
                <img src="${player.strThumb}" class="card-img-top w-50 mx-auto" alt="">
                <div class="card-body">
                    <h5 class="card-title pb-2">${player.strPlayer}</h5>
                    <p class="card-text">Club: ${player.strTeam}</p>
                    <p class="card-text">Date of birth: ${player.dateBorn}</p>
                    <p class="card-text">${player.strDescriptionEN}</p>
                    <a href="#" class="btn btn-outline-dark text-center pt-2">View Details</a>
                </div>
            </div>
        `;
        mainDiv.appendChild(div);
    })
};
// showing error for empty and not found players
const Error = () => {
    const err = document.getElementById("err");
    err.innerText = "Can't be empty or Not Found! Try again with players name";
    err.style.display = "block";
}