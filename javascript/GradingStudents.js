function gradingStudents(grades) {
    var output = [];
    for (var i = 0; i < grades.length; i++) {
        var grade = grades[i];
        if (grade < 38) {
            output.push(grade);
        } else {
            var rem = 5 - (grade % 5);

            if (rem < 3) {
                output.push(grade + rem);
            } else {
                output.push(grade)
            }

        }
    }
    return output;
}


var grades = [73, 67, 38, 33];
console.log(gradingStudents(grades));