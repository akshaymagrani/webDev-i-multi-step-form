let card1 = document.getElementsByClassName("card1");
let card2 = document.getElementsByClassName("card2");
let card3 = document.getElementsByClassName("card3");
let card4 = document.getElementsByClassName("card4");
let card5 = document.getElementsByClassName("card5");

let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");
let next3 = document.getElementById("next3");
let next4 = document.getElementById("next4");

let back2 = document.getElementById("back2");
let back3 = document.getElementById("back3");
let back4 = document.getElementById("back4");

let btnNav = document.getElementsByClassName("btn-nav");

btnNav[0].addEventListener('click', display_card1);
btnNav[1].addEventListener('click', display_card2);
btnNav[2].addEventListener('click', display_card3);
btnNav[3].addEventListener('click', display_card4);

function display_card1() {
    card2[0].classList.add("d-none");
    card3[0].classList.add("d-none");
    card4[0].classList.add("d-none");
    card5[0].classList.add("d-none");
    card1[0].classList.remove("d-none");
    btnNav[0].classList.add("bg-blue");
    btnNav[1].classList.remove("bg-blue");
    btnNav[2].classList.remove("bg-blue");
    btnNav[3].classList.remove("bg-blue");
}
display_card1();
function display_card2() {
    card1[0].classList.add("d-none");
    card2[0].classList.remove("d-none");
    card3[0].classList.add("d-none");
    card4[0].classList.add("d-none");
    card5[0].classList.add("d-none");
    btnNav[0].classList.remove("bg-blue");
    btnNav[1].classList.add("bg-blue");
    btnNav[2].classList.remove("bg-blue");
    btnNav[3].classList.remove("bg-blue");
}
function display_card3() {
    card1[0].classList.add("d-none");
    card2[0].classList.add("d-none");
    card3[0].classList.remove("d-none");
    card4[0].classList.add("d-none");
    card5[0].classList.add("d-none");
    btnNav[0].classList.remove("bg-blue");
    btnNav[1].classList.remove("bg-blue");
    btnNav[2].classList.add("bg-blue");
    btnNav[3].classList.remove("bg-blue");
}
function display_card4() {
    card1[0].classList.add("d-none");
    card2[0].classList.add("d-none");
    card3[0].classList.add("d-none");
    card4[0].classList.remove("d-none");
    card5[0].classList.add("d-none");
    btnNav[0].classList.remove("bg-blue");
    btnNav[1].classList.remove("bg-blue");
    btnNav[2].classList.remove("bg-blue");
    btnNav[3].classList.add("bg-blue");
}
function display_card5() {
    card1[0].classList.add("d-none");
    card3[0].classList.add("d-none");
    card2[0].classList.add("d-none");
    card4[0].classList.add("d-none");
    card5[0].classList.remove("d-none");
}

next1.addEventListener('click', display_card2);
next2.addEventListener('click', display_card3);
next3.addEventListener('click', display_card4);
next4.addEventListener('click', display_card5);

back2.addEventListener('click', display_card1);
back3.addEventListener('click', display_card2);
back4.addEventListener('click', display_card3);

