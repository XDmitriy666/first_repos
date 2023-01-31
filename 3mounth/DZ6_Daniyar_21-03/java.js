const btn = document.querySelector('.btn')
const block = document.querySelector('.block')
const btn_prev = document.querySelector('.btn_prev')

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(data => console.log(data))


let num = 1

function request(){
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(todoItem => {
            console.log(todoItem)
            block.innerHTML = `
                <div class="card">
                    <h3>${todoItem.title}</h3>
                    <h3>${todoItem.completed}</h3>
                    <h3>${todoItem.id}</h3>
                </div>            
            `
        })
}

btn.onclick = () => {
    num++
    request()
}
btn_prev.onclick = () => {
    num--
    request()
}