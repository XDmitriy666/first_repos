// let string = prompt('Enter your name ...')
//
// const regExp = /n/i
//
// console.log(string.match(regExp))


// const symbols = 'AaaaaaaBbbbbbbCccccccDddddd'
//
// const regExp = /c/gi
//
// console.log(symbols.match(regExp))

// const numbers = '1231asdf231231df2fd31dffsf23fsdfe123'
//
// const regExp = /\w/g
//
// console.log(numbers.match(regExp))
// console.log(numbers.replace(regExp,'*'))
//
// let num = 0
//
// const count = () => {
//     num++
//     console.log(num)
//     if (num < 500){
//         count()
//     }
// }

// const peoples = {
//     John: {
//         age:27,
//         parents:{
//             Nick:{
//                 age:50,
//             },
//             Stella:{
//                 age:48
//             }
//         }
//     },
//     Dave: {
//         age:25,
//         parents: {
//             Kelly:{
//                 age:40
//             }
//         }
//     }
// }
//
// // console.log(peoples.John)
//
// const parentsList = (obj) => {
//     // console.log(obj)
//     if (obj.parents){
//         for (let key in obj.parents){
//             console.log(key)
//         }
//     }
// }
// for (let key in peoples) {
//     parentsList(peoples[key])
// }
// parentsList(peoples.John)

//Домашкааа
const phoneInput = document.querySelector('#phoneInput')
const phoneCheck = document.querySelector('#phoneCheck')
const phoneResult = document.querySelector('.phoneResult')

const phoneRegExp = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/

phoneCheck.addEventListener('click',() => {

    if (phoneRegExp.test(phoneInput.value)){
        phoneResult.innerText = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerText = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})

