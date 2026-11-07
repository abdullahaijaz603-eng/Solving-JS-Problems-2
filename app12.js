var numbers = [12, -5, 0, 18, -9, 25, 0, -3, 40];

var positiveNumbers = [];
var negativeNumbers = [];
var zeros = [];

for (var i = 0; i < numbers.length; i++) {

    if (numbers[i] > 0) {
        positiveNumbers.push(numbers[i]);
    }
    else if (numbers[i] < 0) {
        negativeNumbers.push(numbers[i]);
    }
    else {
        zeros.push(numbers[i]);
    } 
}
console.log("Positive Numbers:", positiveNumbers);
console.log("Negative Numbers:", negativeNumbers);
console.log("Zeros:", zeros);