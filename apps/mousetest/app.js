let mouse = require("ble_hid_mouse");

NRF.setServices(undefined, { hid : mouse.report });
g.clear()

function btnPressed() {
  try {mouse.send(0,0,mouse.BUTTONS.LEFT); // X movement, Y movement, buttons pressed
       g.drawString("Mouse Button Pressed",30,30)
      }
  catch (e) {
    console.log(e)
  }
}

// trigger btnPressed whenever the button is pressed
setWatch(btnPressed, BTN, {edge:"rising",repeat:true,debounce:50});
