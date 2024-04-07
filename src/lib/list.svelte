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
  margin: 0 5px;
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
    margin-bottom: 10vh;
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


<div class="hero">
  <img src="dante logo 2.png" alt="logo">
  <p>Catalogo</p>
  <div class="cards">
    <Card autore="Dante Alighieri" titolo="Divina Commedia" img="https://copertine.hoepli.it/archivio/978/8836/9788836005765.jpg"/>
    <Card autore="Giovanni Boccaccio" titolo="Decameron" img="https://romis2016.files.wordpress.com/2020/03/boccaccio2.jpg"/>
    <Card autore="Dan Brown" titolo="Il Codice da Vinci" img="https://www.mondadoristore.it/img/Il-Codice-da-Vinci-Dan-Brown/ea978880474667/BL/BL/01/ZOM/?tit=Il+Codice+da+Vinci&aut=Dan+Brown"/>
    <Card autore="George Orwell" titolo="1984" img="https://assets.brightspot.abebooks.a2z.com/dims4/default/af999db/2147483647/strip/true/crop/328x493+0+4/resize/253x380!/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.us-west-2.amazonaws.com%2Ff6%2Fcc%2F4f7b32eb40454d5cfa3c2b13102c%2F1984.jpg"/>
    <Card autore="James Joyce" titolo="Ulisse" img="https://www.lafeltrinelli.it/images/9788807903939_0_536_0_75.jpg"/>
    <Card autore="Dante Alighieri" titolo="Divina Commedia" img="https://copertine.hoepli.it/archivio/978/8836/9788836005765.jpg"/>
    <Card autore="Dante Alighieri" titolo="Divina Commedia" img="https://copertine.hoepli.it/archivio/978/8836/9788836005765.jpg"/>
  </div>
</div>
