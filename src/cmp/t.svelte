<script>
    import { FORMULA, STATEMENT, CALCULATED, RESULT } from "../store";
    let p = 5
    $: tc = FORMULA.t_count($RESULT.correlation, $CALCULATED.n)
    $: tt = FORMULA.t_table($CALCULATED.n, p)

    $: c = tc>=tt? $STATEMENT.ha : $STATEMENT.ho
    $: s = tc>=tt? 'Yes' : 'No'
    const prct = [25, 20, 15, 10, 5, 2.5, 2, 1, 0.5]
    
</script>

<h3>T Comparison</h3>
<div class="flx">
    <label for="prct">Percentage</label>
    <select id="prct" bind:value="{p}">
        {#each prct as pr}
        <option value="{pr}" >{pr}%</option>
        {/each}
    </select>
</div>
<h4>{@html `${tc} &nbsp;  &#8805; &nbsp; ${tt} &nbsp;  ? &nbsp; `}<i class:no={s=='No'}>{s}</i></h4>
<hr>

<h3>Conclusion</h3>
<div class="scrollable">
    <h5>{c}</h5>
</div>
<hr>

<style>
i{
    color: #2272ff;
}
i.no{
    color: rgb(255, 99, 132);
}
.flx{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
select, label{
    width: calc(50vw - 16px);
}
label{
    font-size: larger;
}
</style>