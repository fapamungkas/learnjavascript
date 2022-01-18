const value1 = parseInt("1");
const value2 = 1;
const sum = value1 + value2;

document.writeln(`<p>${sum}</p>`);
document.writeln(`<p>${parseInt("1.1")}</p>`); //setelah koma tidak dianggap
document.writeln(`<p>${parseFloat("1.123")}</p>`); //desimal
document.writeln(`<p>${Number("1.13234")}</p>`);

//merubah number ke string
const a = 1;
const b = 2;
const jumlah = a.toString() + b.toString();

document.writeln(`<p>${jumlah}</p>`);

//NaN
document.writeln(`<p>${parseInt("salah")}</p>`);
document.writeln(`<p>${parseFloat("1.123text")}</p>`);
document.writeln(`<p>${Number("1.13234text")}</p>`); //NUmber tidak mentolerir kesalahan tulis

//Operasi NaN
const first = Number("salah");
const totalNumber = first + 100;
document.writeln(`<p>${totalNumber}</p>`);

//Mengecek NaN
document.writeln(`<p>${isNaN(first)}</p>`);
document.writeln(`<p>${isNaN(100)}</p>`);
