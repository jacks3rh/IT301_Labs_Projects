let answer = Number(prompt('What is the total restaurant bill amount?'));
if (answer === 0){
    answer = Number(prompt('Enter a valid value greater than 0'));
} if (answer < 0);{
    answer = Number(prompt('Enter a non negative value above 0'));
} if (typeof(answer) !== Number);{
    answer = Number(prompt('Enter a Number value'));
}