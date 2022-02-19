# Svelte loading overlay

Simple svelte component to display custom loading screen.

## Documentation

For more info see the documentation : https://github.com/imIfOu/svelte-loading-overlay/wiki

## Getting Started

Install dependency : `npm i svelte-loading-overlay`

You can manipulate the library in two ways :

### Component

```svelte
<script>
	import Loader from 'svelte-loading-overlay/Loader.svelte';

	let container;
	let active = true;
	let cancellable = true;
	let lockScroll = false;
	let fullScreen = false;
	let selectShape = 'RotateSquare';
</script>

<div bind:this={container}>
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
```

### Methods

```javascript
import { show } from 'svelte-loading-overlay';

const loader = show({
	cancellable: true,
	component: 'RotateSquare',
	color: 'blue'
});

new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
	}, 1000);
}).finally(() => loader.hide());
```
