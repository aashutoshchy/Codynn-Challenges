function selectScholarshipStudents(students) {
  for (let student of students) {
    let sum = 0;
    for (let i = 0; i < student.grades.length; i++) {
      sum += student.grades[i];
    }
    avg = sum / student.grades.length;
    student.average = avg;
  }
  // Using Filter  to select students with average > 85
  let scholStds = students.filter((e) => {
    return e.average > 85;
  });

  // sorting the student names alphabetically.
  scholStds.sort();
  scholStdArr = [];
  for (let scholStd of scholStds) {
    scholStdArr.push(scholStd.name);
  }
  console.log(scholStdArr);
}
