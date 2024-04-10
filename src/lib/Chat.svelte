<script>
    import { blur, scale, slide } from "svelte/transition";
    import { fly } from 'svelte/transition';
  import Message from "./Message.svelte";
  import OpenAI from "openai";
  import { store } from "../script/stores";
    import Loading from "./Loading.svelte";

  $: w = window.innerWidth
  $: mymessage = "";
  $: pino = 1;
  const openai = new OpenAI({
    apiKey: '',
    dangerouslyAllowBrowser: true
  });
  
  export let allchat = [];
  let thid;
  const load = async () => {
    const thread = await openai.beta.threads.create();
    thid = thread.id
    mymessage = $store.request;
    btnsend3();

  }

  export const turnBack = () => {
    $store.val = 1;
  }

  export const btnsend3 = async () => {
  // Create empty thread
  const userMessage = mymessage;
  mymessage = '';
  if (userMessage !== '') {
    allchat = [...allchat, { role: 'user', text: userMessage }];
    pino = 1;
    const message = await openai.beta.threads.messages.create(
        thid,
        { role: "user", content: userMessage}
    );
    const run = await openai.beta.threads.runs.create(thid, {assistant_id : 'asst_sB8QGH3G0jZY3lUQ7hVng66r'});
    
    //retrieve run using thread id and run id. 
    let completedRun = await openai.beta.threads.runs.retrieve(run.thread_id, run.id);

    //while status is in progress or queued continue to attempt to retrieve the run / sleep for 1 second between tries. 
    while(completedRun.status === 'in_progress' || completedRun.status === 'queued'){
        
        completedRun = await openai.beta.threads.runs.retrieve(run.thread_id, run.id);
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    //If status is not completed log the status
    if (completedRun.status !== 'completed') {
        console.log(completedRun.status);
    }
    
    const messages = await openai.beta.threads.messages.list(thid);

    // Estrai il testo del messaggio
    const chatbotMessage = messages.data[0].content[0].text.value;
    pino = 0;
// Aggiungi il messaggio correttamente all'array allchat
allchat = [...allchat, { role: 'bot', text: chatbotMessage }];

        // Clear the input field
    
  }
}

  load();
</script>

<style>
  /* Basic CSS Reset */
  @import url('https://fonts.googleapis.com/css2?family=Ingrid+Darling&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ingrid+Darling&family=Inter:wght@100..900&display=swap');
  
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
    width: 50vw;
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
    max-width: 800px;
  }
  #send{
    margin-bottom: 2vh;
    margin-top: 10vh;
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
    margin-left: 25vw;
    margin-right: 25vw;
    margin-top: 25vh;
    border-radius: 40px;
    margin-bottom: 2vh;
    
  }
  .chat-content{
    max-height: 50vh;
    overflow-x:hidden;
    margin-bottom: 2vh;
  }
  .chat-content {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}
.chat-content::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
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

  @media (max-width: 2100px) {
    .chat{
    margin-left: 10vw;
    margin-top: 5vh;
    margin-right: 10vw;
    }
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
    .chat{
      margin-top: 2vh;
      margin-left: 2vw;
      margin-right: 2vw;
    }
    .logo img{
      height: 15vh;
    }
  }
    @media (max-width: 500px) {
      
        #input{
            width: 70vw;
            font-size: 0.75rem;
        }
        .back{
            width: 50px;
            margin: 5%;
        }
      }
        
  
</style>
<img src="back.png" alt="back" class="back" on:click={turnBack}>
{#if w > 768}
    <img src="https://wallpapers.com/images/hd/hell-2000-x-1000-2fiwna66nj94tx3x.jpg" alt="sfondo" id="bg">
    {:else}
    <img src="https://i.pinimg.com/originals/93/34/3b/93343b02897a08532627c6a815a74acc.jpg" alt="sfondo" id="bg">
    {/if}

<div class="chat"in:blur={{delay:725, duration:350}} out:blur>
    <div class="logo">
      <img src="dante logo 2.png" alt="logo">
    </div>
    <div class="chat-content" >
    {#each allchat as res_msg}
    <Message sender={res_msg.role} tt={res_msg.text}/>

  {/each}
  {#if pino==1}
  <Loading/>
  {/if}
    </div>
    <div>
    <input type="text" id="input" placeholder="Inserisci il testo" bind:value={mymessage} in:blur={{delay:850, duration:350}} out:blur={{duration:350}}>
    <button class="danger" id="send" on:click={btnsend3} in:slide={{delay:1000, duration:350}} out:slide={{duration:350}}>Invia</button></div>
  </div>