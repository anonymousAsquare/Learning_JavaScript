// Rock, Paper, Scissors
let play_game = confirm("Would you love to play Rock, Paper, Scissors?");
if (play_game){
    let select = prompt("Type \n1 for Rock \n2 for Paper \n3 for Scissors");
    let output;
    if(select){
        let computer_choice = Math.floor(Math.random() * 2) + 1;
        if(typeof select === 'object' && select === null){
            alert("Oops you did'nt type anything, Maybe next time");    
        }else{
            if(select === "1"){
                (Number(select) < computer_choice)?(computer_choice === 2)?alert("You won! \nYou: Rock > Computer: Paper"):alert("You won! \nYou: Rock > Computer: Scissors"):alert("Draw! \nYou: Rock = Computer: Rock")
            } else if(select === "2"){
                (Number(select) >= computer_choice)?(computer_choice === 1)?alert("You Lost! \nYou: Paper < Computer: Rock"):alert("Draw! \nYou: Paper = Computer: Paper"):alert("You lost! \nYou: Paper < Computer: Scissors")
            } else if(select === "3"){
                (Number(select) > computer_choice)?(computer_choice === 1)?alert("You Lost! \nYou: Scissors < Computer: Rock"):alert("You won! \nYou: scissors > Computer: Paper"):alert("Draw! \nYou: Scissors = Computer: Scissors")
            } else{
                alert("Oops wrong input, Maybe next time");
            }
            play_again = confirm("would you love to play again?")
            play_again?location.reload():alert("Oops, see ya!");
            }
    }else{
        alert("Oops you chaged your mind, Maybe next time");
    }
} else{
    alert("Oops!, Maybe next time");
}
