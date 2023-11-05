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

function getSelectedRadio() {
    let radioButtons = document.getElementsByName("Plan");
    for (let radio of radioButtons) {
        if (radio.checked) {
            // radio.parentElement.style.border = "2px solid blue";
            console.log(radio.parentNode);
        }
    }
}


// let yearlycost = document.getElementsByClassName("yearlycost");

function yearlyCost() {
    // let checkbox = document.getElementById("checkbox");
    var checkbox = document.querySelector('input[type="checkbox"]');
    console.log(checkbox);
    let monthlycost = document.getElementsByClassName("monthlyCost");
    console.log(monthlycost[0].innerHTML);
    let offer = document.getElementsByClassName("gr-offer");
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            monthlycost[0].innerHTML = "$90/yr";
            monthlycost[1].innerHTML = "$120/yr";
            monthlycost[2].innerHTML = "$150/yr";
            offer[0].computedStyleMap.display = "block";
            offer[1].computedStyleMap.display = "block";
            offer[2].computedStyleMap.display = "block";
            console.log("checked");
            console.log(monthlycost[0].innerHTML);
        } else {
            monthlycost[0].innerHTML = "$9/mo";
            monthlycost[1].innerHTML = "$12/mo";
            monthlycost[2].innerHTML = "$15/mo";
            offer[0].computedStyleMap.display = "none";
            offer[1].computedStyleMap.display = "none";
            offer[2].computedStyleMap.display = "none";
            console.log(monthlycost[0].innerHTML);
        }  
    });
}
document.addEventListener('DOMContentLoaded', function () {
    yearlyCost();
});

