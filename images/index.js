document.getElementById("loadImage").addEventListener('click', function(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(data => showingImage(data))
    .catch(err => console.log(err));
})

const showingImage = (data) => {
    const container = document.getElementById("image");
    for(photo of data){
        const div = document.createElement("div");
        div.classList.add('card');
        const img = document.createElement("img");
        img.classList.add('card');
        img.src = photo.url;
        div.appendChild(img);
        container.appendChild(div);
    }
}