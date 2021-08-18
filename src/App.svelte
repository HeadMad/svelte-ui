<script>
  // Supabase passwors DAJ-9xx-mPS-4hf
  import { onMount } from "svelte";
  import { sortable } from "./Actions/dragAndDrop";

  import AddRowForm from "./bundles/AddRowForm.svelte";
  let addForm;
  let first = true;
  let second = true;
</script>

<!-- <AddRowForm bind:this={addForm} /> -->
<!-- <button on:click={addForm.show}>Show</button> -->

<div class="flex">
  <div class="first">
    <ul use:sortable={first}>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>
  <br>
    <button
      on:click={() => first = !first}
    >{first ? 'Stop' : 'Start'}</button>
  </div>
  
  
  <div class="second">
    <ul use:sortable={second}>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>
  <br>
    <button
      on:click={() => second = !second}
    >{second ? 'Stop' : 'Start'}</button>
  </div>
</div>


<style>
  :global(body) {
    background-color: darksalmon;
  }

  .flex {
    display: flex;
  }

  .flex > div {
    margin: 10px;
  } 

  ul {
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    padding: 0;
    min-width: 100px;
  }

  li {
    list-style: none;
    background-color: #fafafa;
    padding: 5px 12px;
    border-radius: 3px;
    text-align: center;
    cursor: grab;
    margin: 10px;
  }


</style>
