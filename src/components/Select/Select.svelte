<script>

  import { setContext } from 'svelte';
  import Input from '../Input/Input.svelte';
  import keyActions from "./keyActions.js";
  import SelectList from "./SelectList.svelte";

  export let list = [];
  export let width = 'auto';
  export let name = "";
  export let label = "";
  export let value = "";
  export let tabindex = 0;
  export let editable = false;

  let input;
  let drop = {show(){}, hide(){}, toggle(){}, isVisible(){}};

  export const focus = () => {
    input.focus();
    drop.show();
  }

  export const blur = () => {
    input.blur();
    drop.hide();
  };

  

  function onKeydown(event) {
    const code = event.code;
    if (code === 'Enter' && event.ctrlKey) {
      editable = !editable;
    }
    if (code in keyActions)
      keyActions[code](event, drop);
  }


</script>


<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="select">
  <Input
    { name }
    { width }
    { label }
    { tabindex }

    on:blur
    on:focus
    on:click

    bind:value
    bind:this={ input }

    readonly={!editable}

    on:blur={ drop.hide }
    on:click={ drop.toggle }
    on:keydown={ onKeydown }
  />
  {#if list.length}
    <SelectList
    {list}
    
    on:enter
    on:select

    bind:value
    bind:this={drop}
    />
  {/if}
</label>

<style>
  .select {
    position: relative;
    display: inline-block;
  }

</style>
