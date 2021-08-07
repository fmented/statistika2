<script>
  import { FORMULA, STATEMENT, CALCULATED, RESULT } from "../store";
  import { blur } from "svelte/transition";
  import { remath } from "../mj";
  export let p = 2;
  $: tc = FORMULA.t_count($RESULT.correlation, $CALCULATED.n);
  $: tt = FORMULA.t_table($CALCULATED.n, p);

  $: c = tc >= tt ? $STATEMENT.ha : $STATEMENT.ho;
  $: s = tc >= tt ? "Ya" : "Tidak";
  const prct = [25, 20, 15, 10, 5, 2.5, 2, 1, 0.5];
  $: tc, setTimeout(remath, 100);
  import { ivp } from "../util";
  let el;
  let v = false;
  document.addEventListener("scroll", () => (v = ivp(el)));
</script>

<h3>Signifikansi</h3>
<section bind:this={el}>
  <details open class:fadein={v}>
    <summary>
      <strong>t_hitung</strong>
    </summary>
    <div style="padding: 12px;">
      <p>
        <i class="clean">t</i><sub>hitung</sub>` = (r sqrt(n-2))/ sqrt(1-r^2)`
      </p>

      <p>
        <i class="clean">t</i><sub>hitung</sub>` = `{tc}
      </p>
    </div>
  </details>
  <details open class:fadein={v}>
    <summary>
      <strong>t_tabel</strong>
    </summary>
    <div class="flx">
      <label for="prct">Nilai Alpha : </label>
      <select id="prct" bind:value={p}>
        {#each prct as pr}
          <option value={pr}>{pr}%</option>
        {/each}
      </select>
    </div>
  </details>
  <h4>
    <b class="aslink">t_hitung :</b>
    <i class="big">{tc} </i>
    <b class="bigger">&nbsp; &#8805; &nbsp;</b>
    <b>t_tabel :</b>
    {#key tt}
      <i class="big" in:blur={{ duration: 666 }}>{tt}</i>
    {/key}
    <b class="big">&nbsp; ?</b>
  </h4>
  <h4 in:blur={{ duration: 666 }}>
    {#key s}
      <i class:no={s == "Tidak"} class:yes={s == "Ya"}>{s}</i>
      <b class="big">{s == "Ya" ? "| Terima Ha" : "| Terima Ho"}</b>
    {/key}
  </h4>
</section>
<hr />

<h3>Kesimpulan</h3>
<section>
  <div class="scrollable">
    {#key c}
      <h5 in:blur={{ duration: 666 }}>{c}</h5>
    {/key}
  </div>
</section>
<hr />

<style>
  @keyframes fadein {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }
  .fadein {
    animation: fadein 0.8s linear;
  }
  .big {
    font-size: 1em;
  }
  .bigger {
    font-size: 1.5em;
  }
  .clean {
    text-decoration: none;
    font-size: 1.2em;
    color: black;
  }
  .aslink:hover {
    cursor: pointer;
  }
  i {
    text-decoration: underline;
    color: #666;
  }
  i.yes {
    color: #2272ff;
    font-size: 1em;
    text-decoration: none;
  }
  i.no {
    color: rgb(255, 99, 132);
    font-size: 1em;
    text-decoration: none;
  }
  .flx {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
  }
  select,
  label {
    width: calc(50vw - 16px);
  }
  label {
    font-size: 1em;
  }

  details[open] summary {
    background: #2272ff;
  }
  details[open] summary:hover {
    background-color: rgb(255, 99, 132);
  }
  details {
    border: 1px solid black;
    background: #c2c2c2;
  }

  summary {
    padding: 8px;
    background-color: #f2f2f2;
  }

  summary:hover {
    background: #4272f2;
    cursor: pointer;
  }
</style>
