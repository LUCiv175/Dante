<script>
  import { store } from "../script/stores";

    $: pr = "";
    function show(value, type){
        pr = value;
        $store.type = type;
        toggleMenu();
    }
    $: active = false;

  function toggleMenu() {
    active = !active;
  }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    
    .dropdown{
        position: relative;
        width: 300px;
        height: 50px;
    }
    .dropdown::before{
        content: '';
        position: absolute;
        right: 20px;
        top: 15px;
        z-index: 100000;
        width: 8px;
        height: 8px;
        border: 2px solid #333;
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
        transform: rotate(-45deg);
        transition: 0.5s;
        pointer-events: none;
    }

    .dropdown.active::before{
        top:22px;
        transform: rotate(-225deg);
    }
        
    .dropdown input{
        position: relative;
        margin-left: 10px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        background: #fff;
        border: none;
        outline: none;
        box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        padding: 12px 20px;
        border-radius: 10px;
    }
    .dropdown .option{
        position: absolute;
        top: 70px;
        width: 100%;
        color: #000;
        background: #fff;
        box-shadow: 0 30px 30px rgba(0,0,0,0.05);
        border-radius: 10px;
        overflow: hidden;
        display: none;
        z-index: 1000;
    }

    .dropdown.active .option{
        display: block;
    }

    .dropdown .option div{
        padding: 12px 20px;
        cursor: pointer;
        transition: 0.2s;
        
    }
    .dropdown .option div:hover{
        background: #62baea;
        color: #fff;
    }


</style>
<div class="dropdown {active ? 'active' : ''}">
    <input type="text" class="textBox" placeholder="Ordina" readonly bind:value={pr} on:click={toggleMenu}>
    <div class="option">
        <div on:click={() => show("Nome Crescente", 1)}>Nome Crescente</div>
        <div on:click={() => show("Nome Decrescente", 2)}>Nome Decrescente</div>
        <div on:click={() => show("Data Crescente", 3)}>Data Crescente</div>
        <div on:click={() => show("Data Decrescente", 4)}>Data Decrescente</div>
    </div>
</div>