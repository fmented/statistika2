<script>
  import { INPUTDATA, MUTATOR } from "../store";
  import Display from "./display.svelte";
  export let label = "";
  export let variable = "";
  function update(d) {
    let storevalue = $INPUTDATA;
    storevalue[label] = d.map((v) => Number(v));
    storevalue[label + "_mutated"] = d.map((v) => Number(v) + $MUTATOR);
    INPUTDATA.set(storevalue);
  }

  export let inp = "1,7,9";
  $: data = inp
    .replace(" ", "")
    .split(",")
    .filter((v) => v != "");
  $: update(data);
</script>

<label for={label}>{variable}</label>
<textarea id={label} rows="5" bind:value={inp} />

<Display label={label.toUpperCase()} {data} count={true} />

<style>
  label {
    font-weight: bolder;
  }

  textarea {
    width: calc(100vw - 16px);
  }
</style>
