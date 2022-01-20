const nilai = "A";

switch (nilai) {
  case "A":
    document.writeln("<p>Wow Anda Lulus dengan Baik</p>");
    break;
  case "B":
  case "C":
    document.writeln("<p>Anda Lulus</p>");
    break;
  case "D":
    document.writeln("<p>Anda Tidak Lulus</p>");
    break;
  default:
    //pengganti else
    document.writeln("<p>Mungkin Anda Salah Jurusan</p>");
}
