
let draggable;


export function sortable(parent, isSortable = true) {

  if (!isSortable)
    return;

  initDraggable(parent);

  return {
    update(updIsDraggable) {
      isSortable = updIsDraggable;

      if (updIsDraggable)
        initDraggable(parent);
      else
        destroyDraggable(parent);

    },
    destroy() {
      if (isSortable)
        destroyDraggable(parent);
    }
  }
}



function each(iter, handler) {
  for (let i = 0; i < iter.length; i++)
    handler(iter[i]);
}

function initDraggable(parent) {
  parent.addEventListener('dragover', dragOver);
  parent.addEventListener('dragenter', dragEnter);
  each(parent.children, element => {
    element.draggable = true;
    element.addEventListener('dragstart', dragStart);
    element.addEventListener('dragend', dragEnd);
    // element.addEventListener('drag', onDrag);
  });
}

function destroyDraggable(parent) {
  parent.removeEventListener('dragover', dragOver);
  parent.removeEventListener('dragenter', dragEnter);
  each(parent.children, element => {
    element.draggable = false;
    element.removeEventListener('dragstart', dragStart);
    element.removeEventListener('dragend', dragEnd);
  })
}

function dragStart(event) {
  // event.preventDefault();
  draggable = this;
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
  if (over === this || over === draggable)
    return;

  let next = draggable.nextSibling;
  let method1 = 'after';
  let method2 = 'before';

  if (!next) {
    next = draggable.previousSibling;
    method1 = 'before';
    method2 = 'after';
  }

  over[method1](draggable);

  if (next !== over)
    next[method2](over);

}

function dragEnter(event) {
  const parent = draggable.parentNode

  if (parent !== this) {
    if (!this.children.length)
      this.append(draggable);
    else if (event.target !== this)
      event.target.before(draggable);
  }
  


  

}
