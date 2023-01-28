const som  = document.querySelector('#som')
const usd  = document.querySelector('#usd')
const euro = document.querySelector('#euro')
const jpy = document.querySelector('#jpy')

const handleConvert = (elem, element1, element2) => {
   elem.addEventListener('input',() =>{
      const request = new XMLHttpRequest()
      request.open("GET", "data.json")
      
   })
}