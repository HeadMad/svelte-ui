export function sortable(parent, isSortable = true) {

  if (!isSortable)
    return;

  let draggable;
  const elements = [...parent.children];

  initDraggable();

  function initDraggable() {
    parent.addEventListener('dragover', dragOver);
    elements.forEach(element => {
      element.draggable = true;
      element.addEventListener('dragstart', dragStart);
      element.addEventListener('dragend', dragEnd);
      // element.addEventListener('drag', onDrag);
    });
  }
  
  function destroyDraggable() {
    parent.removeEventListener('dragover', dragOver);
    elements.forEach(element => {
      element.draggable = false;
      element.removeEventListener('dragstart', dragStart);
      element.removeEventListener('dragend', dragEnd);
    })
  }

  function dragStart(event) {
    draggable = event.target;
    setTimeout(() => { this.style.visibility = 'hidden'; }, 0);
  }

  function dragEnd() {
    this.style.visibility = '';
  }

  function onDrag(event) {

    // event.target.style.position = 'relative';
    // event.target.style.top = event.offsetY + 'px';
    // event.target.style.left = event.offsetX + 'px';
  }

  function dragOver(event) {
    const over = event.target;
    if (over === draggable || over === parent)
    return;

    let next = draggable.nextSibling;
    let method = 'before';

    if (!next) {
      next = draggable.previousSibling;
      method = 'after';
    }

    over.replaceWith(draggable);
    next[method](over);

  }


  



  return {
    update(updIsDraggable) {
      isSortable = updIsDraggable;

      if (updIsDraggable)
        initDraggable();
      else
        destroyDraggable();

    },
    destroy() {
      if (isSortable)
        destroyDraggable();

    }
  }
}

