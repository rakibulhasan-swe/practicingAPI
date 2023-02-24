document.getElementById("loadPost").addEventListener('click', function(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPost(data))
})
const displayPost = (posts) => {
    const postContainer = document.getElementById("posts");
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}

 