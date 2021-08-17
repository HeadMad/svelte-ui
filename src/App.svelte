<script>
  // Supabase passwors DAJ-9xx-mPS-4hf
  import { onMount } from "svelte";
  import { sortable } from "./components/DragDrop/actions";

  import AddRowForm from "./bundles/AddRowForm.svelte";
  let addForm;
  let draggable = true;
</script>

<!-- <AddRowForm bind:this={addForm} /> -->
<!-- <button on:click={addForm.show}>Show</button> -->

<ul use:sortable={draggable}>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>



<button
  on:click={() => draggable = !draggable}
>{draggable ? 'Stop' : 'Start'}</button>

<style>
  :global(body) {
    background-color: darksalmon;
  }

  ul {
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    padding: 12px;
    min-width: 100px;
  }

  li {
    list-style: none;
    background-color: #fafafa;
    padding: 5px 12px;
    border-radius: 3px;
    text-align: center;
    cursor: grab;
  }

  li + li {
    margin-top: 10px;
  }
</style>
