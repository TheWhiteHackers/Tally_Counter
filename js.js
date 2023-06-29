const button = document.getElementById("addtally");
const containdiv = document.getElementById("contain");
const addbtn = document.getElementsByClassName("plus")

const subbtn = document.getElementsByClassName("minus");

button.addEventListener("click", function tallycounter(){

containdiv.innerHTML+="<div class='card'><input type='text'><div class='num'></div><button class='minus'>-</button><button class='plus'>+</button></div>";

});


let counter=0;
addbtn.addEventListener("click", function() {
    counter++
});

console.log(counter);

