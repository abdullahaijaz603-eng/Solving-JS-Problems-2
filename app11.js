var numbers = [10, 25, 40, 55, 70, 85, 100];
var numberTosearch = prompt("Enter a number to search in the array: ");

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === parseInt(numberTosearch)) {
        console.log( "Enter Number:"+numberTosearch );
        console.log("Number found at index:", i);
        break;
    }
}