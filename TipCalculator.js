let answer = 'Enter the total restaurant bill amount';
let input;
let amount;
let isValid;

do {
    input = prompt(answer);
    amount = Number(input);
    isValid = false;

    if (input === null || input.trim() === '' || amount === 0) {
        answer = 'The amount cannot be blank or 0 enter a valid amount greater than zero';
    } else if (Number.isNaN(amount)) {
        answer = `"${input}" is not a valid number enter a numeric amount`;
    } else if (amount < 0) {
        answer = 'Negative amounts are not allowed enter a positive amount:';
    } else {
        isValid = true;
    }
} while (!isValid);

let tip = amount * 0.10;
let result = `For a bill of $${amount.toFixed(2)}, the tip should be $${tip.toFixed(2)}.`;

console.log(result);
document.write(result);