function sayHello(firstName, lastName) {
  const say = `Hello ${firstName} ${lastName}`;
  return say;
}

const result = sayHello("Fajar Aji", "Pamungkas");
document.writeln(`${result}`);

function getFinalValue(value) {
  if (value > 90) {
    return "A";
  } else if (value > 80) {
    return "B";
  } else if (value > 70) {
    return "C";
  } else if (value > 60) {
    return "D";
  } else {
    return "E";
  }
}

const finalValue = getFinalValue(95);
document.writeln(`<p>${finalValue}</p>`);

function isContains(array, searchValue) {
  for (const element of array) {
    if (element === searchValue) {
      return true;
    }
  }
  return false;
}

const array = [1, 2, 3, 4, 5, 332, 53524, 223];
const search = 10;

const found = isContains(array, search);
document.writeln(`<p>${found}</p>`);
