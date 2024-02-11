let score = Math.floor(Math.random() * 100) + 1; // generates a random number between 0 and 100
let grade;

switch(score){
    case score >= 70:
        grade = "A";
        break;
    
    case score >= 60 && score < 70:
        grade = "B";
        break;
    
    case score >= 50 && score < 60:
        grade = "C";
        break;
    
    case score >= 45 && score < 50:
        grade = "D";
        break;
    
    case score >= 40 && score < 45:
        grade = "E";
        break;
    
    default:
        grade = "F";
}
console.log(`score ${score}, grade:${grade}`)