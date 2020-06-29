const extruder_left= document.getElementById('extruder-left');
const extruder_right= document.getElementById('extruder-right');
const extruder_bottom_editor=document.getElementById('extruder');
let steps=0;
let negpos=1;
let height=7.5;

window.onwheel=function printGo(){
  extruder_right.style= 'left: '+ -steps+'%;';
  extruder_left.style= 'right: '+steps+'%;';
  steps=steps+5*negpos;
  if(steps>25){
    negpos=-1;
    height=height+5;
    extruder_bottom_editor.style= 'bottom: '+ height+'%;';
  }else if(steps<-25){
    negpos=1;
    height=height+5;
    extruder_bottom_editor.style= 'bottom: '+ height+'%;';
    }
};
