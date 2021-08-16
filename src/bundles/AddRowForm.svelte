<script>
  import Modal from '../components/Modal/Modal.svelte';
  import Select from '../components/Select/Select.svelte';
  import Input from '../components/Input/Input.svelte';

  export const show = () => modal.show();
  export const hide = () => modal.hide();
  
  let typeList = ["Футболка"];
  let sizeList = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  let modal, typeValue = "Трусы", sizeValue = "M";

</script>

<Modal bind:this={modal} shown="true">
  <div class="module">
    <h1>Добавление товара</h1>
    <Input label="Штрихкод" value="1324768450"/>
    <Select
      editable
      label="Наименование"
      list={ typeList }
      value={ typeValue }
    />
    <Select
      size="1"
      label="Размер"
      on:save={() => console.log('save')}
      list={ sizeList }
      value={ sizeValue }
    />

  </div>
</Modal>


<style>

  :global(.red) {color: red;}
  .module {
    padding: 20px 40px 30px;
    background-color: #fff;
  }
</style>