#First Sketch
`var option = 1;

function setup() {
   createCanvas(windowWidth,windowHeight);
   noFill();
}

  
function draw() {
  
  background(82,98,253);
  var density = map ( mouseX,0,width,20,50);
  stroke(93,255,173);
  strokeWeight(1);
  
  if (option==1){
    for (var x = 50; x <= width-50; x += density){
      for(var y=50; y <= height-50; y += density){
        line(x-5,y-5,x+5,y+5);
        line(x+5,y-5,x-5,y+5);
      }
    }
  }
  
  else if (option == 2 ) {
    for ( var a=0; a<width-50; a+=density){
      for ( var b=0; b<height-50; b+=density){
        line(a,b,width/2,height/2);
      }
    }
  }
  
  else if ( option == 3 ) {
    for(var x = 50; x <= width-50; x += density){
      for(var y=50; y <= height-50; y += density){
        ellipse(x,y,20,20);
      }
    }
  }
  
  else if ( option == 4) {
    var count = 0;
    for (var x=50; x<=width; x+=density){
      for (var y=50; y<=height; y+=density){
        strokeWeight(count*0.2);
        ellipse(x,y,20,20);
        count++;
      }
    }
  }
  
  else if ( option == 5) {
    for(var x = 50; x<=width; x+=density){
      for(var y=50; y<=height; y+=density){
        for(var i=0; i<16; i+=4){
         line(x+i,y,x+i,y+12);
      }
      line(x,y,x+12,y+12);
      }
    }
  }
}


function mousePressed(){
  option++;
  if(option > 5) option=1;
}
`
