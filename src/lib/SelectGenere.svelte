<script>
    import MultiSelect from 'svelte-multiselect'
  import GenereSlot from './GenereSlot.svelte';
  import { store } from '../script/stores';
  let generi = []
  let nomi = [];
  let id = [];
  let filter = [];
  const fetchQuestions = async() =>{
    try{
      let url = `http://localhost/Dante/backend/DanteBackend/getGeneri.php`
      const res = await fetch (url);
      const data = await res.json()
      generi = data.data
    }catch(err){
      console.log(err.message);
    }
    
    for (let i = 0; i < generi.length; i++) {
      nomi.push(generi[i].nome);
      id.push(generi[i].id_genere);
    }
    console.log(nomi);
    console.log(id);

  }
  fetchQuestions();
  </script>
  <style>
  </style>
  {#if generi.length > 0}
  <MultiSelect id="Generi" options={nomi} placeholder="Filtra per Genere" style="width: 30vw; max-height:50px" on:change={(event) => {
    event.detail.type
    event.detail.option
    if (event.detail.type === 'add') {
      for (let i = 0; i < id.length; i++) {
        if (nomi[i] === event.detail.option) {
          filter.push(id[i]);
          $store.filter = filter;
          $store.s = 1;
          console.log(filter);
        }
      }
    } else {
      for (let i = 0; i < id.length; i++) {
        if (nomi[i] === event.detail.option) {
          filter.splice(filter.indexOf(id[i]), 1);
          $store.filter = filter;
          $store.s = 1;
          console.log(filter);
        }
      }
    }
  }}>
    <GenereSlot let:option {option} value={id} slot="selected"/>
    <GenereSlot let:option {option} value={id} slot="option"/>
  </MultiSelect>
  {/if}