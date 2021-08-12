const arrowAction = (add) => ({ list, event }) => {
  event.preventDefault();
  if (!list.visible) {
    list.show();
    if (list.focused === -1)
      list.offsetFocus(add);
  } else {
    list.offsetFocus(add);
  }
};

export default {
  ArrowUp: arrowAction(-1),
  ArrowDown: arrowAction(1),

  Enter({ list, event }) {
    if (list.select() !== false)
      list.hide();
    else {
      list.show();
      return ({ dispatch }) => dispatch('enter', {value: event.target.value});
    }
  },
};