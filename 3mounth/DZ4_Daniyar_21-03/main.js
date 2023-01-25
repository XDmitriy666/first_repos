const btn = document.querySelector('button')

btn.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET","peoples.json")
    request.setRequestHeader("Content-type","application/json")
    request.send()
    request.onload = () => {
        const data = JSON.parse(request.response)
        data.forEach(people => {
            const div = document.createElement('div')
            const span = document.createElement("span")
            div.innerHTML = people.name
            span.innerHTML = people.age
            document.body.append(div)
            div.append(span)
        })
        console.log(data);
    }
}