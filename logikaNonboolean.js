//Nilai pertama yang truty

console.info("Hello" || ``);
console.info("" || []);
console.info("0" || "NOL");
console.info(0 || "NOL");
console.info(null || "NULL");
console.info(undefined || "UNDEFINED");
console.info(0 || false);

const person = {
  firstName: "Fajar Aji",
  lastName: "Pamungkas",
};

const name = person.firstName || person.lastName;
console.info(name);

//Nilai pertama yang falsy
console.info("Hello" && ``);
console.info("" && []);
console.info("0" && "NOL");
console.info(0 && "NOL");
console.info(null && "NULL");
console.info(undefined && "UNDEFINED");
console.info(0 && false);
