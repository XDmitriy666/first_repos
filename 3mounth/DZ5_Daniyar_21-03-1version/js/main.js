const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const euro = document.querySelector('#euro');
const rus = document.querySelector('#rus');
const jpy = document.querySelector('#jpy')

const handleConvert = (elem, target,target1,target2,target3) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        request.open("GET","data.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.addEventListener("load", () => {     
            const response = JSON.parse(request.response);
            if (elem === som) {
                target.value = (elem.value / response.usd).toFixed(2);
                target1.value = (elem.value / response.euro).toFixed(2);
                target2.value = (elem.value / response.rus ).toFixed(2) ;
                target3.value =(elem.value/ response.jpy).toFixed(2)
            } else if (elem === usd) {
                target.value = (elem.value * response.usd).toFixed(2);
                target1.value = (elem.value * response.euro / response.usd).toFixed(2);
                target2.value = (elem.value * response.usd /response.rus ).toFixed(2);
                target3.value = (elem.value * response.usd / response.jpy).toFixed(2)
            }else if (elem === euro) {
                target.value = (elem.value * response.euro).toFixed(2);
                target1.value = (elem.value * response.usd / response.euro).toFixed(2);
                target2.value = (elem.value * response.euro / response.rus ).toFixed(2);
                target3.value =(elem.value* response.euro / response.jpy).toFixed(2)
            }else if (elem === rus) {
                target.value = (elem.value * response.rus).toFixed(2);
                target1.value = (elem.value * response.rus / response.usd ).toFixed(2);
                target2.value = (elem.value / response.euro * response.rus ).toFixed(2) ;
                target3.value=(elem.value * response.jpy / response.rus ).toFixed(2)
            }else if (elem === jpy) {
                target.value = (elem.value * response.jpy).toFixed(2);
                target1.value = (elem.value * response.jpy/ response.usd ).toFixed(2);
                target2.value = (elem.value / response.euro * response.jpy ).toFixed(2) ;
                target3.value=(elem.value *  response.jpy / response.rus).toFixed(2)
            }
            elem.value === "" && (target.value = ""); 
            elem.value === "" && (target1.value = ""); 
            elem.value === "" && (target2.value = "");
            elem.value==="" && (target3.value="")
        });
    });
};
handleConvert(som, usd, euro, rus, jpy);
handleConvert(usd, som, euro, rus, jpy);
handleConvert(euro, som, usd, rus, jpy);
handleConvert(rus, som, usd, euro, jpy);
handleConvert(jpy, som, usd, euro, rus)