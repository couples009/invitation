const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if(name){

document.getElementById("teacher").innerHTML =
"Respected " + name;

}

var eventDate = new Date("Apr 15, 2026 10:00:00").getTime();

setInterval(function(){

var now = new Date().getTime();
var distance = eventDate - now;

var days = Math.floor(distance / (1000*60*60*24));
var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

document.getElementById("countdown").innerHTML =
"Event starts in " + days + " days " + hours + " hours";

},1000);

confetti({
particleCount:120,
spread:100
});

const canvas = document.getElementById("signature");
const signaturePad = new SignaturePad(canvas);

function clearSign(){

signaturePad.clear();

}

function submitSign(){

if(signaturePad.isEmpty()){

alert("Please sign before accepting invitation");

return;

}

confetti({
particleCount:200,
spread:120
});

alert("Thank you for accepting the invitation!");

}
