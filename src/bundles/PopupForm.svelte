<script>
  import Modal from '../components/Modal/Modal.svelte';
  import Select from '../components/Select/Select.svelte';
  import Input from '../components/Input/Input.svelte';
  import Button from '../components/Button/Button.svelte';

  let components = {Input, Select, Button};


  export let shown = false;
  export let title = '';
  export let fields;

</script>

<Modal {shown}>
  <div class="popup-form">
    {#if title}<h1>{title}</h1>{/if}
    <div class="popup-form__fields">
      {#each Object.entries(fields) as [name, {component, inner='', ...props}]}
      <svelte:component
      this={components[component]}
      {name}
      {...props}
      class="popup-form__control"
      >{inner}</svelte:component>
      {/each}
    </div>
  </div>
</Modal>

<style>

  .popup-form {
    padding: 20px 40px 30px;
    background-color: #fff;
  }

  :global(.popup-form__control) {
    margin: 0 2px;
  }
</style>