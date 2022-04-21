//Membuat function
function sayHelloWorld() {
    document.writeln("<p>Selamat Istirahat</p>");
}

//Memanggil Function
sayHelloWorld();
sayHelloWorld();
sayHelloWorld();


//function untuk perkalian 2 angka
function tambah(angkaPertama, angkaKedua) {
    const total = angkaPertama * angkaKedua
    return `Hasil dari ${angkaPertama} * ${angkaKedua} adalah ${total}`
}

console.log(tambah(35, 50)) //output Hasil dari 35 * 50 adalah 1750