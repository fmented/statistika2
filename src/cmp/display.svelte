<script>
  export let data = [];
  export let label = "";
  export let count = false;
  import { slide } from "svelte/transition";
  import { ivp } from "../util";
  let el;
  let v = false;
  document.addEventListener("scroll", () => (v = ivp(el)));
</script>

<div>
  <table class:flipy={v} class="head" bind:this={el}>
    <tr>
      <th>{label}</th>
    </tr>
  </table>
  <table class:flipx={v} class="main">
    <tr>
      {#each data as d}
        <td transition:slide|local>{d}</td>
      {/each}
    </tr>
  </table>
</div>
{#if count}
  <h5>{`Count: ${data.length}`}</h5>
{/if}

<style>
  div {
    display: flex;
    position: relative;
  }

  table.main {
    display: block;
    overflow-x: auto;
  }
  .main tr > * {
    background: #2272ff;
    text-align: center;
    padding: 8px 24px;
  }
  :global(::-webkit-scrollbar) {
    height: 1px;
    width: 4px;
    background: gray;
  }
  .head {
    background-color: #4272f2;
    padding: 8px 24px;
    animation-duration: 2s;
    animation-fill-mode: both;
  }
  .head th {
    text-align: center;
    white-space: nowrap;
  }
  .main tr > *:nth-child(odd) {
    background-color: #f2f2f2;
  }

  .flipx {
    animation: flipx 0.6s linear;
  }
  .flipy {
    animation: flipy 0.6s linear;
  }
  @keyframes flipx {
    from {
      transform: rotateX(90deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }

  @keyframes flipy {
    from {
      transform: rotateY(180deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
</style>
