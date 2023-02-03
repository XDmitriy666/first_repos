const main = document.querySelector('.main .container')

function getData (){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => (res.json()))
        .then((data) => {
            data.forEach((post) => {
                main.innerHTML += `
            <div class="card">
            <h2>${post.title}</h2>
            <p>${post.title}</p>
            <img src="images/JS.png" alt="">
            </div>
            `
            })
        })
}
getData()
