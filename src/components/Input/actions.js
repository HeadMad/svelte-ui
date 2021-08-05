const arrowAction = (add) => (list, event) => {
  event.preventDefault();
  if (!list.visible) {
    list.show();
    if (list.focused === -1)
      list.offsetFocus(add);
  } else {
    list.offsetFocus(add);
  }
};

const keyActions = {
  ArrowUp: arrowAction(-1),
  ArrowDown: arrowAction(1),

  Enter(list, event) {
    if (list.select() !== false)
      list.hide();
  },
};

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
};