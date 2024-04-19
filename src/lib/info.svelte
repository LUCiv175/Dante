<script>
  import { get } from "svelte/store";
  import { store } from "../script/stores";
  import {blur, slide} from "svelte/transition";

  const parla = () => {
    $store.val = 2;
    $store.info = -1;
    $store.chat = "Cosa ne pensi del libro " + info[0].titolo + " scritto da " + info[0].nome + " " + info[0].cognome + "?";
  }

    export let id;
    let closed = () => {
        $store.info = -1;
    }

    let currentError = null;
    let info = []
    let genere = []
    let autore = -1;
    const fetchInfo = async () => {
      
    try{
      let url = `http://localhost/Dante/backend/DanteBackend/getInfo.php?libroId=${id}`;
      const res = await fetch (url);
      const data = await res.json()
      info = data.data
      autore = data.data[0].id_autore
    }catch(err){
      currentError = err.message;
    }
    }

    const fetchGenere = async () => {
      
      try{
        let url = `http://localhost/Dante/backend/DanteBackend/getInfoGeneri.php?libroId=${id}`;
        const res = await fetch (url);
        const data = await res.json()
        genere = data.data
      }catch(err){
        currentError = err.message;
      }
      }
    $: if($store.info != -1){
      fetchInfo()
      fetchGenere()
    }

    const getInfoAutore = () => {
      $store.info = -1;
      $store.autore = autore;
      $store.val = 4;
      
    }

</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Ingrid+Darling&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ingrid+Darling&family=Inter:wght@100..900&display=swap');
    .info{
        position: fixed;
        border-radius: 15px;
        margin-top: 5vh;
        margin-left: 1vw;
        color: #262626;
        width: 98vw;
        height: 90vh;
        background-color: #e2e8cedf;
        z-index: 10000000;
        }
        .detail{
          width: 96vw;
          height: 90vh;
          display: flex;
          flex-direction: column;
          margin: 0 2vw;
          justify-content: space-around;
        }
        




.close-container{
  position: absolute;
  margin-left: 2vw;
  width: 50px;
  height: 50px;
  margin-top: 100px;
  cursor: pointer;
}

.leftright{
  height: 4px;
  width: 50px;
  position: absolute;
  margin-top: 24px;
  background-color: #F4A259;
  border-radius: 2px;
  transform: rotate(45deg);
  transition: all .3s ease-in;
}

.rightleft{
  height: 4px;
  width: 50px;
  position: absolute;
  margin-top: 24px;
  background-color: #F4A259;
  border-radius: 2px;
  transform: rotate(-45deg);
  transition: all .3s ease-in;
}

label{
  color: white;
  font-family: Helvetica, Arial, sans-serif; 
  font-size: .6em;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all .3s ease-in;
  opacity: 0;
}
.close{
  margin: 60px 0 0 5px;
  position: absolute;
}

.close-container:hover .leftright{
  transform: rotate(-45deg);
  background-color: #F25C66;
}
.close-container:hover .rightleft{
  transform: rotate(45deg);
  background-color: #F25C66;
}
.close-container:hover label{
  opacity: 1;
}

