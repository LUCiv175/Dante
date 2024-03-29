<script>
  import Chat from "./lib/Chat.svelte";
import Dante from "./lib/Dante.svelte";
import Home from "./lib/Home.svelte";
import List from "./lib/list.svelte";
  import {store} from "./script/stores.js";

  $: valore = $store.val;
  //$: valore = 2
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
{:else if valore==2}
<Chat/>
{:else if valore==3}
<List/>
{/if}
