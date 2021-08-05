<script>
  import Modal from '../components/Modal/Modal.svelte';
  import Select from '../components/Select/Select.svelte';
  import Input from '../components/Input/Input.svelte';

  let modal, type, typeValue, sizeValue;
  export const show = () => modal.show();
  export const hide = () => modal.hide();

  let typeList = ['Трусы', 'Колготки', 'Носки', 'Бюстгалтер', 'Трусы', ];
  let sizeList = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];


</script>

<Modal bind:this={modal} shown="true">
  <div class="module">
    <h1>Добавление товара</h1>
    <Input label="Штрихкод" value="1324768450" />
    <Select
      editable
      label="Наименование"
      list={typeList}
      bind:this={type}
      bind:value={typeValue}
      on:enter={ () => {
        if (typeValue)
          typeList = typeList.concat(typeValue);
        } }
      />
      <Select
      on:keydown={() => {console.log('keydown')}}
      label="Размер"
      width="50px"
      value="M"
      bind:this={type}
      list={ sizeList }
      on:enter={() => { if (sizeValue) sizeList = sizeList.concat(sizeValue); }}
    />

  </div>
</Modal>


<style>

  .module {
    padding: 20px 40px 30px;
    background-color: #fff;
  }
</style>