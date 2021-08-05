<script>
  import {onMount} from 'svelte';
  
  export let width = 'auto';
  export let value = '';
  export let name = '';
  export let label = '';
  export let tabindex = 0;
  export let type = 'text';
  export let readonly = false;
  export let pattern = '';

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

<div
class="input"
class:input_focused
style="width: {width}"
>
  <input
  {name}
  {tabindex}
  
  bind:value
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
</div>

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