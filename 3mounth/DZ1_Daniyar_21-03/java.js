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

