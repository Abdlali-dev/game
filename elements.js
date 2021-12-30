let header = document.getElementsByTagName("header");

let identity = document.getElementById("idebtity");


let roboImage = document.getElementById("robo");

let robotRecord = document.getElementById("robot-record");

let robotProgressChild = document.getElementById("robot-progress-child");

let humanRecord = document.getElementById("human-record");

let humanProgressChild = document.getElementById("human-progress-child");


let row1 = document.getElementById("row1");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let row2 = document.getElementById("row2");

let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let row3 = document.getElementById("row3");

let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");


let tracker = "o";


function Btn1() {
    if (tracker == "o" & btn1.textContent == "") {
        btn1.textContent = "x";
        btn1.style.color = "green";
        tracker = "x";
    } else if (tracker == "x" & btn1.textContent == "") {
        btn1.textContent = "o";
        btn1.style.color = "red";
        tracker = "o";
    }

}
btn1.addEventListener("click", Btn1);

function Btn2() {
    if (tracker == "o" & btn2.textContent == "") {
        btn2.textContent = "x";
        btn2.style.color = "green";
        tracker = "x";
    } else if (tracker == "x" & btn2.textContent == "") {
        btn2.textContent = "o";
        btn2.style.color = "red";
        tracker = "o";
    }

}
btn2.addEventListener("click", Btn2);

function Btn3() {
    if (tracker == "o" & btn3.textContent == "") {
        btn3.textContent = "x";
        btn3.style.color = "green";
        tracker = "x";
    } else if (tracker == "x" & btn3.textContent == "") {
        btn3.textContent = "o";
        btn3.style.color = "red";
        tracker = "o";
    }
}
btn3.addEventListener("click", Btn3);

function Btn4() {
    if (tracker == "o" & btn4.textContent == "") {
        btn4.textContent = "x";
        btn4.style.color = "green";
        tracker = "x";
    } else if (tracker == "x" & btn4.textContent == "") {
        btn4.textContent = "o";
        btn4.style.color = "red";
        tracker = "o";
    }

}
btn4.addEventListener("click", Btn4);

function Btn5() {
    if (tracker == "o" & btn5.textContent == "") {
        btn5.textContent = "x";
        btn5.style.color = "green";
        tracker = "x";
    } else if (tracker == "x" & btn5.textContent == "") {
        btn5.textContent = "o";
        btn5.style.color = "red";
        tracker = "o";
    }
}
btn5.addEventListener("click", Btn5);

function Btn6() {
    if (tracker == "o" & btn6.textContent == "") {
        btn6.textContent = "x";
        btn6.style.color = "green";
        tracker = "x";
    } else if (tracker == "x" & btn6.textContent == "") {
        btn6.textContent = "o";
        btn6.style.color = "red";
        tracker = "o";
    }

}
btn6.addEventListener("click", Btn6);

function Btn7() {
    if (tracker == "o" & btn7.textContent == "") {
        btn7.textContent = "x";
        btn7.style.color = "green";
        tracker = "x";
    } else if (tracker == "x" & btn7.textContent == "") {
        btn7.textContent = "o";
        btn7.style.color = "red";
        tracker = "o";
    }

}
btn7.addEventListener("click", Btn7);

function Btn8() {
    if (tracker == "o" & btn8.textContent == "") {
        btn8.textContent = "x";
        btn8.style.color = "green";
        tracker = "x";
    } else if (tracker == "x" & btn8.textContent == "") {
        btn8.textContent = "o";
        btn8.style.color = "red";
        tracker = "o";
    }

}
btn8.addEventListener("click", Btn8);

function Btn9() {
    if (tracker == "o" & btn9.textContent == "") {
        btn9.textContent = "x";
        btn9.style.color = "green";
        tracker = "x";
    } else if (tracker == "x" & btn9.textContent == "") {
        btn9.textContent = "o";
        btn9.style.color = "red";
        tracker = "o";
    }
}
btn9.addEventListener("click", Btn9);

yes();