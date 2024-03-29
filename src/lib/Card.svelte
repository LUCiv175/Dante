<script>
  export let titolo;
  export let autore;

</script>
<style>
    
    :root {
  --card-height: 30rem;
  --card-width: 20rem;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #191c29;
}
.card {
  width: var(--card-width);
  height: var(--card-height);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 36px;
  perspective: 2500px;
  margin: 0 50px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-bottom: 5vh;
}

.cover-image {
    border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wrapper {
  transition: all 0.5s;
  position: absolute;
  width: 100%;
  z-index: -1;
  display: flex;
  flex-direction: column;
}

.wrapper::before,
.wrapper::after {
  content: "";
  opacity: 0;
  width: 100%;
  
  transition: all 0.5s;
  position: absolute;
  left: 0;
}
.wrapper::before {
  top: 0;
  height: 100%;
  opacity: 1;
  background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.86) 26%, rgba(0,0,0,0) 100%);
}
.wrapper::after {
  bottom: 0;
  opacity: 1;
  background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.86) 26%, rgba(0,0,0,0) 100%);
}

.card:hover .wrapper::before,
.wrapper::after {
  opacity: 1;
}

.title {
  width: 100%;
  transition: transform 0.5s;
  font-family: "Island Moments", cursive;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  color: #FF1B1C;
  margin-bottom: 5px;
}
.subtitle {
    margin-top: 5px;
  width: 100%;
  transition: transform 0.5s;
  font-family: "Kolker Brush", cursive;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  color: #FF9F1C;
  font-size: 1.75rem;
}


.card:hover .wrapper {
  transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
  box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.86) 90%, rgba(0,0,0,0) 100%);
}

.card:hover .title, .card:hover .subtitle {
  transform: translate3d(0%, -50px, 100px);
  scale: 1.1;
}
.grid-item{
    display: flex;
        align-items: center;
        justify-content: center;
}
</style>
<div class="grid-item">
    <div class="card">
      <div class="wrapper">
        <img src="https://copertine.hoepli.it/archivio/978/8836/9788836005765.jpg" class="cover-image" />
      </div>
      <div>
      <h1 class="title">{titolo}</h1>
      
      <h3 class="subtitle">{autore}</h3></div>
    </div></div>