const nilai = 80;
let ucapan;

if (nilai >= 70) {
    ucapan = "Selamat Anda Lulus";
} else {
    ucapan = "Silahkan Coba Lagi";
}

document.writeln(`<p>${ucapan}</p>`);

//ternary operator ?
ucapan = nilai >= 70 ? "Selamat Anda Lulus" : "Silahkan Coba Lagi";

document.writeln(`<p>${ucapan}</p>`);


// Jika skill nya javascript maka dia Node.js Developer, jika skillnya PHP dia Laravel Developer
const skillDia = "javascript"

const keputusan = skillDia === "javascript" ? "Node.js Developer" : "Laravel Developer"
console.log(`Dia adalah ${keputusan}`) //output "Dia adalah Node.js Developer"