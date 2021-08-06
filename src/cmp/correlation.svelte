<script>
    import {CALCULATED, FORMULA, RESULT} from '../store'
    import Coeffetient from './coeffetient.svelte'
    import { blur } from "svelte/transition";
    function update() {
        let r = $RESULT
        r.correlation = result
        r.kd = FORMULA.kd(result, 2)
        RESULT.set(r)
    }

    $: result = FORMULA.correlation(
        $CALCULATED.n, $CALCULATED.sum_x, $CALCULATED.sum_y, 
        $CALCULATED.sum_x2, $CALCULATED.sum_y2, $CALCULATED.sum_xy, 2
        )
    $:result, update()
</script>
<h3>Korelasi</h3>
{#key result}
<section class="scrollable">

    <p>
        `r = (n.sumXY- (sumX)(sumY))/
        sqrt((n.sumX^2-(sumX)^2)-(n.sumY^2-(sumY)^2))`
        <br>
        `r=`<i in:blur={{duration:666, }}>{result}</i>
    </p>
</section>
{/key}
<hr>
<Coeffetient/>
<h3>KD</h3>
{#key $RESULT.kd}
<section class="scrollable">

    <p>
        
        `KD=r^2 * 100`
        <br>
        `KD=`<i in:blur={{duration:666, }}>{$RESULT.kd}%</i>
    </p>
</section>
<hr>
<h3>Kontribusi</h3>
<section>

    <table>
        <thead>
            <tr>
                <th>Kontribusi</th>
                <th>Eksternal</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <b in:blur={{duration:666, }}>{[$RESULT.kd]}% &nbsp; ✔</b>
                </td>
                <td>
                    <b in:blur={{duration:666, }}>{[FORMULA.round(100-$RESULT.kd)]}%</b>
                </td>
            </tr>
        </tbody>
    </table>
</section>
{/key}
<hr>
<style>
       table, tr{
        border: 1px solid black;
    }

    table{
        border-collapse: collapse;
        overflow-x: scroll;
        border-radius: 8px;
    }
    
    tr>*{
        width: 1%;
        background: #2272ff;
        text-align: center;
    }
    
    td{
        background-color: #f2f2f2;
    }
    th{
        background: #2272ff;
    }
    th:nth-child(even){background-color: #4272f2;}
    td:nth-child(even){background-color: #c2c2c2;}
    :global(.scrollable){
        display: block;
        overflow-x: auto;

    }
</style>