<script>
  import { MUTATOR, INPUTDATA } from "../store";
  import Display from "./display.svelte";
  export let val = 0;
  $: val, update();

  function update() {
    MUTATOR.set(val);
    let INPUT = $INPUTDATA;
    let keys = Object.keys($INPUTDATA);
    keys = keys.filter((v) => v.includes("_mutated"));
    keys.forEach(
      (k) =>
        (INPUT[k] = $INPUTDATA[k.replace("_mutated", "")].map((v) => v + val))
    );
    INPUTDATA.set(INPUT);
  }
</script>

<hr />
<br />
<label for="mutator">NIM Terakhir</label>
<input type="number" id="mutator" bind:value={val} />
<br />
<h5>Result</h5>
<section>
  <Display label="X" data={$INPUTDATA.x_mutated} />
  <br />
  <Display label="Y" data={$INPUTDATA.y_mutated} />
</section>
<hr />

<style>
  label {
    font-weight: bolder;
  }

  input {
    width: calc(100vw - 16px);
  }
</style>
