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
            const user = document.getElementById("choice");
            const computer = document.getElementById("computer");
            result.innerHTML = "TIE!";
            user.innerHTML = "your choice: " + choice;
            computer.innerHTML = "computer's choice: " + com;
    } 
    if (choice == "scissor") {
        if (com == "paper") {
            const result = document.getElementById("result");
            const user = document.getElementById("choice");
            const computer = document.getElementById("computer");
            result.innerHTML = "YOU WIN!";
            user.innerHTML = "your choice: " + choice;
            computer.innerHTML = "computer's choice: " + com;
        } else if (com == "rock") {
            const result = document.getElementById("result");
            const user = document.getElementById("choice");
            const computer = document.getElementById("computer");
            result.innerHTML = "YOU LOSE!";
            user.innerHTML = "your choice: " + choice;
            computer.innerHTML = "computer's choice: " + com;
        }
    }

    if (choice == "paper") {
        if (com == "rock") {
            const result = document.getElementById("result");
            const user = document.getElementById("choice");
            const computer = document.getElementById("computer");
            result.innerHTML = "YOU WIN!";
            user.innerHTML = "your choice: " + choice;
            computer.innerHTML = "computer's choice: " + com;
        } else if (com == "scissor") {
            const result = document.getElementById("result");
            const user = document.getElementById("choice");
            const computer = document.getElementById("computer");
            result.innerHTML = "YOU LOSE!";
            user.innerHTML = "your choice: " + choice;
            computer.innerHTML = "computer's choice: " + com;
        }
    }

    if (choice == "rock") {
        if (com == "scissor") {
            const result = document.getElementById("result");
            const user = document.getElementById("choice");
            const computer = document.getElementById("computer");
            result.innerHTML = "YOU WIN!";
            user.innerHTML = "your choice: " + choice;
            computer.innerHTML = "computer's choice: " + com;
        } else if (com == "paper") {
            const result = document.getElementById("result");
            const user = document.getElementById("choice");
            const computer = document.getElementById("computer");
            result.innerHTML = "YOU LOSE!";
            user.innerHTML = "your choice: " + choice;
            computer.innerHTML = "computer's choice: " + com;
        }
    }
}