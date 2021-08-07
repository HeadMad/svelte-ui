<script>
  import Input from '../Input/Input.svelte';
  import InputList from '../Input/InputList.svelte';

  export let value = '';
  export let editable = false;
  export let list  = [];
  export let label = '';
</script>

<Input
  {value}
  {label}
  readonly={editable}
>
  {#if list.length}
  <InputList
    {list}
    on:select
    on:input
  />
  {/if}
</Input>