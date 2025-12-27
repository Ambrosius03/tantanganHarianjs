//tantangan coding fizz buzz versi NOOB
const angkaAcak = Math.floor(Math.random() * 100) + 1; //variabel angka 1 sampai 100

if (angkaAcak % 3 == 0){
  console.log("Fizz");
}
else if(angkaAcak % 5 == 0){
 console.log("Buzz"); 
}
else if(angkaAcak % 3 == 0 && angkaAcak % 5 == 0){
  console.log("FizzBuzz");
}
else{
  console.log(angkaAcak);
}


//versi tantangan dari chat gpt
const fizzBuzz = (n) => (n % 15 === 0) ? "FizzBuzz" 
                      : (n % 3 === 0)  ? "Fizz" 
                      : (n % 5 === 0)  ? "Buzz" 
                      : n;

console.log(fizzBuzz(15));



