var numbers = [45, 12, 89, 3, 67, 22, 91, 10];

var largest = numbers[0];
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        largest = numbers[i];
    }

    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log("Largest: " + largest);
console.log("Smallest: " + smallest);