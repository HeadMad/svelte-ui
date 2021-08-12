<script>
  import Modal from '../components/Modal/Modal.svelte';
  import Select from '../components/Select/Select.svelte';
  import Input from '../components/Input/Input.svelte';

  export const show = () => modal.show();
  export const hide = () => modal.hide();
  
  let typeList = ["Футболка"];
  let sizeList = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  let modal, type, typeValue = "Трусы", sizeValue = "M";

  


</script>

<Modal bind:this={modal} shown="true">
  <div class="module">
    <h1>Добавление товара</h1>
    <Input label="Штрихкод" value="1324768450" />
    <Select
      editable
      label="Наименование"
      list={ typeList }
      bind:value={ typeValue }
    />
    <Select
      editable
      width="50px"
      label="Размер"
      list={ sizeList }
      bind:value={ sizeValue }
    />

  </div>
</Modal>


<style>

  .module {
    padding: 20px 40px 30px;
    background-color: #fff;
  }
</style>