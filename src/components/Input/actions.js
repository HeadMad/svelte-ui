const keyActions = {
  Enter() {
    
  }
}


export const eventActions = {
  blur(list) {
    list.hide();
  },

  focus() {
  },

  click(list) {
    list.toggle();
  },

  keydown(list, event) {
    const code = event.code;
    if (code in keyActions)
      keyActions[code](list, event);
  }
}