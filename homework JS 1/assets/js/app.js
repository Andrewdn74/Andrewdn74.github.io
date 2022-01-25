function calc() {
    let yourIncome = +income.value;
    let taxBrackets = [0, 9950, 40525, 86375, 164925, 209425, 523600];
    let taxRates = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
    let deduction = 12550;
    let incomeTax = 0;
    if (yourIncome <= deduction) {
        Tax.innerHTML = incomeTax;
        return;
    }
    let taxableIncome = yourIncome - deduction;
    taxBrackets.push(taxableIncome);
    
    for (let i = 0; i < taxBrackets.length - 1; i++) {
        if (taxableIncome > taxBrackets[i+1]) {
        incomeTax += (taxBrackets[i + 1] - taxBrackets[i]) * taxRates[i];
        } else {
            incomeTax += (taxableIncome - taxBrackets[i]) * taxRates[i];
            break;
        }
        
    }
    
    Tax.innerHTML = incomeTax;
}