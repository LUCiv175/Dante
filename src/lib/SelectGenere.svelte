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
    
  }
  fetchQuestions();
  let inputStyle = "width: 30vw; max-height:50px; background-color:#E2E8CE; font-family: 'Poppins', sans-serif;border-radius:10px; color:#262626; height:100%; padding: 12px 0px;::placeholder{font-family: 'Poppins', sans-serif;";
  </script>
  <style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    :global(div.multiselect) {
      /* top-level wrapper div */
      margin-bottom: 10px;
    }
    :global(div.multiselect.open) {
      /* top-level wrapper div when dropdown open */
    }
    :global(div.multiselect.disabled) {
      /* top-level wrapper div when in disabled state */
    }
    :global(div.multiselect > ul.selected) {
      /* selected list */
    }
    :global(div.multiselect > ul.selected > li) {
      /* selected list items */
    }
    :global(div.multiselect button) {
      /* target all buttons in this component */
    }
    :global(div.multiselect > ul.selected > li button, button.remove-all) {
      /* buttons to remove a single or all selected options at once */
      
    }
    :global(div.multiselect > input[autocomplete]) {
      /* input inside the top-level wrapper div */
    }
    :global(div.multiselect > ul.options) {
      /* dropdown options */
      background-color: #FF9F1C;
      height: 20vh;
      z-index: 100000000;
    }
    :global(div.multiselect > ul.options > li) {
      /* dropdown list items */
      background-color: #262626;
      color:#FF9F1C;
    }
    :global(div.multiselect > ul.options > li.selected) {
      /* selected options in the dropdown list */
    }
    :global(div.multiselect > ul.options > li:not(.selected):hover) {
      /* unselected but hovered options in the dropdown list */
      background-color: #FF9F1C;
      color:#262626
    }
    :global(div.multiselect > ul.options > li.active) {
      /* active means item was navigated to with up/down arrow keys */
      /* ready to be selected by pressing enter */
    }
    :global(div.multiselect > ul.options > li.disabled) {
      /* options with disabled key set to true (see props above) */
    }
    
  </style>
  {#if generi.length > 0 && window.screen.width > 950}
  
  <MultiSelect id="Generi" options={nomi} placeholder="Filtra per Genere" style={inputStyle} on:change={(event) => {
    event.detail.option
    if (event.detail.type === 'add') {
      for (let i = 0; i < id.length; i++) {
        
        if (nomi[i] === event.detail.option) {
          
          filter.push(id[i]);
          $store.filter = filter;
          $store.s = 1;
        }
      }
    } else {
      for (let i = 0; i < id.length; i++) {
        if (nomi[i] === event.detail.option) {
          filter.splice(filter.indexOf(id[i]), 1);
          $store.filter = filter;
          $store.s = 1;
          
        }
      }
    }
  }}>
  <GenereSlot let:option {option} value={id} slot="selected"/>
  <GenereSlot let:option {option} value={id} slot="option"/>
  </MultiSelect>
  {/if}