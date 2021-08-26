player_1_name = localStorage.getItem("player1")
player_2_name = localStorage.getItem("player2")

player_1_score = 0
player_2_score = 0

document.getElementById("player_1_name").innerHTML = player_1_name + "::"
document.getElementById("player_2_name").innerHTML = player_2_name + "::"
document.getElementById("player_1_score").innerHTML = player_1_score
document.getElementById("player_2_score").innerHTML = player_2_score

document.getElementById("player_question").innerHTML = "question turn -" + player_1_name
document.getElementById("player_answer").innerHTML = "answer turn - " + player_2_name

function send(){

        GetWord = document.getElementById("word").value
        NewWord = GetWord.toLowerCase()
        console.log("word in lowercase = " + NewWord)
        letter1 = NewWord.charAt(1)
        console.log(letter1)
        secondletter = Math.floor(NewWord.length/2)
        letter2 = NewWord.charAt(secondletter)
        console.log(letter2)
        thirdletter = NewWord.length - 1
        letter3 = NewWord.charAt(thirdletter)
        console.log(letter3)
        remove1 = NewWord.replace(letter1,"_")
        remove2 = remove1.replace(letter2,"_")
        remove3 = remove2.replace(letter3,"_")
        console.log(remove3)

        question_word = "<h4 id='word_display'> Q. "+remove3+"</h4>";
        input_box = "<br>Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row
    document.getElementById("word").innerHTML = " "
}

    question_turn = "player_1"
    answer_turn = "player_2"

function check(){

    answer = document.getElementById("input_check_box").value
    new_answer = answer.toLowerCase()
    console.log("answer in lower case" + new_answer)

    if(new_answer == NewWord){

        
        if (answer_turn == "player_1") {

            player_1_score = player_1_score + 1
            document.getElementById("player_1_score").innerHTML = player_1_score
            
        } else {

            player_2_score = player_2_score + 1
            document.getElementById("player_2_score").innerHTML = player_2_score
            
        }
    }

    if (question_turn == "player_1") {

        question_turn = "player_2"
        document.getElementById("player_question").innerHTML = "question turn -" + player_2_name
        
    } else {


        question_turn = "player_1"
        document.getElementById("player_question").innerHTML = "question turn -" + player_1_name
        
    }

    if (answer_turn == "player_1")

    {   answer_turn = "player_2"
    document.getElementById("player_answer").innerHTML = "answer turn - " + player_2_name

        
    } else {

        answer_turn = "player_1"
        document.getElementById("player_answer").innerHTML = "answer turn - " + player_1_name
        
    }

    document.getElementById("output").innerHTML = " "


}