
let number = +prompt ('Какое число проверить на простое?');
alert (`Ответ : ${isNumberSimple (number)} `);
let limit = +prompt ('До какого числа вывести простые числа?');
const simpleNumbers = [];
for (let j = 2; j <= limit; j++) {
     if (isNumberSimple (j)) {
         simpleNumbers.push(j);
     }
}
console.log (`Простые числа от 2 до ${limit}: количество ${simpleNumbers.length} ${simpleNumbers}`);

alert (`Простые числа от 2 до ${limit}: количество ${simpleNumbers.length} ${simpleNumbers}`);
function isNumberSimple (number) {
    let answer = true;
    for (let i = 2; i < number; i++) {
        let remainder = number % i;
        if (remainder == 0) {
            answer = false;
            break;
        }

    }
    return answer;
}