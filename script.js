let menu = document.querySelector("#menu1");

let myThing = document.querySelector("#menu1");


menu.addEventListener("click", function() {
    myThing.style.color = "red";


if(myThing.innerHTML = "Milou laat het lukken"){
    myThing.innerHTML = "Ik breng iets nieuws";
} else {
    myThing.innerHTML = "En hij laat het alweer lukken";
}
});

menu.addEventListener("mouseover", function (){
    myThing.innerHTML = "schoenen zijn van gucci";
})