<script>
    import {INPUTDATA, FORMULA, CALCULATED} from '../store'
    import {onMount} from 'svelte'
    onMount(()=>update())
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
    <table>
        <tr>
            <th>No.</th>
            {#each Array(x.length) as _, i}
            <td>{i+1}</td>
            {/each}
            <th>SUM</th>
        </tr>
        <tr>
            <th>X</th>
            {#each x as i }
            <td>{i}</td>
            {/each}
            <td><b>{sum_x}</b></td>
        </tr>
        <tr>
            <th>Y</th>
            {#each y as i }
            <td>{i}</td>
            {/each}
            <td><b>{sum_y}</b></td>
        </tr>
        <tr>
            <th>X<sup>2</sup></th>
            {#each x2 as i }
            <td>{i}</td>
            {/each}
            <td><b>{sum_x2}</b></td>
        </tr>
        <tr>
            <th>Y<sup>2</sup></th>
            {#each y2 as i }
            <td>{i}</td>
            {/each}
            <td><b>{sum_y2}</b></td>
        </tr>
        <tr>
            <th>XY</th>
            {#each xy as i }
            <td>{i}</td>
            {/each}
            <td><b>{sum_xy}</b></td>
        </tr>
    </table>
</section>
<hr>
<style>
    table, tr{
        border: 1px solid black;
    }

    table{
        border-collapse: collapse;
        overflow-x: auto;
        display: block;
    }
    
    tr>*{
        width: 1%;
        background: #2272ff;
        text-align: center;
    }
    tr>th:first-of-type{
        text-align: left;
        padding-left: .5em;
    }
    tr>*:nth-child(even){background-color: #f2f2f2;}
</style>