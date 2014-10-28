var Keyboard = {
  hotkeys: {
    register: function(hotkey) {
      KeyboardJS.on(hotkey.keyCode, hotkey.keyDown, hotkey.keyUp);
    }
  },
  layout: {
    name: 'qwerty',
    keyrows: [
      ["`","1","2","3","4","5","6","7","8","9","0","-","="],
      ["q","w","e","r","t","y","u","i","o","p","[","]", "\\", "pageup"],
      ["a","s","d","f","g","h","j","k","l",";","'", "enter", "pagedown"],
      ["z","x","c","v","b","n","m","comma",".","/", "up", "delete"]
    ]
  }
};
