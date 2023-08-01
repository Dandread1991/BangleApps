let start_x = g.getWidth()/2;
let start_y = g.getHeight()/2;
let x = 0
let y = 0
let new_x = 0
let new_y = 0
//let data = {};
g.clear();
//Bangle.on('drag', e=>data=e);
const ball = {
  width : 25, height : 25, bpp : 8,
  transparent : 254,
  buffer : atob("/v7+/v7+/v7+/h0dHR0d/v7+/v7+/v7+/v7+/v7+/v4dHh4eHh4eHh4dHf7+/v7+/v7+/v7+/h0eHh4eHh4eHh4eHh4dHf7+/v7+/v7+/h4PHh4eHh4eHh4eHh4eHh0d/v7+/v7+/h4PDx4eHh4eHh4eHh4eHh4eHR3+/v7+/h4PHh4eHR4eHh4eHh4eHh4eHh0dHf7+/v4eHh4eHR0dHR0dHh4eHh4eHh4eHR3+/v4eHh4eHh0dHR0eHh4eHh4eHh4eHh0dHf7+Hh4eHh0dHR4eHh4eHh4eHh4eHh4eHR3+HR4eHh0dHR0eHh4eHh4eHh4eHh4eHh0dHh0eHh4dHR0eHh4eHh4eHh4eHh4eHh4dHR4dHh4eHR0dHh4eHg8PHh4eHh4eHh4eHR0eHR4eHh0dHR4eHh4PDw8eHh4eHh4eHh0dHh0eHh4dHR0eHh4eDw8PHh4eHh4eHh4dHR4dHR4eHh0dHR4eHh4eHh4eHh4eHh4dHR4eHR0eHh4dHR0eHh4eHh4eHh4eHh4eHR0eHv4dHR4eHh0dHR4eHh4eHh4eHh4eHR0eHv7+HR0eHh4eHh0dHR4eHh4eHh4eHh0dHh7+/v4dHR4eHh4eHh4eHh4eHh4eHR0dHh7+/v7+HR0dHR4eHh4eHh4eHh4eHR0dHh4e/v7+/v4dHR0dHR0dHh4eHh0dHR0dHh4e/v7+/v7+/h0dHR0dHR0dHR0dHR0eHh4e/v7+/v7+/v7+HR0dHR0dHR0dHR4eHh4e/v7+/v7+/v7+/v7+Hh0dHR0eHh4eHh7+/v7+/v7+/v7+/v7+/v7+Hh4eHh4eHv7+/v7+/v7+/g==")
}

function startApp() {
  //g.drawCircle(x,y,10);
  
  g.drawImage(ball,start_x,start_y)
  
  
  
}

function drawScreen () {
  "jit"
  "ram" 
  
   let acc=Bangle.getAccel(); 
   x=acc.x;
   y=acc.y;
  
  
  
  if (BTN1.read() === true) {
     
    clearInterval(appStart);
    reset();
  }
   
          
         g.clear()
  new_x = start_x+x
  new_y = start_y+y
  if (x >= 0) {
         
         g.drawImage(ball,new_x,new_y,{rotate:30*x})
  }
  if (x < 0) {
        g. drawImage(ball,new_x,new_y,{rotate:-30*x}) 
  }
  if (y >= 0) {
        g. drawImage(ball,new_x,new_y,{rotate:30*y})
  }
  if (y < 0) {
        g. drawImage(ball,new_x,new_y,{rotate:-30*y})
  }
   
    
  
  
  
  
   //let left = {read: _=>data.b && data.x < 58};
 // let right = {read: _=>data.b && data.x > 58};
//  let up = {read: _=>data.b && data.y <
 // if (left.read()) {
 // if (right.read()) {
    //if (x) {
   // if (x <= 176) {x+=1;
                  
  //  g.clear() 
  //  g.drawImage(ball,x,y,{rotate:45*x})
 // }
  
  
}


startApp();
let appStart = setInterval(function () {drawScreen();}, 20);
