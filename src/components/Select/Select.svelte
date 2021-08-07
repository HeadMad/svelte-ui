<script>
  import Input from '../Input/Input.svelte';
  import InputList from '../Input/InputList.svelte';

  export let value = '';
  export let editable = false;
  export let list  = [];
  export let label = '';
  export let width = 'auto';
  export let keyActions;

</script>

<Input
  { value }
  { label }
  { width }
  readonly={!editable}
>
  {#if list.length}
  <InputList
    { list }
    { keyActions }
    on:select
    on:input
  />
  {/if}
</Input>