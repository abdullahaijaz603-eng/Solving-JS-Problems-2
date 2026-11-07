var students = ["Ali", "Sara", "Ahmed", "Ayesha", "Hamza"];
var marks = [78, 92, 45, 88, 33];

var passed = 0;
var failed = 0;
var total = 0;

var highestMarks = marks[0];
var topStudent = students[0];

for (var i = 0; i < students.length; i++) {

    total = total + marks[i];
    if (marks[i] >= 50) {
        console.log(students[i] + " - " + marks[i] + " - PASS");
        passed++;
    }
    else {
        console.log(students[i] + " - " + marks[i] + " - FAIL");
        failed++;
    }

    if (marks[i] > highestMarks) {
        highestMarks = marks[i];
        topStudent = students[i];
    }
}

var average = total / students.length;

console.log("----------------------");
console.log("Total Students:", students.length);
console.log("Passed:", passed);
console.log("Failed:", failed);
console.log("Top Student:", topStudent + " (" + highestMarks + ")");
console.log("Class Average:", average);