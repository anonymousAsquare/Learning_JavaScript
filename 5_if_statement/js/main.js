let score = Math.floor(Math.random() * 100) + 1; // generates a random number between 0 and 100
let grade;

if(score >= 70){
    grade = "A";
}
else if(score >= 60 && score < 70){
    grade = "B"
}
else if(score >= 50 && score < 60){
    grade = "C"
}
else if(score >= 45 && score < 50){
    grade = "D"
}
else if(score >= 40 && score < 45){
    grade = "E"
}
else{
    grade = "F"
}

console.log(`score ${score}, grade:${grade}`)