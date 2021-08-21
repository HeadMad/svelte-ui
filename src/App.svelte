<script>
  import AddProduct from './Pages/AddProduct.svelte';
  import Uploader from './components/Uploader/Uploader.svelte';

  let is = true;
</script>

<AddProduct/>

<Uploader on:change={function() {console.log(this)}}
--width="300px"
--height="250px"
>
</Uploader>