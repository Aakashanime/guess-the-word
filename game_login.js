function Login(){

player_1 = document.getElementById("player_1_name").value
player_2 = document.getElementById("player_2_name").value
localStorage.setItem("player1", player_1)
localStorage.setItem("player2", player_2)
window.location ="game_page.html"
 
}