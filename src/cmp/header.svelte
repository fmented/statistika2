
<script>
    import { INPUTDATA } from "../store";
</script>
<header>
    <a href="mailto:fmented@gmail.com"><b>📊 Statistika - Fauki</b></a>
</header>
{#if $INPUTDATA?.x?.length != $INPUTDATA?.y?.length}
    <div>Error : Jumlah X dan Y tidak sesuai !</div>
{/if}
<br>
<style>
    header{
        margin: 0;
        background: #2272ff;
        border: 1px solid #f2f2f2;
        border-radius: 4px;
        height: 2.5rem;
        display: flex;
        align-items: center;
    }
    b{
        margin: 8px;
        font-size: 1.6em;
        color: #eee;
        padding-top: 16px;
    }
    div{
        background: rgb(255, 99, 132);
        font-weight: bold;
        border-radius: 4px;
    }
</style>