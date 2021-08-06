<script>
    export let data = []
    export let label = ""
    export let count = false
    import { slide } from "svelte/transition";
</script>

<div>
<table class="head">
    <tr>
        <th>{label}</th>
    </tr>
</table>
<table class="main">
    <tr >
        {#each data as d}
            <td transition:slide|local>{d}</td>
        {/each}
    </tr>
</table>
</div>
{#if count}
    <h5>{`Count: ${data.length}`}</h5>
{/if}


<style>
    div{
        display: flex;
        position: relative;
    }

    table.main{
        display: block;
        overflow-x: auto;
    }
    .main tr>*{
        background: #2272ff;
        text-align: center;
        padding: 8px 24px;
    }
    :global(::-webkit-scrollbar){
        height: 1px;
        width: 4px;
        background: gray;
    }
    .head{
        background-color: #4272f2;
        padding: 8px 24px;
    }
    .head th{
        text-align: center;
        white-space: nowrap;
    }
    .main tr>*:nth-child(odd){background-color: #f2f2f2;}
</style>