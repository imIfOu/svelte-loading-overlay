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

## Props

| name | description | type | default |
|:----:|:-----------:|:----:|:-------:|
| component | Type of loader component | [see](https://github.com/imIfOu/svelte-loading-overlay#loader-component-values) | `RotateSquare` | 
| container | Html element that will contain the loader | `HtlmElement` | `undefined` | 
| active | Activate loader overlay | `Boolean` | `false` | 
| fullScreen | Loader overlay is display on the full screen | `Boolean` | `false` | 
| lockScroll | Disable lock scroll on container if active | `Boolean` | `true` | 
| cancellable | Disable loader overlay by key code | `Boolean` | `false` | 
| cancelKeyCode | Key code use to trigger the cancellation | `number` | `27` | 
| zIndex | Loader overlay zIndex | `number` | `9999` | 
| background | Background color | `color` | `#ffffff` | 
| opacity | Background opacity | `number` | `0.6` | 
| delay | Transition delay | `number` | `0` | 
| duration | Transition duration | `number` | `300` | 

ℹ️ Other props will be passed directly at the loader component

#### Loader Component values

| name |
|:----:|
| RotateSquare |
| RotateSquare2 |
| CubeShadow |
| Stretch |
| Circle |
| Dot |

## Slots

| name | description |
|:----:|:-----------:|
| top | Loader top part | 
| bottom | Loader bottom part | 
| default | Loader component slot for custom loader | 
