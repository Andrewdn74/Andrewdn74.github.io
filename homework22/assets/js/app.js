
function calc() {
    sens.innerHTML = '';
    let m = +massInput.value;
    let h = +heigthInput.value;
    // console.log (h, typeof(h));
    if (!(h >= 0.3 && h <= 3)) {
        sens.innerHTML = 'Введите правильный рост в метрах!!';
        indexOfMass.innerHTML = 0; 
        return;
    }
    if (!(m >= 2 && m <= 300)) {
        sens.innerHTML = 'Введите правильный вес в килограммах!!';
        indexOfMass.innerHTML = 0; 
        return;
    }

    let index = m / h**2;
    let result = +index.toFixed(1);
    indexOfMass.innerHTML = result;
    // console.log (index,);
    if (result < 16) {
        sens.innerHTML = 'У Вас выраженный дефицит массы тела.';
        return ;
    }
    if (result <= 18.5) {
        sens.innerHTML = 'У Вас недостаточная (дефицит) масса тела.';
        return ;
    }
    if (result <= 25) {
        sens.innerHTML = 'У Вас отличное соотношение массы тела и роста!';
        return ;
    }
    if (result <=30 ) {
        sens.innerHTML = 'У Вас избыточная масса тела (предожирение).';
        return ;
    }
    if (result <= 35) {
        sens.innerHTML = 'У Вас ожирение первой степени.';
        return ;
    }
    if (result <= 40) {
        sens.innerHTML = 'У Вас ожирение второй степени.';
        return ;
    }
    else {
        sens.innerHTML = 'У Вас ожирение третьей степени.';
        return ;
    }

}