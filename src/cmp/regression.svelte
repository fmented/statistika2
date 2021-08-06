<script>
    import {FORMULA, CALCULATED, CHART, INPUTDATA} from '../store'
    import Display from './display.svelte'

    $: b = FORMULA.reg_b($CALCULATED.n, $CALCULATED.sum_x, $CALCULATED.sum_y, 
    $CALCULATED.sum_x2, $CALCULATED.sum_xy, 2)

    $:a = FORMULA.reg_a($CALCULATED.n, b, $CALCULATED.sum_x, $CALCULATED.sum_y, 2)

    $: CHART.set(FORMULA.regression(a, b, $INPUTDATA.x_mutated))


</script>

<h3>Regresi</h3>
<div class="scrollable">

    <p>
        `b= (nsumXY-sumXsumY )/(n sumX^2-(sumX)^2)`
    </p>
    <p>
        `b = ` <i>{b}</i>
    </p>
</div>
<br>
<div class="scrollable">

    <p>
        `a= (sumY-b sumX)/(n)`
    </p>
    <p>
        `a = `<i>{a}</i>
    </p>
</div>
<hr>

<h3>Persamaan Regresi</h3>
<Display label="Y original" data="{$INPUTDATA.y_mutated.map(v=>FORMULA.round(v))}"/>
<br>
<Display label="Y predicted" data="{$CHART.map(v=>FORMULA.round(v, 2))}"/>
<hr>
