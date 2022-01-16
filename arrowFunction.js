//Arrow Funtion

// Funtion Expression
// const tampilNama = function (nama) {
//   return "Halo, ${nama}";
//   return `Halo, ${nama}`;
//   console.log(`Halo, ${nama}`);
// };
// console.log(tampilNama("Fajar"));
// tampilNama("Fajar");

// const tampilNama = (nama, waktu) => {
//   return `Hallo ${nama}, selamat ${waktu}`;
// };

// console.log(tampilNama("Fajar", "Pagi"));

let mahasiswa = ["Fajar Aji Pamungkas", "Doddy Ferdiansyah", "Erik"];

let jumlahHuruf = mahasiswa.map((nama) => ({ nama, jumlahHuruf: nama.length }));

// console.log(jumlahHuruf);
console.table(jumlahHuruf);
