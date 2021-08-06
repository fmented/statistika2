<script>
    import { RESULT } from "../store";
    import { blur } from "svelte/transition";
    const intv = [
        {   min:.80,
            max:1.0,
            name: 'Sangat Kuat'
        },
        {   min:.60,
            max:.79,
            name: 'Kuat'
        },
        {   min:.40,
            max:.59,
            name: 'Cukup Kuat'
        },
        {   min:.20,
            max:.39,
            name: 'Lemah'
        },
        {   min:.0,
            max:.19,
            name: 'Sangat Lemah'
        }
        ]
        $: state = intv.filter(v=>$RESULT.correlation>=v.min && $RESULT.correlation<=v.max)[0]
</script>
<h3>Koefesien</h3>
{#key state}
<section>
    <table>
        <thead>
            <tr>
                <th>Interval</th>
                <th>Relasi</th>
            </tr>
            {#each intv as i}
            <tr class:strike={i.name!=state?.name} transition:blur={{duration:666}}>
                <td>{`${i.min} - ${i.max}`}</td>
                <td>{i.name}</td>
            </tr>
            {/each}
        </thead>
    </table>
</section>
    
{/key}
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
</style>
