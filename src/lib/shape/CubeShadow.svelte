<script>
	import { convertObjectToCss } from '../utils/cssUtils.js';

	export let color = '#ff4f00';
	export let width = '64px';
	export let height = '64px';
	export let duration = '1.8s';

	$: shapeStyle = {
		backgroundColor: color,
		width: width,
		height: height,
		animationDuration: duration
	};

	$: cssShapeStyle = convertObjectToCss(shapeStyle);
</script>

<div style={cssShapeStyle} class="spinner spinner--cube-shadow" />

<style>
	.spinner {
		animation: cube-shadow-spinner 1.8s cubic-bezier(0.75, 0, 0.5, 1) infinite;
	}

	@keyframes cube-shadow-spinner {
		50% {
			border-radius: 50%;
			transform: scale(0.5) rotate(360deg);
		}
		100% {
			transform: scale(1) rotate(720deg);
		}
	}
</style>
