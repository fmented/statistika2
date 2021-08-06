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
	<Input label="x" inp="37, 29, 32, 35, 25, 33, 31, 37, 28, 35, 31, 33, 28, 38, 30"/>
	<Input label="y" inp="78, 58, 69, 72, 51, 71, 73, 79, 56, 74, 66, 70, 56, 81, 70"/>
	<Mutator val="{0}"/>
	<Statement ha="Ada hubungan signifikan" ho="Tidak ada hubungan signifikan"/>
	<Table/>
	<Correlation/>
	<T/>
	<Regression/>
	<Chart/>
</main>

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
</style>