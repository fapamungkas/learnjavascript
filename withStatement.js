//Tanpa with statement
const person = {
  firstName: "Fajar",
  middleName: "Aji",
  lastName: "Pamungkas",
};

console.info(person.firstName);
console.info(person.middleName);
console.info(person.lastName);

//Dengan with statement

with (person) {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}
