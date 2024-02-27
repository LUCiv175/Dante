<script>
  import Dante from "./lib/Dante.svelte";
import Home from "./lib/Home.svelte";
  import {store} from "./script/stores.js";

  //$: valore = $store.val;
  $: valore = 1;
</script>

<style>
  
  :global(body){
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #E2E8CE;
  }
</style>

{#if valore == 0}
  <Home />
{:else if valore == 1}
  <Dante />
{/if}
