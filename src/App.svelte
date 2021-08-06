<script>
	import Input from './cmp/input.svelte'
	import Mutator from "./cmp/mutator.svelte";
	import Table from "./cmp/table.svelte"
	import Statement from './cmp/statement.svelte'
	import Correlation from './cmp/correlation.svelte'
	import Regression from './cmp/regression.svelte'
	import T from './cmp/t.svelte'
	import Chart from './cmp/chart.svelte'
	import Header from './cmp/header.svelte'
</script>

<Header/>
<main>
	<Input label="x" 
	variable="Postur Tubuh Manusia"
	inp="38, 31, 35, 27, 31, 37, 35, 31, 31, 29, 28, 28, 38, 30, 39, 31, 30, 32, 35, 25, 33, 31, 39, 28, 35, 31, 33, 28, 37, 36"/>
	<Input label="y" 
	variable="Tingkat Kelelahan Pekerja"
	inp="68, 69, 72, 51, 71, 73, 88, 56, 74, 66, 70, 56, 81, 70, 79, 75, 58, 69, 72, 51, 71, 73, 84, 56, 74, 66, 70, 56, 81, 80"/>
	<Mutator val="{8}"/>
	<Statement 
	ho="Ada Hubungan Postur Tubuh Manusia Terhadap Tingkat Kelelahan Pekerja."
	ha="Tidak Ada Hubungan Postur Tubuh Manusia Terhadap Tingkat Kelelahan Pekerja."/>
	<Table/>
	<Correlation/>
	<T p={2}/>
	<Regression/>
	<Chart/>
</main>
<footer>
	<a href="https://github.com/fmented/statistika2">source_code</a>
</footer>
<style>
	:global(*){
		box-sizing: border-box;
	}
	:global(main){
		padding: 8px;
	}
	:global(body){
		padding: 0;
	}
	:global(input, select, textarea){
		border-radius: 8px;
	}
	footer{
		background-color: #eee;
		text-align: right;
	}
	a{
		color: #2272ff;	
		margin-right: 12px;	
		font-size: xx-small;
	}

</style>