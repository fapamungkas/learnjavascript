const name = "Fajar Aji Pamungkas";
const firstName = "Fajar";
const middleName = "Aji";
const lastName = "Pamungkas";
const value = 80;
const template = `Name: ${firstName} ${middleName} ${lastName}`;
const template2 = `Nama : ${name}, Lulus: ${value > 70}`;

console.info(template);
console.info(template2);

//Multiline string
let multiline = `
Nama saya adalah Fajar Aji Pamungkas,
Hello World,
Test,
`;

document.writeln("<pre>");
document.writeln(multiline);
document.writeln("</pre>");
