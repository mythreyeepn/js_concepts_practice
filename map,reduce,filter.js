let students = [
  { name: "Abc", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 16, marks: 69 },
  { name: "Kaushal", rollNumber: 15, marks: 35 },
  { name: "Dilpreet", rollNumber: 17, marks: 55 },
];

const names = students.map((item) => {
  return item.name.toUpperCase();
});

console.log(names);

const marksgtthan50rngrtthan15 = students.filter((item) => {
  return item.marks > 50 && item.rollNumber > 15;
});

console.log(marksgtthan50rngrtthan15);

const sumOfmarks = students.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);

console.log(sumOfmarks);

const namesmrksgrtthn50 = students
  .filter((item) => item.marks > 50)
  .map((x) => x.name);

console.log(namesmrksgrtthn50);
