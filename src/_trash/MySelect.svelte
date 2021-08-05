<script>
import { onMount } from "svelte";


  export let list = [];
  export let value = 'some';

  let inputRef;
  let controlRef;

  onMount(() => {
    inputRef.style.minWidth = controlRef.offsetWidth + 'px';
  });

  const keyActions = {
    Enter(event) {
      controlRef.focus()
      controlRef.click()
    }
  };

  function onKeydown(event) {
    const code = event.code;
    if (code in keyActions)
      keyActions[code](event);
  }

  function controlChange(event) {
    inputRef.focus();
  }


</script>

<div class="select">
  {#if list.length}
  <select
  bind:this={controlRef}
  bind:value
  on:change={controlChange}
  tabindex="-1"
  class="select__control"
  >
  {#each list as text}
  <option class="select__option">{text}</option>
  {/each}
  </select>
  {/if}
  <input
  bind:this={inputRef}
  bind:value
  on:keydown={onKeydown}
  type="text"
  class="select__input"
  >
</div>


<style>
  .select {
    display: inline-block;
    position: relative;
  }

  .select__input {
    position: relative;
  }

  .select__control {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>

