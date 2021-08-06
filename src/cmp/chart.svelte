<script>
import { INPUTDATA, CHART} from "../store";
import Chart from 'chart.js/auto'
let ch

let c
$: config = {
    type: 'scatter',
    data: data,
    options: {
        scales: {
        x: {
            type: 'linear',
            position: 'bottom'
        }
        }
    }
}


function update() {
    if (ch){
        ch.data=data
        ch.update()
    }
} 
$: data = {
  datasets: [
      {
    label: 'Y',
    data: $INPUTDATA.x_mutated.map((v, i)=>{return {x:v, y:$INPUTDATA.y_mutated[i]}}),
    backgroundColor: 'rgb(255, 99, 132)'
  },
  {
    label: 'Predicted Y',
    data: $INPUTDATA.x_mutated.map((v, i)=>{return {x:v, y:$CHART[i]}}) ,
    backgroundColor: '#2272ff'
  }
],
};

$:data, update()

$: if(c){
    ch?ch.update() : ch = new Chart(c, config)
}
</script>
<h3>Chart</h3>
<canvas bind:this="{c}"></canvas>
<br>