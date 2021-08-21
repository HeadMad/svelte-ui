<script>
  import PopupForm from '../bundles/PopupForm.svelte';
  

  const fields = 
    {
      barcode: {
      label: 'Штрихкод',
      component: 'Input',
    },
    group: {
      label: 'Группа',
      component: 'Select',
      list: ['Носки', 'Трусы', 'Колготки', 'Бюстгалтер'],
    },
    addField: {
      label: 'Добавить поле',
      component: 'Button'
    }
  };

  
  let shown = false;
</script>

<PopupForm
  {shown}
  {fields}
  title="Добавление товара"
/>

<button
on:click={() => shown = !shown}
>{!shown ? 'Показать' : 'Скрыть'} форму</button>