img{
  height: 35vh;
  border-radius: 10px;
}
.resto{
  flex: 1;
}
.copertina{
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.resto{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  }
  h1, h2, h3, h4{
    text-align: left;
  }
.info2{
  display: flex;
  flex-direction: row;
}
hr{
  width: 2px;
  height: 35vh;
  background-color: #262626;
  margin: 0 20px;
  border: none;
}
.generi{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
}
.genere{
  display: flex;
  justify-content: center;
  background-color: #262626ed;
  color: #FF9F1C;
  padding: 5px 0;
  border-radius: 5px;
  align-items: center;
  text-align: center;
  width: 8vw;
  min-width: 70px;
}
.generi h4{
  text-align: center;
  margin: 0;
  align-items: center;
  
}
.descrizione{
  margin-left: 2vw;
  margin-right: 4vw;
  text-align: justify;
  font-size: 1.2rem;
  line-height: 2.5rem;
  overflow-y: auto;
}
h1{
  font-size: 3.5rem;
  font-family: "Ingrid Darling", cursive;
  font-weight: 500;
  font-style: normal;
  color: #FF1B1C;
  margin: 0;
}
h2{
  font-size: 1.75rem;
  font-family: "Ingrid Darling", cursive;
  font-weight: 500;
  font-style: normal;
  color: #262626;
  letter-spacing: 2px;
  margin: 0;
  width: fit-content;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 10px;
  transition: color .3s ease-in-out, background-color .3s ease-in-out;
}
h3{
  font-size: 1.25rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #F25C66;
}
h2:hover{
  background-color: #262626d5;
  color: #E2E8CE;
  
}

.vai{
  color: #262626;
    background-color: #FF9F1C;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-style: normal;
    border-radius: 10px;
    padding: 0.7rem 1.7rem;
    margin-bottom: 2vh;
    transition: 0.4s;
}
.vai:hover{
  background-color: transparent;
    color: #262626;
    border: 2px solid #262626;
    scale: 1.1;
}

@media screen and (max-width: 800px){
  .info{
    margin-top: 1vh;
    margin-left: 1vw;
    width: 98vw;
    height: 90vh;
    background-color: #e2e8cedf;
    z-index: 10000000;
    }
    .detail{
      width: 96vw;
      height: 90vh;
      display: flex;
      flex-direction: column;
      margin: 0 2vw;
    }
    img{
      height: 25vh;
    }
    hr{
      height: 25vh;
    }
    .genere{
      width: 6vw;
    }
    .descrizione{
      font-size: 1rem;
      line-height: 2rem;
    }
    h1{
      font-size: 2.5rem;
    }
    h2{
      font-size: 1.25rem;
    }
    h3{
      font-size: 1rem;
    }
    .close-container{
      margin: 10px 10px;
    }
    .leftright, .rightleft{
      width: 30px;
    }
}
@media screen and (max-width: 500px){
  .info{
    margin-top: 50px;
    margin-left: 1vw;
    width: 98vw;
    height: 90vh;
    background-color: #e2e8cedf;
    z-index: 10000000;
    }
    .detail{
      width: 96vw;
      height: 90vh;
      display: flex;
      flex-direction: column;
      margin: 0 2vw;
    }
    img{
      height: 20vh;
    }
    hr{
      height: 20vh;
    }
    .genere{
      width: 8vw;
    }
    .descrizione{
      font-size: .8rem;
      line-height: 1.5rem;
    }
    h1{
      font-size: 2rem;
    }
    h2{
      font-size: 1rem;
    }
    h3{
      font-size: .8rem;
    }
    .close-container{
      margin: 10px 10px;
    }
    .leftright, .rightleft{
      width: 20px;
    }
    .genere h4{
      font-size: .5rem;
    }
    .genere{
      width: 2vw;
    }
}
.descrizione {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}
.descrizione::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

</style>
<div class="info" in:slide={{duration:350}} out:slide={{duration:350}}>
    <div class="close-container" on:click={closed}>
        <div class="leftright"></div>
        <div class="rightleft"></div>
        <label class="close">close</label>
      </div>
<div class="detail">
  
    {#each info as item}
    <div class="info2">
    <div class="copertina"><img src={item.copertina} alt="copertina"></div><hr>
    <div class="resto">
      <div class="titolo">
        <h1>{item.titolo}</h1>
      <div class="autore">
        <h2 on:click={getInfoAutore}>{item.nome} {item.cognome}</h2>
      </div></div>
      <div class="anno">
        {#if item.anno == item.annoInizio}
        <h3>Anno di Pubblicazione:</h3><h3 style="color: #262626;">{item.anno}</h3>
        {:else}
        <h3>Anno di Pubblicazione:</h3><h4>Da {item.annoInizio} a {item.anno}</h4>
        {/if}
      </div>
      <h3>Generi:</h3>
      <div class="generi">
        
        {#each genere as ge}
        <div class="genere"><h4>{ge.nome}</h4></div>
        {/each}
      </div>
    </div></div>
    <div style="display: flex; justify-content:center; align-items:center"><button class="vai" on:click={parla}>Parlane con me</button></div>
    <div class="descrizione">
      <h3>Descrizione:</h3>
      <p>{item.descrizione}</p>
    </div>
  
  {/each}
  
</div>
{#if currentError}
		<p class="error-message">{currentError}</p>
	{/if}
</div>
