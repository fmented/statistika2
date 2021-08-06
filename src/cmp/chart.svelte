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
function compare(a, b) {
    if(a.x < b.x) return -1
    if(a.x>b.x) return 1
    return 0
}

$: data = {
  datasets: [
      {
    label: 'Y',
    data: $INPUTDATA.x_mutated.map((v, i)=>{return {x:v, y:$INPUTDATA.y_mutated[i]}}).sort(compare),
    backgroundColor: 'rgb(255, 99, 132)',
    showLine: true,
    borderColor:'red',
    borderWidth:1
  },
  {
    label: 'Predicted Y',
    data: $INPUTDATA.x_mutated.map((v, i)=>{return {x:v, y:$CHART[i]}}).sort(compare) ,
    backgroundColor: '#2272ff',
    showLine: true,
    borderColor:'blue',
    borderWidth:1
  }
],
};

$:data, update()

$: if(c){
    ch?ch.update() : ch = new Chart(c, config)
}
</script>
<h3>Graph</h3>
<canvas bind:this="{c}"></canvas>
<br>