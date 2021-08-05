<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export let list = [];
export let value = '';
let ref;

let selected = -1;
let focused = -1;
let visible = false;

export const show = () => visible = true;
export const hide = () => visible = false;
export const toggle = () => visible = !visible;
export const isVisible = () => visible;

export const select = (index) => {
  if (typeof index === 'number') focused = index;
  
  visible = false;
  if(focused === -1) {
    dispatch('enter');
    return false;
  } if (selected !== focused) {
    value = list[focused];
    dispatch('select');
    selected = focused;
    return value;
  }
}

export const offsetFocus = (add) => {
  const last = list.length -1;
  let newIndex = focused + add;
  if (newIndex < 0) newIndex = last;
  if (newIndex > last) newIndex = 0;
  focused = newIndex;
  return newIndex;
}

$: list = Array.from(new Set(list));
$: selected = focused = list.indexOf(value);

</script>

<ul
bind:this={ ref }
class="select__list"
class:select__list_visible={ visible }
>
  {#each list as text, i}
  <li
  class="select__item"
  class:select__item_selected={selected === i}
  class:select__item_focused={focused === i}
  on:click={() => select(i)}
  >{text}</li>
  {/each}
</ul>

<style>
   .select__list {
    position: absolute;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px;
    margin: 10px 0 0;
    min-width: 100%;
    list-style: none;
    background-color: #fff;
    box-shadow: 0 4px 7px rgba(0,0,0,.1);
    visibility: hidden;
  }

  .select__list:hover,
  .select__list_visible {
    visibility: visible;
  }

  .select__item {
    padding: .2em .4em;
    border-radius: 2px;
    white-space: nowrap;
    cursor: pointer;
    margin: 2px 0;
  }
  
  .select__item_focused,
  .select__item:hover {
    background: rgb(235, 237, 240);
    color: #333;
  }

  .select__item_selected,
  .select__item_selected:hover {
    background: #333;
    color: #fff;
  }
</style>
