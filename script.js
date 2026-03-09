const params = new URLSearchParams(window.location.search);

const id = params.get("id");

if(id && teachers[id]){

document.getElementById("teacher").innerText =
"Respected " + teachers[id];

}

var eventDate = new Date("Apr 15, 2026 10:00:00").getTime();

setInterval(function(){

var now = new Date().getTime();
var distance = eventDate - now;

var days = Math.floor(distance / (1000*60*60*24));

document.getElementById("countdown").innerHTML =
days + " days left for the event";

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

alert("Please sign first");

return;

}

confetti({
particleCount:200,
spread:120
});

alert("Thank you!");

}
function submitSign(){

if(signaturePad.isEmpty()){
alert("Please sign before accepting invitation");
return;
}

let params = new URLSearchParams(window.location.search);
let id = params.get("id");

localStorage.setItem("attendance_"+id,"present");

alert("Attendance recorded");

}
