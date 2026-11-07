var marks = [85, 42, 67, 30, 90, 55, 25, 78];

var passingMarks = [];

for (var i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
        passingMarks.push(marks[i]);
    }
}

console.log("Passing Marks:", passingMarks);
console.log("Total Passed:", passingMarks.length);