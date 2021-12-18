
let number = +prompt ('Какое число проверить на простое?');
let result = isNumberSimple (number)[0];
let string = `${isNumberSimple (number)[1]}`;
if (result) {
    alert (`Число простое`);
}
   else {
       alert (`Число не простое, т.к делится на ${string}`);
   }

let limit = +prompt ('До какого числа вывести простые числа?');
const simpleNumbers = [];
for (let j = 2; j <= limit; j++) {
     if (isNumberSimple (j)[0]) {
         simpleNumbers.push(j);
     }
}
console.log (`Простые числа от 2 до ${limit}: количество ${simpleNumbers.length}. Числа: ${simpleNumbers}`);

alert (`Простые числа от 2 до ${limit}: количество ${simpleNumbers.length}. Числа: ${simpleNumbers}`);
function isNumberSimple (number) {
    let answer = [];
    answer[0] = true;
    for (let i = 2; i < number; i++) {
        let remainder = number % i;
        if (remainder == 0) {
            answer[0] = false;
            answer[1] = i;
            break;
        }

    }
    return answer;
}