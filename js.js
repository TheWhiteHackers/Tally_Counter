const button = document.getElementById("addtally");
const containdiv = document.getElementById("contain");
const addbtn = document.querySelector(".plus");

console.log(addbtn);

const subbtn = document.getElementsByClassName("minus");
const num = document.getElementsByClassName("num");


let cardcount = 1;


button.addEventListener("click", function tallycounter(){

containdiv.innerHTML+="<div class='card'><input type='text'><center><div class='num' id='card"+cardcount+"'>0</div></center><button class='minus' onclick='tallyupdate("+cardcount+", -1)'>-</button><button class='plus' onclick='tallyupdate("+cardcount+", 1)'>+</button></div>";
cardcount++;

});

function tallyupdate(id, inc){

let currentnum = document.getElementById("card"+id).innerHTML;

document.getElementById("card"+id).innerHTML = currentnum*1+inc;


};

