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

  const inputValue = writable(value);
  setContext('inputValue', inputValue);
  inputValue.subscribe(newVal => value = newVal);
  
  let control;
  export const focus = () => control.focus();
  export const blur = () => control.blur();
  
  let input_focused = false;

  $: input__label_top = value || input_focused;
  $: if (control) control.readOnly = Boolean(readonly);

  onMount(() => {
    control.type = type
    if (readonly) control.readOnly = Boolean(readonly);
    if (pattern) control.pattern = pattern;
  });

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
  
  on:focus={ () => input_focused = true }
  on:blur={ () => input_focused = false }
  
  on:blur
  on:click
  on:focus
  on:keyup
  on:keydown
  >

  {#if label}
  <span
  class:input__label_top
  class="input__label"
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