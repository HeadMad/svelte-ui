<script>
  // Supabase passwors DAJ-9xx-mPS-4hf
  import { onMount } from "svelte";
  import Input from './components/Input/Input.svelte';
  import InputList from './components/Input/InputList.svelte';

  // import AddRowForm from "./bundles/AddRowForm.svelte";
  let addForm;
  // let value;
  let items = ["Hello", "Dolly", "How", 'Hello'];
  let value='some';
  onMount(() => {});
</script>

<!-- <AddRowForm bind:this={addForm} />
<button on:click={addForm.show}>Show</button> -->
{value} <br>
<Input bind:value label="Awesome Input">
  {#if items.length}<InputList list={items} let:item>:: {item} </InputList>{/if}
</Input>

<style>
</style>
