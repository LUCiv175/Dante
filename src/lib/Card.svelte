<script>
  import { store } from "../script/stores";

  export let titolo;
  export let autore;
  export let img;
  export let id;
  let showInfo = () => {
    $store.info = id;
  }


 
</script>
<style>
   
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
  cursor: pointer;
  width: 15rem;
  height: 22.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 36px;
  perspective: 2500px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
 
.cover-image {
    border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  object-fit: cover;  
  height: 22.5rem;
}
 
.wrapper {
  transition: all 0.5s;
  position: absolute;
  width: 100%;
  z-index: -1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  font-weight: 500;
  font-style: normal;
  text-decoration: none;
  color: #FF1B1C;
  font-size: 1.7rem;
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
  font-size: 1.5rem;
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
        width: 100%;
}
 
@media screen and (max-width: 1170px){
    .card{
        width: 12rem;
        height: 18rem;
    }
    .cover-image {
        height: 18rem;
    }
    .title {
        font-size: 1.5rem;
        width: 10rem;
    }
    .subtitle {
        font-size: 1.3rem;
        width: 10rem;
    }
}
@media screen and (max-width: 950px){
    .card{
        width: 10rem;
        height: 15rem;
    }
    .cover-image {
        height: 15rem;
    }
    .title {
        font-size: 1.3rem;
        width: 8rem;
    }
    .subtitle {
        font-size: 1.1rem;
        width: 8rem;
    }
 
}
@media screen and (max-width: 690px){
    .card{
        width: 8rem;
        height: 12rem;
    }
    .title {
        font-size: 1.1rem;
        width: 7rem;
    }
    .subtitle {
        font-size: 0.9rem;
        width: 7rem;
    }
    .cover-image {
        height: 12rem;
    }
}
@media screen and (max-width: 570px){
    .card{
        width: 6rem;
        height: 9rem;
    }
    .title {
        font-size: 0.9rem;
        width: 5rem;
    }
    .subtitle {
        font-size: 0.7rem;
        width: 5rem;
    }
    .cover-image {
        height: 9rem;
    }
}
@media screen and (max-width: 470px){
    .card{
        width: 4rem;
        height: 6rem;
    }
    .title {
        font-size: 0.7rem;
        width: 3rem;
    }
    .subtitle {
        font-size: 0.5rem;
        width: 3rem;
    }
    .cover-image {
        height: 6rem;
    }
}
</style>
<div class="grid-item" >
    <div class="card" on:click={showInfo}>
      <div class="wrapper">
        <img src={img} class="cover-image" />
      </div>
      <div>
      <h1 class="title">{titolo}</h1>
     
      <h3 class="subtitle">{autore}</h3></div>
    </div></div>