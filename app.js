//console.log("Hello"); // Working?
var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function convertToWord(letter) {
	if (letter === "r") return "rock";
	if (letter === "p") return "paper";
	if (letter === "s") return "scissors";
}



function win(userChoice, compChoice) {
	//console.log("win");
	//console.log("User: " + userChoice + " <=> Comp:" + compChoice);
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(convertToWord(userChoice));

	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. You win!`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 400);

}
function lose(userChoice, compChoice) {
	//console.log("lose");
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(convertToWord(userChoice));

	compScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord}. You lose!`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 400);
}
function draw(userChoice, compChoice) {
	//console.log("draw");
	const userChoice_div = document.getElementById(convertToWord(userChoice));

	result_p.innerHTML = `You both chose ${convertToWord(userChoice)}! It's a draw!`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 400);
}

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNum = Math.floor(Math.random() * 3);
	return choices[randomNum];
}
//console.log(getComputerChoice());	// Debug

function game(userChoice) {
	//console.log("working " + userChoice);
	const compChoice = getComputerChoice();
	//console.log("User: " + userChoice + " <=> Comp: " + compChoice);	// Debug
	switch(userChoice + compChoice) {
	case "rs":
	case "pr":
	case "sp":
		//console.log("User wins!");
		win(userChoice, compChoice);
		break;
	case "rp":
	case "ps":
	case "sr":
		//console.log("User loses!");
		lose(userChoice, compChoice);
		break;
	case "rr":
	case "pp":
	case "ss":
		//console.log("It's a draw!");
		draw(userChoice, compChoice);
		break;
	}


}

function main() { 
	if(rock_div) {
		rock_div.addEventListener('click', () => game("r"));
	}
	if(paper_div) {
		paper_div.addEventListener('click', () => game("p"));
	}
	if(scissors_div) {
		scissors_div.addEventListener('click', () => game("s"));
	}

}

main();
