<script>
  import Input from '../Input/Input.svelte';
  import InputList from '../Input/InputList.svelte';

  export let value = '';
  export let editable = false;
  export let list  = [];
  export let label = '';

  $: if (editable === true)
      delete $$restProps.readonly;
    else
      $$restProps.readonly = true;

      console.log($$restProps)

  const keyActions = {

    Delete({ list: {focused}, event }) {
    if (focused !== -1 && event.ctrlKey)
      return ({ items, dispatch }) => {
        event.preventDefault();
        dispatch('delete', {index: focused, value: items[focused]});
      }
  },

  }

  function onEnter({detail: value}) {
    if (value && !list.includes(value))
      list = [value, ...list];
  }

  function onDelete({ detail: {index} }) {
    list.splice(index, 1);
    list = list;
  }



</script>

<Input
  { label }
  bind:value
  {...$$restProps}
>
  <InputList
    { keyActions }
    items={list}
    on:delete={ onDelete }
    on:enter={ onEnter }
    on:select
  />
</Input>