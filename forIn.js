//Mengambil nilai property

const person = {
  firstName: "Fajar",
  middleName: "Aji",
  lastName: "Pamungkas",
};

for (const property in person) {
  document.writeln(`<p>${property} : ${person[property]}</p>`);
}

const names = ["Fajar", "Aji", "Pamungkas"];
for (const index in names) {
  document.writeln(`<p>${index} : ${names[index]}</p>`);
}
