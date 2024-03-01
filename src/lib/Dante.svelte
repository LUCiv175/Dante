<script>
  import { store } from "../script/stores";

  $: r = "";


  const send = () => {
    $store.request = r;
    $store.val = 2;
  }
  export const turnBack = () => {
    $store.val = 0;
  }
  
  $: w = window.innerWidth
</script>

<style>
  /* Basic CSS Reset */
  @import url('https://fonts.googleapis.com/css2?family=Ingrid+Darling&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ingrid+Darling&family=Inter:wght@100..900&display=swap');
  

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
  /* Hero Section Styles */
  :global(.danger){
    background-color: #FF1B1C;
    color: #E2E8CE;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.125rem;
    border-radius: 10px;
    padding: 0.7rem 1.7rem;
    transition: 0.4s;margin-bottom: 20vh;
  }
    :global(.danger:hover){
        background-color: transparent;
        color: #FF1B1C;
        border: 2px solid #FF1B1C;
    }
  .hero {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    text-align: center;
    padding: 0 20px;
    flex-direction: column;
    background-color: #1e1e1ecb;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 5vh;
    border-radius: 40px;

  }
  
  .hero-content {
    
    margin: auto;
  }
  
  .hero img, .logo img {
    height: 27vh;
    margin-bottom: 10px;
    filter: brightness(1000%);
  }
  
  .hero p {
    font-size: 2.5rem;
    font-family: "inter", sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #FF9F1C;
  }
  
  #bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }

  #input{
    border-radius: 10px;
    width: 25vw;
    border: none;
    padding: 10px;
    font-size: 1.5rem;
    font-family: "inter", sans-serif;
    font-weight: 300;
    font-style: normal;
    color: #262626;
    background-color: #E2E8CE;
    margin-top: 5vh;
    margin-bottom: 2vh;
    margin-right: 5px;
    
  }
  #input:focus{
    outline: none;
  }

  .chat{
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    text-align: center;
    padding: 0 20px;
    flex-direction: column;
    background-color: #1e1e1eea;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 25vh;
    border-radius: 40px;
  }
  .chat-content{
    margin-bottom: 2vh;
  }

  
  @media (max-width: 1000px) {
    .hero h1 {
      font-size: 2rem;
    }
    .hero p {
      font-size: 1rem;
    }
    #input{
      width: 50vw;
    }
  }
    @media (max-width: 500px) {
        #input{
            width: 70vw;
        }.back{
          width: 50px;
          margin: 5%;
      }}
  
</style>
<img src="back.png" alt="back" class="back" on:click={turnBack}>
    {#if w > 768}
    <img src="https://wallpapers.com/images/hd/hell-2000-x-1000-2fiwna66nj94tx3x.jpg" alt="sfondo" id="bg">
    {:else}
    <img src="https://i.pinimg.com/originals/93/34/3b/93343b02897a08532627c6a815a74acc.jpg" alt="sfondo" id="bg">
    {/if}

  <div class="hero">
    <div class="hero-content">
        <img src="dante logo 2.png" alt="logo">
        <p>Parla con Me</p>
        <input type="text" id="input" placeholder="Scrivimi" bind:value={r}>
        <button class="danger" on:click={send}>Invia</button>
    </div>
  </div>
