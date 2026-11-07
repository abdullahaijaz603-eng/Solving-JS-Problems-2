var numbers = [10, 20, 10, 30, 20, 40, 30, 50];

var uniqueNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    var isUnique = true;
    for (var j = 0; j < uniqueNumbers.length; j++) {
        if (numbers[i] === uniqueNumbers[j]) {
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        uniqueNumbers.push(numbers[i]);
    }
}
console.log("Unique Numbers:", uniqueNumbers);