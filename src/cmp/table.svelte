<script>
  import { INPUTDATA, FORMULA, CALCULATED } from "../store";
  import { onMount } from "svelte";
  import { blur, slide } from "svelte/transition";
  import { ivp } from "../util";
  onMount(() => {
    update();
  });

  let sum = FORMULA.sum;

  $: x = $INPUTDATA.x_mutated;
  $: y = $INPUTDATA.y_mutated;

  $: xy = x && y ? x.map((v, i) => v * y[i]) : [];
  $: x2 = x ? x.map((v) => v * v) : [];
  $: y2 = y ? y.map((v) => v * v) : [];

  $: sum_x = sum(x);
  $: sum_y = sum(y);
  $: sum_x2 = sum(x2);
  $: sum_y2 = sum(y2);
  $: sum_xy = sum(xy);

  $: x, update();
  $: y, update();

  function update() {
    CALCULATED.set({
      sum_x,
      sum_y,
      sum_x2,
      sum_y2,
      sum_xy,
      n: x?.length ? x.length : 0,
    });
  }
  let el;
  let v = false;
  document.addEventListener("scroll", () => (v = ivp(el)));
</script>

<h3>Table</h3>
<section bind:this={el}>
  <table class="head" class:fadein={v}>
    <tr>
      <td>No.</td>
    </tr>
    <tr>
      <td>X</td>
    </tr>
    <tr>
      <td>Y</td>
    </tr>
    <tr>
      <td>X²</td>
    </tr>
    <tr>
      <td>Y²</td>
    </tr>
    <tr>
      <td>XY</td>
    </tr>
  </table>
  <table class="main" in:slide={{ duration: 666 }}>
    <tr class:flipx={v}>
      {#each Array(x.length) as _, i}
        <td>{i + 1}</td>
      {/each}
    </tr>
    <tr class:flipx={v}>
      {#each x as i}
        <td>{i}</td>
      {/each}
    </tr>
    <tr class:flipx={v}>
      {#each y as i}
        <td>{i}</td>
      {/each}
    </tr>
    <tr class:flipx={v}>
      {#each x2 as i}
        <td>{i}</td>
      {/each}
    </tr>
    <tr class:flipx={v}>
      {#each y2 as i}
        <td>{i}</td>
      {/each}
    </tr>
    <tr class:flipx={v}>
      {#each xy as i}
        <td>{i}</td>
      {/each}
    </tr>
  </table>
  <table class="result" class:flipy={v}>
    <tr>
      <td
        style={x.length % 2 == 0 ? "background:#c2c2c2" : "background:#4272f2"}
        ><b>SUM</b></td
      >
    </tr>
    <tr>
      {#key sum_x}
        <td
          style={x.length % 2 == 0
            ? "background:#c2c2c2"
            : "background:#4272f2"}
        >
          <b in:blur={{ duration: 666 }}>{sum_x}</b>
        </td>
      {/key}
    </tr>
    <tr>
      {#key sum_y}
        <td
          style={x.length % 2 == 0
            ? "background:#c2c2c2"
            : "background:#4272f2"}
        >
          <b in:blur={{ duration: 666 }}>{sum_y}</b>
        </td>
      {/key}
    </tr>
    <tr>
      {#key sum_x2}
        <td
          style={x.length % 2 == 0
            ? "background:#c2c2c2"
            : "background:#4272f2"}
        >
          <b in:blur={{ duration: 666 }}>{sum_x2}</b>
        </td>
      {/key}
    </tr>
    <tr>
      {#key sum_y2}
        <td
          style={x.length % 2 == 0
            ? "background:#c2c2c2"
            : "background:#4272f2"}
        >
          <b in:blur={{ duration: 666 }}>{sum_y2}</b>
        </td>
      {/key}
    </tr>
    <tr>
      {#key sum_xy}
        <td
          style={x.length % 2 == 0
            ? "background:#c2c2c2"
            : "background:#4272f2"}
        >
          <b in:blur={{ duration: 666 }}>{sum_xy}</b>
        </td>
      {/key}
    </tr>
  </table>
</section>
<hr />

<style>
  .flipx {
    animation: flipx 0.6s linear;
  }
  .flipy {
    animation: flipy 0.6s linear;
  }
  .fadein {
    animation: fadein 0.6s linear;
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
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }

  @keyframes fadein {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
  .main tr > * {
    background: #2272ff;
    text-align: center;
    padding: 8px 24px;
  }

  .main tr > *:nth-child(odd) {
    background-color: #f2f2f2;
  }

  section {
    display: flex;
    position: relative;
    align-items: center;
  }

  table.main {
    overflow-x: auto;
    display: block;
    transform-origin: 0;
  }

  .head td,
  .result td {
    padding: 8px 24px;
    font-weight: bolder;
    text-align: center;
  }
  .result td {
    padding: 8px 12px;
  }

  .head td {
    background-color: #4272f2;
  }
</style>
