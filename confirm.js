const masuk = confirm("Anda Yakin Mau Masuk?");

if (masuk) {
  const name = prompt("Siapa nama Anda?");
  alert(`Hello ${name}`);
} else {
  alert("Bye bye");
}
