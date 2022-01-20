let parameter;

let data = parameter;
if (data === undefined || data === null) {
  data = "Nilai Default";
}

document.writeln(`<p>${data}</p>`);

//nullish coalescing (??), mengecek datanya undefined atau null
data = parameter ?? "Nilai Default";

document.writeln(`<p>${data}</p>`);
