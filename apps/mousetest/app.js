let mouse = require("ble_hid_mouse");
let HIDenabled = true;

NRF.setServices(undefined, { hid : mouse.report });
NRF.on('HID', function() {
  HIDenabled = true;
});
function btnPressed() {
  try {mouse.send(0,0,mouse.BUTTONS.LEFT); // X movement, Y movement, buttons pressed
      }
  catch (e) {
    console.log(e)
  }
}

// trigger btnPressed whenever the button is pressed
setWatch(btnPressed, BTN, {edge:"rising",repeat:true,debounce:50});
