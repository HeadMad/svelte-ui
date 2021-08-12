<script>
  import Input from '../Input/Input.svelte';
  import InputList from '../Input/InputList.svelte';

  export let value = '';
  export let editable = false;
  export let list  = [];
  export let label = '';
  export let width = 'auto';

  const keyActions = {

    Delete({ list: {focused}, event }) {
    if (focused !== -1 && event.ctrlKey)
      return ({ items, dispatch }) => {
        event.preventDefault();
        dispatch('delete', {index: focused, value: items[focused]});
      }
  },

  }

  function onEnter() {
    console.log(list);
    if (value && !list.includes(value))
      list = [value, ...list];
  }

  function onDelete({ detail: {index} }) {
    list.splice(index, 1);
    list = list;
  }



</script>

<Input
  bind:value
  { label }
  { width }
  readonly={!editable}
>
  <InputList
    { keyActions }
    { list }
    on:delete={ onDelete }
    on:enter={ onEnter }
    on:select
  />
</Input>