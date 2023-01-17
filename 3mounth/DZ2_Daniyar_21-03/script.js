

// const doHomeWork = (finish,subject = 'math') => {
//     alert(`Starting my ${subject} homework`)
//     finish()
// }
//
// const alertFinished = () => {
//     alert('DONE!!!')
// }
//
// doHomeWork(alertFinished)
//////////////////////////////////Warning/////////////////////////////
// const arr = [1,2,3,4,5,'Daniyar','Hello','World','Dead','NotDead','Death']
//
// arr.forEach(item => {
//     const block = document.createElement('div')
//     block.setAttribute('class','block-g')
//     // block.style.width = '50px'
//     // block.style.height = '50px'
//     // block.style.backgroundColor = 'green'
//     // block.style.marginTop = '10px'
//     block.innerHTML = item
//     const wrapper = document.querySelector('.wrapper')
//     wrapper.append(block)
// })
// arr.map((item) => {
//     console.log(item + 10)
// })

// const num = (a,b) => console.log(a + b)
// num(33,38)
//
// const fruits = ['apple','banana','watermelon','peach']
//
// console.log(fruits)
//
// const result = fruits.filter(item => {
//     return item.length > 5
// })
//
// console.log(result)

// console.log("Hello World")
// setTimeout(() => {
//     console.log("1")
// },5000)
// setTimeout(() => {
//     console.log("2")
// },6000)
// setTimeout(() => {
//     console.log("3")
// },7000)
// setTimeout(() => {
//     console.log("4")
// },8000)

// const interval = setInterval(() => {
//     console.log('hui')
// },1000)
//
//
// setTimeout(() =>{
//     clearInterval(interval)
// },5000)

// function go(){
//     console.log("GO")
// }
//
// function calc(num, func) {
//     console.log(num)
//     func()
// }
//
// calc(12,go)


const box = document.querySelector('.box')

let positionx = 0
let positiony = 0

const move = () => {
    if(positionx <= 450 && positiony <= 0){
        positionx +=10
        box.style.left = `${positionx}px`
        setTimeout(move,10)
    }else if (positionx >= 450 && positiony <= 450){
        positiony +=10
        box.style.top = `${positiony}px`
        setTimeout(move,10)
    }else if(positiony >= 450 && positionx >= 0){
        positionx-= 10
        box.style.left = `${positionx}px`
        setTimeout(move,10)
    }else if(positiony >= 0 && positionx <= 0){
        positiony-= 10
        box.style.top = `${positiony}px`
        setTimeout(move,10)
    }
}
move ()

/////////////////////////////////2part

const time = document.querySelector(".time");
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');


let i = 1;
let del;
start.addEventListener("click" , () => {
    del = setInterval(function () {
        time.innerHTML = i++
    }, 1000);
})

stop.onclick = () => clearInterval(del)