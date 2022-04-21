arrayKosong = [];
arrayNama = ["Fajar", "Aji", "Pamungkas"];

//Menambah data
const names = [];
names.push("Fajar");
names.push("Aji", "Pamungkas");
names.push("Arya", "Predika");

console.table(names);

//mengambil data index
console.info(names[2]);
console.info(names[4]);

//mengganti data
names[0] = "Kurnia";
console.table(names);

//menghapus data
delete names[2];
console.table(names);

//mengisi index lagi
names[2] = "Pamungkas";

//Menambah array di dalam array
names.push(["Aji", "Muthiah", "Nur", "Azizah"]);

console.table(names);


// Menambahkan semua isi dari array
const angkaArray = [34, 65, 66, 98, 23, 53, 77, 52]
const totalJumlah = angkaArray.reduce((acc, current) => acc + current, 0)

console.log(`Totalnya adalah ${totalJumlah}`) // output Totalnya adalah 468