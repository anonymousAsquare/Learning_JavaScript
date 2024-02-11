let Age = Math.floor(Math.random() * 100) + 1; // generates a random number between 0 and 100
let Age_range;

Age_range = Age >= 20?"Adult": Age > 12 && Age < 20?"Teenger": Age >= 9 && Age < 13?"Adolesent":"Child";
console.log(`Age ${Age}, Range:${Age_range}`);
