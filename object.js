const person = {
  nama: "Fajar Aji Pamungkas",
  "alamat domisili": "Banyumas",
  alumni: "Teknik Elektro 2015",
};

// const person = {};

// person["nama"] = "Fajar Aji Pamungkas";
// person["alamat"] = "Banyumas";
// person["alumni"] = "Teknik Elektro 2015";

console.info(`Alumni: ${person.alumni}`);
console.info(`Alamat: ${person["alamat domisili"]}`);

console.table(person);

delete person["alamat"];

console.table(person);
