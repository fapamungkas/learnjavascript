let name;

if (name === undefined) {
  console.info("UNDIFENED");
} else {
  console.info("DEFINED");
}

const names = ["Fajar", "Aji"];

if (names[2] === undefined) {
  console.info("ARRAY UNDIFENED");
} else {
  console.info("ARRAY DEFINED");
}

const person = {
  name: "Fajar",
};
if (person.name === undefined) {
  console.info("OBJECT UNDIFENED");
} else {
  console.info("OBJECT DIFENED");
}
