let body = document.getElementById("container");
body.style.backgroundColor = 'lightgrey';

let header = document.getElementById("header-container");
header.style.backgroundColor = 'lightgreen';

let footer = document.querySelector("#footer-container");
footer.style.backgroundColor = 'green';



let section = document.querySelectorAll("section");
section[0].style.background = 'lightsalmon';
section[1].style.background = 'yellow';

let corTitulos1 = document.querySelectorAll(".emergency-tasks h3");
for (let i =0; i < corTitulos1.length; i +=1) {
    corTitulos1[i].style.backgroundColor = 'purple';
}

let corTitulos2 = document.querySelectorAll(".no-emergency-tasks h3");
for (let i =0; i < corTitulos2.length; i +=1) {
    corTitulos2[i].style.backgroundColor = 'black';
}
