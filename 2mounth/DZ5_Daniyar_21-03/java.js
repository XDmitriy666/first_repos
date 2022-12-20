//Первая часть
function obratno (str){
    var string = '';
    for (var i = str.length - 1;i >= 0; i--){
        string+= str[i];
    }
    return string;
}
console.log(obratno('Hello'))

//Вторая часть
const getAverage = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const length = numbers.length;
    return sum / length;
};

const numbers = [1, 2, 3, 4,];
console.log(getAverage(numbers));
