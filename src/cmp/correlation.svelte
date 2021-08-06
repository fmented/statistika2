<script>
    import {CALCULATED, FORMULA, RESULT} from '../store'
    import Coeffetient from './coeffetient.svelte'

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
<h3>Correlation</h3>

<div class="scrollable">

    <p>
        `r = (n.sumXY- (sumX)(sumY))/
        sqrt((n.sumX^2-(sumX)^2)-(n.sumY^2-(sumY)^2))`
        <br>
        `r=`<i>{result}</i>
    </p>
</div>
<hr>
<Coeffetient/>
<h3>KD</h3>
<div class="scrollable">

    <p>
        
        `KD=r^2 * 100`
        <br>
        `KD=`<i>{$RESULT.kd}%</i>
    </p>
</div>
    <hr>
    <h3>Influence</h3>
<table>
    <thead>
        <tr>
            <th>Influence</th>
            <th>Non-Influence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <b>{[$RESULT.kd]}%</b>
            </td>
            <td>
                <b>{[FORMULA.round(100-$RESULT.kd)]}%</b>
            </td>
        </tr>
    </tbody>
</table>
<hr>
<style>
       table, tr{
        border: 1px solid black;
    }

    table{
        border-collapse: collapse;
        overflow-x: scroll;
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