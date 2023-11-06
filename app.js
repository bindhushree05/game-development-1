//Iteration 1: Make the play button functional.
//Description: When the play button is clicked the game page should be displayed.
const play = document.getElementById("play-button");
play.onclick = () => {
    window.location.href = "./game.html";
};
