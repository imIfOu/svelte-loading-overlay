<script>
	import Loader from '$lib/Loader.svelte';
	import componentShape from '$lib/shape/index.js';

	let shapes = Object.keys(componentShape);
	let container;
	let active = true;
	let cancellable = true;
	let lockScroll = false;
	let fullScreen = false;
	let selectShape = shapes[0];
</script>

<div>
	<form>
		<label>Active : <input type="checkbox" bind:checked={active} /></label>
		<label>Cancellable : <input type="checkbox" bind:checked={cancellable} /></label>
		<label>Lock scroll : <input type="checkbox" bind:checked={lockScroll} /></label>
		<label>Full screen : <input type="checkbox" bind:checked={fullScreen} /></label>
		<label
			>Shape :
			<select bind:value={selectShape}>
				{#each shapes as shape}
					<option value={shape}>
						{shape}
					</option>
				{/each}
			</select>
		</label>
	</form>

	<div bind:this={container} class="container">
		<Loader
			bind:active
			{cancellable}
			{fullScreen}
			{lockScroll}
			{container}
			component={selectShape}
			color="blue"
		/>
		<h3>Lorem Ipsum</h3>
		<p>
			Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
		</p>
	</div>

	<pre>
<code>
&lt;script&gt;
  import Loader from 'svelte-loading-overlay/Loader.svelte';

  let container;
  let active = {active};
  let cancellable = {cancellable};
  let lockScroll = {lockScroll};
  let fullScreen = {fullScreen};
  let selectShape = '{selectShape}';
&lt;/script&gt;

&lt;div bind:this=&#123;container&#125;&gt;
  &lt;Loader bind:active=&#123;active&#125; &#123;cancellable&#125; &#123;fullScreen&#125; &#123;lockScroll&#125; &#123;container&#125; component=&#123;selectShape&#125; color="blue" /&gt;
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
