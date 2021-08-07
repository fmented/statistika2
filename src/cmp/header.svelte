<script>
  import { INPUTDATA } from "../store";
  import { fly, blur } from "svelte/transition";
  import { ivp } from "../util";
  let el;
  let x = true;
  document.addEventListener("scroll", () => (x = ivp(el)));
</script>

<header class:bounce={x} bind:this={el}>
  <a href="mailto:fmented@gmail.com"><b>📊 Statistika - Fauki</b></a>
</header>
{#if $INPUTDATA?.x?.length != $INPUTDATA?.y?.length}
  <div in:fly={{ duration: 666 }} out:blur={{ duration: 666 }}>
    <strong> Error : Jumlah X dan Y tidak sesuai ! </strong>
  </div>
{/if}
<br />

<style>
  header {
    margin: 0;
    background: #2272ff;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    height: 2.5rem;
    display: flex;
    align-items: center;
    animation-duration: 2s;
    animation-fill-mode: both;
  }
  b {
    margin: 8px;
    font-size: 1.6em;
    color: #eee;
    padding-top: 16px;
  }
  div {
    background: rgb(255, 99, 132);
    font-weight: bold;
    border-radius: 4px;
  }
  strong {
    margin-left: 1rem;
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  .bounce {
    -webkit-animation-name: bounce;
    animation-name: bounce;
  }
</style>
