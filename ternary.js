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
