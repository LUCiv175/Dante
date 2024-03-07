<script>
    import { blur } from "svelte/transition";

</script>
<style>

  .snippet {
    position: relative;
    background: #ffffff00;
    padding: 0px 0%;
    margin: 0px 0;
    box-shadow: 0 4px 12px -2px rgba(0, 32, 128, .1), 0 0 0 1px rgba(60, 80, 120, 0.1);
    border-radius: 16px;
  }


  .stage {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 32px 0;
    margin: 0 -5%;
    overflow: hidden;
  }
.dot-flashing {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #2f00ffe5;
  color: #2f00ffe5;
  animation: dot-flashing 1s infinite linear alternate;
  animation-delay: 0.5s;
}
.dot-flashing::before, .dot-flashing::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
}
.dot-flashing::before {
  left: -15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #FF9F1C;
  color: #FF9F1C;
  animation: dot-flashing 1s infinite alternate;
  animation-delay: 0s;
}
.dot-flashing::after {
  left: 15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #FF9F1C;
  color: #FF9F1C;
  animation: dot-flashing 1s infinite alternate;
  animation-delay: 1s;
}

@keyframes dot-flashing {
  0% {
    background-color: #FF9F1C;
  }
  50%, 100% {
    background-color: #ffa01c70;
  }
}
</style>

<main>
  <div class="container" in:blur={{delay: 200}} out:blur>
    <div class="row examples">
      <div class="col-3">
        <div class="snippet">
          <div class="stage">
            <div class="dot-flashing"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
