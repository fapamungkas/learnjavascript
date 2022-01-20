// Kondisi di cek setelah loop, sehingga paling tidak akan ada satu hasil loop yang ditampilkan

let counter = 100;

do {
  document.writeln(`<p>Perulangan ke ${counter}</p>`);
  counter++;
} while (counter <= 10);
