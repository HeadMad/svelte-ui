<script>
  import { getContext, createEventDispatcher } from "svelte";
  import { eventActions } from './actions.js';
  export let list = [];

  let selected = -1;
  let focused = -1;
  let visible = true;

  const dispatch = createEventDispatcher();
  const value = getContext("inputValue");
  const state = getContext("inputState");

  $: list = Array.from(new Set(list));
  $: selected = focused = list.indexOf($value);

  export const show = () => visible = true;
  export const hide = () => visible = false;
  export const toggle = () => visible = !visible;
  export const select = (index) => {
    if (typeof index === "number")
      focused = index;
    if (focused === -1 || selected === focused)
      return false;
    
    $value = list[focused];
    dispatch("select", {index, value: $value});
    selected = focused;
    return $value;
    
  };

  export const offsetFocus = (add) => {
    const last = list.length - 1;
    let newIndex = focused + add;
    if (newIndex < 0) newIndex = last;
    if (newIndex > last) newIndex = 0;
    focused = newIndex;
    return newIndex;
  };

  state.subscribe( ({name, event}) => {
    if (name in eventActions)
      eventActions[name]({ visible, focused, selected, show, hide, select, toggle, offsetFocus }, event);
  });
</script>

<ul
class="input__list"
class:input__list_visible={visible}
>
  {#each list as item, index}
    <li
      on:click={ () => select(index) }
      class="input__item"
      class:input__item_selected={index === selected}
      class:input__item_focused={index === focused}
    >
      <slot
        {item}
        {index}
        {visible}

        focused={index === focused}
        selected={index === selected}
      >{item}</slot>
    </li>
  {/each}
</ul>

<style>
  .input__list {
    position: absolute;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px;
    margin: 10px 0 0;
    min-width: 100%;
    list-style: none;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    visibility: hidden;
  }

  .input__list:hover,
  .input__list_visible {
    visibility: visible;
  }

  .input__item {
    padding: 0.2em 0.4em;
    border-radius: 2px;
    white-space: nowrap;
    cursor: pointer;
    margin: 2px 0;
  }

  .input__item_focused,
  .input__item:hover {
    background: rgb(235, 237, 240);
    color: #333;
  }

  .input__item_selected,
  .input__item_selected:hover {
    background: #333;
    color: #fff;
  }
</style>
