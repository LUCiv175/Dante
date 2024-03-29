<script>
    import Card from "./Card.svelte";

</script>

<style>
    
    .hero {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    text-align: center;
    padding: 0 20px;
    flex-direction: column;
    background-color: #262626;
  }

  .cards{
    display: grid;
    width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr); 
        gap: 10px;
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
</style>


<div class="hero">
    <img src="dante logo 2.png" alt="logo">
    <p>Catalogo</p>
    <div class="cards">
      <Card autore="Dante Alighieri" titolo="Divina Commedia"/>
      <Card autore="Dante Alighieri" titolo="Divina Commedia"/>
      <Card autore="Dante Alighieri" titolo="Divina Commedia"/>
      <Card autore="Dante Alighieri" titolo="Divina Commedia"/>
      <Card autore="Dante Alighieri" titolo="Divina Commedia"/>
      <Card autore="Dante Alighieri" titolo="Divina Commedia"/>
    </div>
</div>