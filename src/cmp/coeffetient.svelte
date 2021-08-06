<script>
    import { RESULT } from "../store";
    const intv = [
        {   min:.80,
            max:1.0,
            name: 'Very Strong'
        },
        {   min:.60,
            max:.79,
            name: 'Strong'
        },
        {   min:.40,
            max:.59,
            name: 'Strong Enough'
        },
        {   min:.20,
            max:.39,
            name: 'Weak'
        },
        {   min:.0,
            max:.19,
            name: 'Very Weak'
        }
        ]
        $: state = intv.filter(v=>$RESULT.correlation>=v.min && $RESULT.correlation<=v.max)[0]
</script>
<h3>Coeffetient</h3>
<table>
    <thead>
        <tr>
            <th>Interval</th>
            <th>Relation</th>
        </tr>
        {#each intv as i}
            <tr class:strike={i.name!=state?.name}>
                <td >{`${i.min} - ${i.max}`}</td>
                <td >{i.name}</td>
            </tr>
        {/each}
    </thead>
</table>
<hr>
<style>
    .strike{
        text-decoration: line-through;
        color: rgb(255, 99, 132);
    }
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
</style>
