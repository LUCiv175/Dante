<script>
  import Chat from "./lib/Chat.svelte";
import Dante from "./lib/Dante.svelte";
import Home from "./lib/Home.svelte";
import List from "./lib/list.svelte";
  import {store} from "./script/stores.js";
  import Autore from "./lib/Autore.svelte";

  $: valore = $store.val;
  //$: valore = 2
</script>

<style>
  
  
  :global(body){
    margin: 0;
    padding: 0;
    min-height: 100vh;
    box-sizing: border-box;
    background-color: #262626;
  }
</style>

{#if valore == 0}
  <Home />
{:else if valore == 1}
  <Dante />
{:else if valore==2}
<Chat/>
{:else if valore==3}
<List/>
{:else if valore==4}
 <Autore/>
{:else}
  <h1>Errore</h1>
{/if}
