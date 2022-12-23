// const first =()=>{
//     console.log(1);
// }
// const second =()=>{
//     console.log(2);
// }
// first()
// second()

// const first = ()=>{
//     setTimeout(()=>{
//         console.log(1)
//     },500 )
// }
// const second = ()=>{
//     console.log(2)
// }
// first()
// second()

// function getSquareNums(arr){
//     const newArr = [];
//     for (let i=0; i<arr.length; i++){
//         newArr.push(arr[i] ** 2)
//     }
//     return newArr;
// }
// const nums = [1, 2, 3, 15];
// console.log(nums)
// const res = getSquareNums(nums)
// console.log(res)
//
//
// function getDivideNums(arr){
//     const newArr = [];
//     for (let i=0; i<arr.length; i++){
//         newArr.push(arr[i] / 2)
//     }
//     return newArr;
// }
// const nums2 = [1, 2, 3, 18];
// console.log(nums2)
// const res2 = getDivideNums(nums2)
// console.log(res2)
//
// function doSome(arr, instruction){
//     const newArray = [];
//     for (let i = 0; i < arr.length; i++){
//         newArray.push(instruction(arr[i]))
//     }
//     return newArray;
// }
//
// function getSquared(num){
//     return num ** 2
// }
// function getDivide(n){
//     return n/2
// }
// console.log(doSome([4,7,3,9,8,0],getSquared))
// console.log(doSome([4,7,3,9,8,0],getDivide))
//
// function getFullName(firstName){
//     return function (lastName){
//         return `Hello ${firstName} ${lastName}`
//     }
// }
// const fullname = getFullName('Daniyar')
// console.log(fullname);
// console.log(fullname('Altymyshow'))
//
// function getUserProfessional(prof){
//     const profession = prof.toUpperCase();
//     return function (name){
//         return ` ${profession} ${name}`
//     }
// }
// const profMale = getUserProfessional('Фронтенд-разраб')
// const profFeMale = getUserProfessional('Фронтенд-разработчица')
// console.log(profMale)
// console.log(profFeMale('Дэн'))
// console.log(profFeMale('Диана'))
//
// //Работа с DOM элементами
// const div = document.createElement("div")
// //добавить к нему класс wrapper
// div.classList.add('wrapper');
// const body = document.body
// body.appendChild(div);
// //создать заголовок h1
// const header = document.createElement('h1')
// header.textContent = 'DOM-elements'
// div.insertAdjacentElement('beforebegin', header);
// const ul = `
//     <ul>
//     <li>one</li>
//     <li>two</li>
//     <li>three</li>
// </ul>
// `
// div.innerHTML = ul;
// const counter = document.querySelectorAll('.counter');
// const incBtn = document.querySelector('.increment')
// const decBtn = document.querySelector('.decrement')
// const input = document.querySelector('.input')
const btns = document.querySelectorAll('.counter__btn');
btns.forEach(btn=>{
    btn.addEventListener('click',function (){
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__value');
        const currentValue = +inp.value;
        let newValue;


        if (direction === 'plus'){
            newValue = currentValue + 1;
        }else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }
        inp.value = newValue;
    })
})
