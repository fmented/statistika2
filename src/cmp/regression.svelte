<script>
  import { FORMULA, CALCULATED, CHART, INPUTDATA } from "../store";
  import Display from "./display.svelte";
  import { blur } from "svelte/transition";
  import { remath } from "../mj";

  $: b = FORMULA.reg_b(
    $CALCULATED.n,
    $CALCULATED.sum_x,
    $CALCULATED.sum_y,
    $CALCULATED.sum_x2,
    $CALCULATED.sum_xy,
    2
  );

  $: a = FORMULA.reg_a(
    $CALCULATED.n,
    b,
    $CALCULATED.sum_x,
    $CALCULATED.sum_y,
    2
  );

  $: CHART.set(FORMULA.regression(a, b, $INPUTDATA.x_mutated));

  $: a, setTimeout(remath, 100);
  $: b, setTimeout(remath, 100);
</script>

<h3>Regresi</h3>
{#key b}
  <section>
    <div class="scrollable">
      <p>`b = (n*sumXY-sumX*sumY )/(n.sumX^2-(sumX)^2)`</p>
      <p>
        `b = ({$CALCULATED.n}*{$CALCULATED.sum_xy}-{$CALCULATED.sum_x}*{$CALCULATED.sum_y})/({$CALCULATED.n}*{$CALCULATED.sum_x2}-({$CALCULATED.sum_x})^2)`
      </p>
      <p>
        `b = ` <i in:blur={{ duration: 666 }}>{b}</i>
      </p>
    </div>
    <br />
    <div class="scrollable">
      <p>`a = (sumY-b*sumX)/(n)`</p>
      <p>
        `a = ({$CALCULATED.sum_y}-{b}*{$CALCULATED.sum_x})/({$CALCULATED.n})`
      </p>
      <p>
        `a = `<i in:blur={{ duration: 666 }}>{a}</i>
      </p>
    </div>
  </section>
{/key}
<hr />

<h3>Persamaan Regresi</h3>
<section>
  <Display label="Y" data={$INPUTDATA.y_mutated.map((v) => FORMULA.round(v))} />
  <br />
  <Display label="Y predicted" data={$CHART.map((v) => FORMULA.round(v, 2))} />
</section>
<hr />
