import { butterfliesBackground } from 'https://unpkg.com/threejs-toys@0.0.7/build/threejs-toys.module.cdn.min.js'

butterfliesBackground({
el: document.getElementById('app'),
eventsEl: document.body
})

const canvas = document.getElementById("signature")

const signaturePad = new SignaturePad(canvas)

function clearSign(){

signaturePad.clear()

}

function submitSign(){

if(signaturePad.isEmpty()){

alert("Please sign before accepting invitation")

return

}

confetti({
particleCount:150,
spread:100
})

alert("Thank you! Invitation accepted.")

}

window.clearSign = clearSign
window.submitSign = submitSign
