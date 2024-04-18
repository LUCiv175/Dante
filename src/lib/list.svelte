<script>
  import Card from "./Card.svelte";
  import { store } from "../script/stores";
  import Loading from "./Loading.svelte";
  import OrderBy from "./OrderBy.svelte";
  import SelectGenere from "./SelectGenere.svelte";
  import Info from "./info.svelte";
  import { slide, blur} from "svelte/transition";
  $: inf = $store.info;
  $: elenco = [];
  $: ricerca = "";
  $: t = $store.type;
  export const turnBack = () => {
    $store.val = 0;
    $store.info = -1;
  }
  let final = false
  $:if(ricerca != "") {
    final = true
    fetchQuestions()
  }
  $:if(final && ricerca == "") {
    final = false
    fetchQuestions()
  }
  let p = 0;
  let l = 0;
  let filter = [];
  //$:console.log(t)
  //$: console.log($store.array)
  $: if(t!=l || p==0  && $store.info==-1){
    fetchQuestions()
    l = t;
    p = 1;
  }
  $: if($store.s == 1  && $store.info==-1){
    filter = $store.filter;
    $store.s = 0;
    fetchQuestions()
  }
  let currentError = null;
  const fetchQuestions = () =>{
    /*
    try{
      let url = `http://localhost/Dante/backend/DanteBackend/postLibri.php`;
      const res = await fetch (url);
      const data = await res.json()
      $store.array = data.data
    }catch(err){
      currentError = err.message;
    }*/
    fetch('http://localhost/Dante/backend/DanteBackend/postLibri.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				type: t,
        filter: filter,
        ricerca: ricerca
			})
		})
			.then((res) => {
				if (!res.ok) {
					// Se la richiesta non ha avuto successo, lanciamo un errore con lo stato della risposta
					throw new Error(`Request failed with status ${res.status}`);
				}
				return res.json();
			})
			.then((data) => {
				// Gestisci la risposta JSON qui
        //console.log("ciao")
        //console.log(data);
				if (data.status == 1) {
          $store.array = data.data;
				} else currentError = data.message;

				//goto('/');
				// Esegui le azioni necessarie dopo aver ricevuto la risposta
			})
			.catch((error) => {
				// Gestisci gli errori qui
				console.log('Error logging in:', error.message);
				currentError = error.message; // Aggiorna la variabile currentError con il messaggio di errore
			});
  }
  
</script>

<style>
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    
    .back{
        position: absolute;
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
  
  display: flex;
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



.hero img {
  margin: auto;
  height: 27vh;
  width:fit-content;
  margin-bottom: 10px;
  filter: brightness(1000%);
}

.hero p {
  font-size: 2.5rem;
  font-family: "inter", sans-serif;
font-weight: 700;
font-style: normal;
color: #FF9F1C;
margin-bottom: 10vh;
}
.filter{
  display: flex;
  justify-content:space-between;
  flex-direction:row;
  margin-bottom: 10px;
  align-items: center;
}
#cerca{
  width: 30vw;
  height:100%; 
  padding: 12px 10px;
  border-radius: 10px;
  border: 1px solid #FF9F1C;
  font-size: 1rem;
  color: #FF9F1C;
  background-color: #262626;
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
    margin-top: 2vh;
  }
  .hero p {
    font-size: 2rem;
    margin-bottom: 10vh;
  }
}
@media screen and (max-width:950px) {
    #cerca{
      width: 90vw;
    }
    .filter{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .back{
          width: 50px;
          margin: 5%;
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
      margin-top: 2vh;
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
  
  <img src="dante logo 2.png" alt="logo">
  <p>Catalogo</p>
  <div class="filter">
    <div style="margin-right: 50px;">
    <OrderBy/></div><div>
      <input type="text" id="cerca" placeholder="Cerca..." bind:value={ricerca}/>
    </div>
    <div style="margin-right: 20px;"><SelectGenere/></div>
  </div>
    
  
    {#if $store.array == undefined}
    <div style="height: 70vh; overflow:hidden">
    <Loading/></div>
    {:else}<div class="cards">
    {#each $store.array as libro}
    
      <Card id={libro.id} autore={libro.nome + " " + libro.cognome} titolo={libro.titolo} img={libro.copertina} on:click/>
    {/each}</div>{/if}
    {#if currentError}
		<p class="error-message">{currentError}</p>
	{/if}
</div>

