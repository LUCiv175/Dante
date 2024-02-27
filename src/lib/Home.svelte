<script>
  
</script>

<style>
  /* Basic CSS Reset */
  @import url('https://fonts.googleapis.com/css2?family=Ingrid+Darling&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ingrid+Darling&family=Inter:wght@100..900&display=swap');
  

  :global(.primary) {
    background-color: #262626;
    color: #E2E8CE;
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
  :global(.secondary) {
    background-color: #FF9F1C;
    color: #262626;
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
    transition: 0.4s;
    
  }
  :global(.primary:hover) {
    background-color: transparent;
    color: #262626;
    border: 2px solid #262626;
    scale: 1.1;
  }

  :global(.secondary:hover) {
    background-color: transparent;
    color: #FF9F1C;
    border: 2px solid #FF9F1C;
    scale: 1.1;
  }
  
  
  /* Hero Section Styles */
  .hero {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    text-align: center;
    padding: 0 20px;
    flex-direction: column;
  }
  
  .hero-content {
    
    margin: auto;
  }
  
  .hero img {
    height: 27vh;
    margin-bottom: 10px;
  }
  
  .hero p {
    font-size: 2rem;
    font-family: "Ingrid Darling", cursive;
  font-weight: 400;
  font-style: normal;
  color: #FF1B1C;
  }
  #devil {
    position: fixed;
    bottom: -60px;
    left: -60px;
    rotate: 35deg;
    height: 300px;
  }


  
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
    .hero p {
      font-size: 1rem;
    }
    #devil {
      height: 150px;
      bottom: -30px;
      left: -30px;
    }
  }
  @media (max-width: 300px) {
    .hero{
      height: 105vh;
      
    }
  }
</style>

  <div class="hero">
    <div class="hero-content">
      <img src="dante logo 2.png" alt="logo">
      <p>Se l'intelligenza artificiale può svelare il mistero dell'Inferno, allora l'umanità può ascendere al Paradiso.</p>
      <div>
      <button class="primary">Raccontami</button></div>
      <div><button class="secondary">Entra nella Biblioteca</button></div>
    </div>
    
  </div><img src="devil.png" alt="devil" id="devil">

