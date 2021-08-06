<script>


    export let data = []
    export let label = ""
    export let count = false
</script>

<div>


<table>
    <tr>
        <th>{label}</th>
        {#each data as d}
            <td>{d}</td>
        {/each}
    </tr>
</table>
</div>
{#if count}
    <h5>{`Count: ${data.length}`}</h5>
{/if}


<style>
    table, tr{
        border: 1px solid black;
    }

    table{
        border-collapse: collapse;
        display: block;
        overflow-x: auto;
    }
    tr>*{
        width: 1%;
        background: #2272ff;
        text-align: center;
    }
    tr{
        min-height: 2.5rem;
    }

    
    tr>*:nth-child(even){background-color: #f2f2f2;}
</style>