/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = function(students, sandwiches) {
  let unsatisfiedStudents = 0;

  while (students.length > 0 && sandwiches.length > 0){  
    if (students[0] == sandwiches[0]){
      students.shift();
      sandwiches.shift();
      unsatisfiedStudents = 0;

      if (sandwiches.length == 0){
        return students.length
      }

    } else {
      students.push(students.shift());
      unsatisfiedStudents++;
      if (unsatisfiedStudents == students.length){
        return unsatisfiedStudents;
      }
    }
  }

  return students.length
};
