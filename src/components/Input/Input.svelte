<script>
  import {onMount, setContext} from 'svelte';
  import { writable } from 'svelte/store';
  

  export let width = 'auto';
  export let name = '';
  export let label = '';
  export let tabindex = 0;
  export let type = 'text';
  export let readonly = false;
  export let pattern = '';
  export let value = '';

  const state = writable({name: 'blur'});
  setContext('inputState', state);
  
  const inputValue = writable(value);
  setContext('inputValue', inputValue);
  inputValue.subscribe(newVal => value = newVal);
  
  let control;
  let input_focused = false;

  export const focus = () => control.focus();
  export const blur = () => control.blur();
  
  $: if (control) control.readOnly = Boolean(readonly);

  onMount(() => {
    control.type = type
    if (readonly) control.readOnly = Boolean(readonly);
    if (pattern) control.pattern = pattern;
  });

  function onFocus(event) {
    $state = {name: 'focus', event};
    input_focused = true;
  }
  
  function onBlur(event) {
    $state = {name: 'blur', event};
    input_focused = false;
  }

  function onClick(event) {
    $state = {name: 'click', event};
  }
  
  function onKeydown(event) {
    $state = {name: 'keydown', event};
  }
</script>

<label
class="input"
class:input_focused
style="width: {width}"
>
  <input
  {name}
  {tabindex}
  
  bind:value={$inputValue}
  bind:this={control}
  
  class="input__control"
  
  on:focus={ onFocus }
  on:blur={ onBlur }
  on:click={ onClick }
  on:keydown={ onKeydown }

  on:blur
  on:click
  on:focus
  on:keyup
  on:keydown
  >

  {#if label}
  <span
  class="input__label"
  class:input__label_top={ value || input_focused }
  >{label}</span>
  {/if}
  <slot />
</label>

<style>
  .input {
    position: relative;
    display: inline-block;
    margin: 1em 0 0;
  }

  .input__control {
    width: 100%;
  }

  .input__label {
    position: absolute;
    transition: .15s;
    left: 0.4em;
    top: 0.4em;
    color: #777;
  }

  .input__label_top {
    top: -1.4em;
    left: 0.5em;
    font-size: 0.8em;
  }

</style>