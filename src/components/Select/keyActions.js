


export default  {
  Enter(event, list) {
    list.select();
  },

  ArrowUp(event, list) {
    event.preventDefault();
    if (!list.isVisible()) list.show();
    else list.offsetFocus(-1);
  },

  ArrowDown(event, list) {
    event.preventDefault();
    if (!list.isVisible()) list.show();
    else list.offsetFocus(1);
  },

  Escape(event, list) {
   list.toggle();
  },

  Delete(event, list) {

  }
};

