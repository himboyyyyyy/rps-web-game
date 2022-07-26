function scissor() {
    getResult("scissor")
}

function paper() {
    getResult("paper")
}

function rock() {
    getResult("rock")
}

function getResult(choice) {
    array = ["scissor", "paper", "rock"]
    com = array[Math.floor(Math.random()*array.length)];
    if (choice == com) {
        const result = document.getElementById("result");
        result.innerHTML = "TIE!";
    } 
    if (choice == "scissor") {
        if (com == "paper") {
            const result = document.getElementById("result");
            result.innerHTML = "YOU WIN! your choice:" + choice + "computer choice:" + com;
        } else if (com == "rock") {
            const result = document.getElementById("result");
            result.innerHTML = "YOU LOSE! your choice:" + choice + "computer choice:" + com;
        }
    }

    if (choice == "paper") {
        if (com == "rock") {
            const result = document.getElementById("result");
            result.innerHTML = "YOU WIN! your choice:" + choice + "computer choice:" + com;
        } else if (com == "scissor") {
            const result = document.getElementById("result");
            result.innerHTML = "YOU LOSE! your choice:" + choice + "computer choice:" + com;
        }
    }

    if (choice == "rock") {
        if (com == "scissor") {
            const result = document.getElementById("result");
            result.innerHTML = "YOU WIN! \nyour choice:" + choice + "computer choice:" + com;
        } else if (com == "paper") {
            const result = document.getElementById("result");
            const choice = document.getElementById("user");
            const com = document.getElementById("com");
            result.innerHTML = "YOU LOSE!";
            choice.innerHTML = "you choice:" + choice;
            com.innerHTML = "YOU LOSE!";
        }
    }
}