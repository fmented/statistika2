<script>
    import {INPUTDATA, FORMULA, CALCULATED} from '../store'
    import {onMount} from 'svelte'
    import { blur, slide } from "svelte/transition";
    onMount(()=>{
        update()
    })

    let sum = FORMULA.sum

    $: x = $INPUTDATA.x_mutated 
    $: y = $INPUTDATA.y_mutated

    $: xy = x&&y ? x.map((v, i)=> v*y[i]) : []
    $: x2 = x ? x.map(v=> v*v) : []
    $: y2 = y ? y.map(v=> v*v) : []

    $: sum_x = sum(x)
    $: sum_y = sum(y)
    $: sum_x2 = sum(x2)
    $: sum_y2 = sum(y2)
    $: sum_xy = sum(xy)

    $: x, update()
    $: y, update()

    function update() {
        CALCULATED.set({
        sum_x,
        sum_y,
        sum_x2,
        sum_y2,
        sum_xy,
        n:x?.length?x.length:0
    })
    }

</script>
<h3>Table</h3>
<section>
<table class="head">
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
<table class="main" in:slide={{duration:666}}>
        <tr>
            {#each Array(x.length) as _, i}
            <td>{i+1}</td>
            {/each}
        </tr>
        <tr>  
            {#each x as i }
            <td>{i}</td>
            {/each}
        </tr>
        <tr>  
            {#each y as i }
            <td>{i}</td>
            {/each}
        </tr>
        <tr>
            {#each x2 as i }
            <td>{i}</td>
            {/each}
        </tr>
        <tr>
            {#each y2 as i }
            <td>{i}</td>
            {/each}
        </tr>
        <tr>
            {#each xy as i }
            <td>{i}</td>
            {/each}
        </tr>
</table>
<table class="result">
    <tr>
        <td style="{x.length%2==0?'background:#c2c2c2':'background:#4272f2'}"><b>SUM</b></td>
    </tr>
    <tr>
        {#key sum_x}    
        <td style="{x.length%2==0?'background:#c2c2c2':'background:#4272f2'}">
            <b in:blur={{duration:666}}>{sum_x}</b>
        </td>
        {/key}
    </tr>
    <tr>
        {#key sum_y}   
        <td style="{x.length%2==0?'background:#c2c2c2':'background:#4272f2'}">
            <b in:blur={{duration:666}}>{sum_y}</b>
        </td>
        {/key}
    </tr>
    <tr>
        {#key sum_x2}   
        <td style="{x.length%2==0?'background:#c2c2c2':'background:#4272f2'}">
            <b in:blur={{duration:666}}>{sum_x2}</b>
        </td>
        {/key}
    </tr>
    <tr>
        {#key sum_y2}
            
        <td style="{x.length%2==0?'background:#c2c2c2':'background:#4272f2'}">
            <b in:blur={{duration:666}}>{sum_y2}</b>
        </td>
        {/key}
    </tr>
    <tr>
        {#key sum_xy}
            
        <td style="{x.length%2==0?'background:#c2c2c2':'background:#4272f2'}">
            <b in:blur={{duration:666}}>{sum_xy}</b>
        </td>
        {/key}
    </tr>
</table>
    
</section>
<hr>
<style>

    .main tr>*{
        background: #2272ff;
        text-align: center;
        padding: 8px 24px;
    }

    
    .main tr>*:nth-child(odd){
        background-color: #f2f2f2;
        }

    section{
        display: flex;
        position: relative;
        align-items: center;
    }

    table.main{
        overflow-x: auto;
        display: block;
    }

    .head td, .result td{
        padding: 8px 24px;
        font-weight: bolder;
        text-align: center;
    }
    .result td{
        padding: 8px 12px;
    }

    .head td{
        background-color: #4272f2;
    }


</style>