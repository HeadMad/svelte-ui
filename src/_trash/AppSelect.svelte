<script>
  export let list = [];
  export let value = '';
  export let name = 'menu';
</script>


<input
  list={name}
 {name}
 bind:value
/>
{#if list.length}
<datalist id={name}>
  {#each list as text}
  <option value={text}>
  {/each}  
</datalist>
{/if}