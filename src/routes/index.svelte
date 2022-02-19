<script>
	import DemoComponentLoader from '../components/DemoComponentLoader.svelte';
	import DemoMethodLoader from '../components/DemoMethodLoader.svelte';
</script>

<h1>Welcome to svelte loading overlay</h1>

<div class="parent-grid">
	<DemoComponentLoader />
	<DemoMethodLoader />
</div>

<style>
	.parent-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 20px;
		grid-row-gap: 0px;
	}
</style>
