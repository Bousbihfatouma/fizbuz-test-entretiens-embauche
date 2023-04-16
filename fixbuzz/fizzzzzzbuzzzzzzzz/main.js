// Définition du nombre maximum à atteindre
const maxNumber = 100;

// Boucle for qui va de 1 jusqu'au nombre maximum
for (let number = 1; number <= maxNumber; number++) {
  // Si le nombre est divisible par 3 et par 5, on affiche FizzBuzz
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  }
  // Sinon, si le nombre est divisible par 3, on affiche Fizz
  else if (number % 3 === 0) {
    console.log("Fizz");
  }
  // Sinon, si le nombre est divisible par 5, on affiche Buzz
  else if (number % 5 === 0) {
    console.log("Buzz");
  }
  // Sinon, on affiche le nombre lui-même
  else {
    console.log(number);
  }
}
