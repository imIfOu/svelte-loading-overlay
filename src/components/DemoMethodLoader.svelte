<script>
	import { show } from '$lib';
	import componentShape from '$lib/shape/index.js';
	import { onMount } from 'svelte';

	let shapes = Object.keys(componentShape);
	let container;
	let active = true;
	let cancellable = true;
	let lockScroll = false;
	let fullScreen = false;
	let selectShape = shapes[0];

	let loader;
	let isMount;

	onMount(() => {
		isMount = true;
	});

	$: {
		if (isMount && active) {
			loader = show({
				lockScroll,
				fullScreen,
				cancellable,
				container,
				component: selectShape,
				color: 'blue'
			});
		} else if (loader) {
			loader.hide();
		}
	}
</script>

<div>
	<form>
		<label>Active : <input type="checkbox" bind:checked={active} /></label>
		<label
			>Cancellable : <input type="checkbox" bind:checked={cancellable} disabled={active} /></label
		>
		<label
			>Lock scroll : <input type="checkbox" bind:checked={lockScroll} disabled={active} /></label
		>
		<label
			>Full screen : <input type="checkbox" bind:checked={fullScreen} disabled={active} /></label
		>
		<label
			>Shape :
			<select bind:value={selectShape} disabled={active}>
				{#each shapes as shape}
					<option value={shape}>
						{shape}
					</option>
				{/each}
			</select>
		</label>
	</form>

	<div bind:this={container} class="container">
		<h3>Lorem Ipsum</h3>
		<p>
			Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
		</p>
	</div>

	<pre>
<code>
&lt;script&gt;
  import &#123; show &#125; from 'svelte-loading-overlay';

  let loader = show(&#123;
    container: {container},
    lockScroll: {lockScroll},
    fullScreen: {fullScreen},
    cancellable: {cancellable},
    component: '{selectShape}',
    color: 'blue'
  &#125;);

  loader.hide()

&lt;/script&gt;

&lt;div bind:this=&#123;container&#125;&gt;
  &lt;h3>Lorem Ipsum&lt;/h3&gt;
  &lt;p&gt;Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...&lt;/p&gt;
&lt;/div&gt;
</code>
</pre>
</div>

<style>
	form label {
		display: block;
	}
	.container {
		height: 200px;
		width: 400px;
		border: #ff4f00 solid;
		overflow: scroll;
	}

	.container p,
	h3 {
		text-align: center;
	}

	pre {
		border: #595555 solid;
	}
</style>
