score = 0

function update(){
    score = score+ 1
    document.getElementById("change").innerHTML = "score" + score

} 

function save_score(){
    localStorage.setItem("score", score)

}

function page(){

    window.location = "activity_2.html"
}