var students = ["Moiz", "Taha", "Abdullah", "Hassam", "Zaid", "Maaz"];

var searchName = prompt("Enter Name:");

var found = false;

for (var i = 0; i < students.length; i++) {

    if (students[i] === searchName) {
        found = true;
        break;
    }
}

if (found === true) {
    console.log("Student Found!");
} else {
    console.log("Student Not Found!");
}