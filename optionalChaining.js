//Merupakan operator untuk mengamankan ketika kita mengakses data nullish

const person = {
  address: {
    country: "Indonesia",
  },
};

let country = person?.address?.country;

//if(person.adrress !== undefined && person.address !== null) {
//     country = person.addres.country
// }

document.writeln(`<p>${country}</p>`);
