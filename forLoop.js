// for (let counter = 1; counter <= 10; counter++) {
//     document.writeln(`<p>Perulangan ke ${counter}</p>`);
// }



// Example Fizzbuzz Case
/*
Jika angka nya habis dibagi 3 maka Fizz
Jika angka nya habis dibagi 5 maka Buzz
Jika angka nya habis dibagi 15 maka Fizzbuzz

angka yang dicek mulau dari angka 1 - 100
*/

// Solution
for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) console.log("Fizzbuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

// output 1,2,Fizz,4,Buzz .........