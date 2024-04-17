<script>
    import Card from "./Card.svelte";
    import { store } from "../script/stores";
    import Loading from "./Loading.svelte";
    import OrderBy from "./OrderBy.svelte";
    import SelectGenere from "./SelectGenere.svelte";
    import Info from "./info.svelte";
    import { slide, blur } from "svelte/transition";
    $: inf = $store.info;
    $: elenco = [];
    $: infoAutore = [];
    export const turnBack = () => {
    $store.val = 3;
  }
    let id = $store.autore;
    let currentError = null;
    const fetchLibri = async () => {
      
      try{
        let url = `http://localhost/Dante/backend/DanteBackend/getLibribyAutore.php?autoreId=${id}`;
        const res = await fetch (url);
        const data = await res.json()
        elenco = data.data
      }catch(err){
        currentError = err.message;
      }
      }
      const fetchAutore = async () => {
      
      try{
        let url = `http://localhost/Dante/backend/DanteBackend/getInfoAutore.php?autoreId=${id}`;
        const res = await fetch (url);
        const data = await res.json()
        infoAutore = data.data
      }catch(err){
        currentError = err.message;
      }
      }
      fetchLibri()
      fetchAutore()
    
  </script>
  
  <style>
    
    @import url('https://fonts.googleapis.com/css2?family=Ingrid+Darling&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ingrid+Darling&family=Inter:wght@100..900&display=swap');
    *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
      }
      .back{
        position: absolute;
        height: auto;
        width: 70px;
        top: 0;
        left: 0;
        margin: 2%;
        cursor: pointer;
        filter: brightness(1000%);
        z-index: 1000;
      }
    .hero {
    position: relative;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    color: #fff;
    text-align: center;
   
    width: 100%;
    flex-direction: column;
    background-color: #262626;
  }
  
  .cards{
    display: grid;
   
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
        row-gap: 50px;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
  
  
  
  
  
  .hero p {
    font-size: 2.5rem;
    font-family: "inter", sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #E2E8CE;
  margin-bottom: 10vh;
  }
  img{
  height: 35vh;
  border-radius: 10px;
  margin-left: 2vw;
}
.resto{
  flex: 1;
}

.resto{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70vw;
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
  background-color: #fff;
  margin: 0 20px;
  border: none;
}
#vita{
  margin-left: 2vw;
  margin-right: 4vw;
  text-align: justify;
  font-size: 1.2rem;
  line-height: 2.5rem;
  overflow-y: auto;
  color: #FF9F1C;
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
}
h3{
  font-size: 1.25rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #F25C66;
}

  @media screen and (max-width: 1500px) {
    .cards{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4px;
      row-gap: 20px;
    }
    .hero img {
      height: 20vh;
    }
    .hero p {
      font-size: 2rem;
      margin-bottom: 2vh;
    }
    #vita{
      font-size: 1rem;
      line-height: 2rem;
    }
  }
    @media screen and (max-width:1100px){
        #vita{
          font-size: 1rem;
          line-height: 1.5rem;
        }
    }
  @media screen and (max-width:950px) {
    hr{
        display: none;
    }
    .info2{
      flex-direction: column;
      justify-content: center;
        align-items: center;
    }
    #vita{
      margin-left: 2vw;
      margin-right: 4vw;
      width: 90vw;
      margin-bottom: 2vh;
    }
    .resto{
      width: 90vw;
    }
    }
    @media screen and (max-width: 800px){
        p{
            margin-bottom: 2vh;        
        }
      #vita{
        max-height: 300px;
        overflow-y: auto;
      }
      h1{
        font-size: 2.5rem;
      
      }
      .back{
          width: 50px;
          
      }
    }
    @media screen and (max-width: 300px) {
      .cards{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4px;
        row-gap: 20px;
      }
      .hero img {
        height: 15vh;
      }
      .hero p {
        font-size: 1rem;
        margin-bottom: 10vh;}
    }    
  </style>
  
  {#if inf!=-1}
    <Info id={inf}/>
    {/if}
    <img src="back.png" alt="back" class="back" on:click={turnBack} in:slide={{delay:200, duration:350}} out:slide={{duration:350}}>
  <div class="hero" in:blur={{delay:550, duration:350}} out:blur={{duration:350}}>
    
    {#if infoAutore.length > 0}
    <div style="display: flex; justify-content:center; align-items:center;margin-top:5vh; margin-bottom:5vh"><h1>{infoAutore[0].nome + " " + infoAutore[0].cognome}</h1></div>
    <div class="detail">
        <div class="info2">
        <div class="copertina"></div><img src={infoAutore[0].foto} alt="foto autore"/><hr>
        <div class="resto">
        
        <h3>Vita:</h3>
        <p id="vita">{infoAutore[0].vita}</p>
        </div>
        </div>
        </div>
    {/if}
    <p>Opere</p>
      {#if elenco == undefined}
      <div style="height: 70vh; overflow:hidden">
      <Loading/></div>
      {:else}<div class="cards">
      {#each elenco as libro}
      
        <Card id={libro.id} autore={libro.nome + " " + libro.cognome} titolo={libro.titolo} img={libro.copertina} on:click/>
      {/each}</div>{/if}
      {#if currentError}
          <p class="error-message">{currentError}</p>
      {/if}
  </div>
  
  