const extruder_left= document.getElementById('extruder-left');
const extruder_right= document.getElementById('extruder-right');
const extruder_bottom_editor=document.getElementById('extruder');
let steps=0;
let negpos=1;
let height=7.5;
let switcher=0;

window.onwheel=function printGo(){
  steps=steps+2*negpos;
  if(height>35){
    return;
  }else{  if(steps>7){
    negpos=-1;
    height=height+2;
    steps=steps+.6*negpos;
    switcher=1;
    }else if(steps<-7){
    negpos=2;
    height=height+2;
    switcher=1;
    steps=steps+.6*negpos;
    }
    extruder_right.style= 'left: '+ -steps+'%;';
    extruder_left.style= 'right: '+steps+'%;';
    extruder_bottom_editor.style= 'bottom: '+ height+'%;';
  }
};
