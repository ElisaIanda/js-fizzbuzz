// const chessContainer = document.querySelector(".chess-container")
// const totalCell = 10 * 10;



// for (let i = 0; i < totalCell; i++){
//     // const singleCell = ' <div class="chess-square"></div>' ;
//     let singleCell = document.createElement("div"); 
//     singleCell.classList.add("chess-square");
//     singleCell.innerHTML = i.toString();
    
//     if(i % 2 === 0){
//         singleCell.classList.add("bg-dark", "text-light")
//     }

    

//     // chessContainer.innerHTML += singleCell;
//     chessContainer.append(singleCell);
// }

const chessContainer = document.querySelector(".chess-container");


// Ciclo FOR che stampa tutti i numeri tra 0 e 100
for (let i = 1; i <= 100; i++) {

    let singleCell = document.createElement("div");
    singleCell.classList.add("cell");
    singleCell.innerHTML = i.toString();

    // Blocco IF 
    if (i % 3 === 0) {  //è divisibile per 3


        if (i % 5 === 0) {  //è divisibile anche per 5
            console.log(i + " " + "FizzBuzz")   //Se è divisibile per entrambi stampo FizzBuzz
            singleCell.classList.add("red", "font-size");
            singleCell.innerHTML = "FizzBuzz";
        }
        else { //se è divisibile solo per 3 stampo solo Fizz
            console.log(i + " " + "Fizz")
            singleCell.classList.add("green","font-size");
            singleCell.innerHTML = "Fizz";
        }
    }
    else if (i % 5 === 0) { 
        console.log(i + " " + "Buzz") 
        singleCell.classList.add("yellow","font-size");
        singleCell.innerHTML = "Buzz";
    }
    else { //Se non è divisibile n'è per 3 n'è per 5 allora stampo i
        console.log(i)
        singleCell.classList.add("blu","font-size");
    }

    chessContainer.append(singleCell);
}
