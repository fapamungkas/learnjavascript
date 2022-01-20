const person = {
  firstName: "Fajar Aji",
  lastName: "Pamungkas",
};

if ("firstName" in person) {
  alert(`Hello ${person.firstName}`);
} else {
  alert("Hello");
}

const student = {
  firstName: "Fajar",
  middleName: undefined,
  lastName: "Pamungkas",
};

if ("middleName" in student != null && undefined) {
  alert(`Hello ${student.middleName}`);
} else {
  alert("Hello student");
}

const names = [null, "Fajar", null];
const result = 0 in names;
document.writeln(`<p>${result}</p>`);
