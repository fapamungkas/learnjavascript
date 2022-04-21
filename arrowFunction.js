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


// contoh tambahan arrow function
const buku = [{
        id: 1,
        judul: "The Design of Everyday Things",
        pembuat: "Don Norman"
    },
    {
        id: 2,
        judul: "Design Sprint",
        pembuat: "Jake Knapp"
    },
    {
        id: 3,
        judul: "Berani Tidak Disukai",
        pembuat: "Ichiro Kishimi"
    },
    {
        id: 4,
        judul: "Pshycology of Money",
        pembuat: "Morgan Housel"
    }
]

// Mengamil judul buku saja
const judulBuku = buku.map((items) => console.log(items.judul)) // output [The Design of Everyday Things, Design Sprint, Berani Tidak Disukai, Psychology of Money]

// Kalau ngambil nama pembuatnya saja
const pembuatBuku = buku.map((items) => console.log(items.pembuat)) // output [Don Norman,Jake Knapp, Ichiro Kishimi, Morgan Housel]

// Kalau mau ngambil ID dan menambahkan dengan angka 5
const idTambahLima = buku.map((items) => console.log(items.id + 5)) // output [6, 7, 8, 9]