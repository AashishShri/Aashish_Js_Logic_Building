const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];

const groupByAge = people.reduce((acc, person) => {
  const key = person.age;
  acc[key] = acc[key] || [];
  acc[key].push(person);
  return acc;
}, {});

console.log(groupByAge);
/*
  {
    25: [{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }],
    30: [{ name: "Charlie", age: 30 }]
  }
  */
