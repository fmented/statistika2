<script>
  import { STATEMENT } from "../store";
  export let ha = "";
  export let ho = "";
  $: STATEMENT.set({ ho, ha });
</script>

<div>
  <h3>Statement</h3>
  <section>
    <label for="ho">Ho</label>
    <input type="text" id="ho" bind:value={ho} />

    <label for="ha">Ha</label>
    <input type="text" id="ha" bind:value={ha} />
  </section>
</div>
<hr />

<style>
  label {
    font-weight: bolder;
  }

  input {
    width: calc(100vw - 16px);
  }
  div {
    margin-top: 1rem;
  }
</style>
