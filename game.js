

let A1 = document.getElementById("A1");
let A2 = document.getElementById("A2");
let A3 = document.getElementById("A3");

let B1 = document.getElementById("B1");
let B2 = document.getElementById("B2");
let B3 = document.getElementById("B3");

let C1 = document.getElementById("C1");
let C2 = document.getElementById("C2");
let C3 = document.getElementById("C3");

let turn = true;

////////////// Player Name Option 1 /////////////
let playername = ["Muzammil", "Owais"];


////////////// Player Name Option 2 /////////////
// let player1 = prompt("Enter Your Name");
// let playerjee = document.getElementById("playerjee");
// player1.addEventListener("click", function(){
//     playerjee.value = player1;
// })


//////// ----- TIMER LAGANA ------- ////////
// let timer = document.getElementById("timer");


// setTimeout(function(){
//     alert("Game Over");
// },5000);


   //////// ----- GAME RULES ------- ////////

function rules(obj){
    if(turn){
    obj.value= "X"
    obj.setAttribute("disabled",true)
        turn = false;
        obj.setAttribute("class", "orange")
    }
    else{
        obj.value= "O"
        turn = true;
        obj.setAttribute("disabled",true)
        obj.setAttribute("class", "black")
    }

}
                //////// ----- WINNER RULES ------- ////////

function winner(){
    if (A1.value==A2.value && A2.value==A3.value&&A1.getAttribute("disabled")){
        alert (`${playername[0]} won`);
    }
    if (B1.value==B2.value && B2.value==B3.value&&B1.getAttribute("disabled")){
        alert (`${playername[0]} won`);
    }
    if (C1.value==C2.value && C2.value==C3.value&&C1.getAttribute("disabled")){
        alert (`${playername[0]} won`);
    }
    if (A1.value==B1.value && B1.value==C1.value&&A1.getAttribute("disabled")){
        alert (`${playername[0]} won`);
    }
    if (A2.value==B2.value && B2.value==C2.value&&A2.getAttribute("disabled")){
        alert (`${playername[0]} won`);
    }
    if (A3.value==B3.value && B3.value==C3.value&&A3.getAttribute("disabled")){
        alert (`${playername[0]} won`);
    }
    if (A1.value==B2.value && B2.value==C3.value&&A1.getAttribute("disabled")){
        alert (`${playername[0]} won`);
    }
    if (A3.value==B2.value && B2.value==C1.value&&A3.getAttribute("disabled")){
        alert (`${playername[0]} won`);
    }
}


    //////// ----- A Side ------- ////////

A1.addEventListener("click", function(){
    rules(this);
    winner();
});
A2.addEventListener("click", function(){
    rules(this);
    winner();
});
A3.addEventListener("click", function(){
    rules(this);
    winner();
});

    //////// ----- B Side ------- ////////

B1.addEventListener("click", function(){
    rules(this);
    winner();
});
B2.addEventListener("click", function(){
    rules(this);
    winner();
});
B3.addEventListener("click", function(){
    rules(this);
    winner();
});

    //////// ----- C Side ------- ////////

    C1.addEventListener("click", function(){
    rules(this);
    winner();
});
C2.addEventListener("click", function(){
    rules(this);
    winner();
});
C3.addEventListener("click", function(){
    rules(this);
    winner();
});



