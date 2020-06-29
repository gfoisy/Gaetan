const extruder= document.getElementById('extruder');
let steps=-65;

window.onwheel=function printGo(){
extruder.style= 'left: '+steps+'rem;';
steps=steps+1;
};
