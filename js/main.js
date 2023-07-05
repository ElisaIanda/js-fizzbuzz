
const chessContainer = document.querySelector(".chess-container");


// Ciclo FOR che stampa tutti i numeri tra 0 e 100
for (let i = 1; i <= 100; i++) {

    let singleCell = document.createElement("div");
    singleCell.classList.add("cell");
    singleCell.innerHTML = i.toString();

    // Blocco IF 
    if (i % 3 === 0) {  

        if (i % 5 === 0) {  
            // console.log(i + " " + "FizzBuzz") stampo in console  
            singleCell.classList.add("red", "font-size");
            singleCell.innerHTML = "FizzBuzz";
        }
        else { 
            // console.log(i + " " + "Fizz") stampo in console 
            singleCell.classList.add("green","font-size");
            singleCell.innerHTML = "Fizz";
        }
    }

    else if (i % 5 === 0) { 
        // console.log(i + " " + "Buzz") stampo in console 
        singleCell.classList.add("yellow","font-size");
        singleCell.innerHTML = "Buzz";
    }

    else { 
        // console.log(i) stampo in console 
        singleCell.classList.add("blu","font-size");
    }

    chessContainer.append(singleCell);
}
