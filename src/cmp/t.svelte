<script>
    import { FORMULA, STATEMENT, CALCULATED, RESULT } from "../store";
    import { blur} from "svelte/transition";
    export let p = 2
    $: tc = FORMULA.t_count($RESULT.correlation, $CALCULATED.n)
    $: tt = FORMULA.t_table($CALCULATED.n, p)

    $: c = tc>=tt? $STATEMENT.ha : $STATEMENT.ho
    $: s = tc>=tt? 'Ya' : 'Tidak'
    const prct = [25, 20, 15, 10, 5, 2.5, 2, 1, 0.5]
    
</script>

<h3>Signifikansi</h3>
<section>
    <div class="flx">
        <label for="prct">Nilai Alpha : </label>
        <select id="prct" bind:value="{p}">
            {#each prct as pr}
            <option value="{pr}" >{pr}%</option>
            {/each}
        </select>
    </div>
    <h4>
        <b>t_hitung :</b>
        <i class="big">{tc} </i>
        <b class="bigger">&nbsp; &#8805; &nbsp;</b>
        <b>t_tabel :</b>
        {#key tt}
        <i class="big" in:blur={{duration:666, }}>{tt}</i>
        {/key}
        <b class="big">&nbsp; ?</b>
    </h4>
    <h4 in:blur={{duration:666, }}>
        {#key s}
        <i class:no={s=='Tidak'} class:yes={s=='Ya'}>{s}</i>
        <b class="big" >{s=='Ya'?'| Terima Ha':'| Terima Ho'}</b>
        {/key}
    </h4>
</section>
<hr>

<h3>Kesimpulan</h3>
<section>
    <div class="scrollable">
        {#key c}      
        <h5 in:blur={{duration:666, }}>{c}</h5>
        {/key}
    </div>
</section>
<hr>

<style>
    .big{
        font-size: 1em;
    }
    .bigger{
        font-size: 1.5em;
    }
i{
    text-decoration: underline;
    color: #666;
}
i.yes{
    color: #2272ff;
    font-size: 1em;
    text-decoration: none;
}
i.no{
    color: rgb(255, 99, 132);
    font-size: 1em;
    text-decoration: none;
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