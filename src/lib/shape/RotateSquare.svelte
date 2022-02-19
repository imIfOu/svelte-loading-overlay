<script>
	import { convertObjectToCss } from '../utils/cssUtils.js';

	export let color = '#ff4f00';
	export let width = '64px';
	export let height = '64px';
	export let duration = '1.2s';

	$: shapeStyle = {
		backgroundColor: color,
		width: width,
		height: height,
		animationDuration: duration
	};

	$: cssShapeStyle = convertObjectToCss(shapeStyle);
</script>

<div style={cssShapeStyle} class="spinner spinner--rotate-square" />

<style>
	.spinner {
		display: inline-block;
		animation: rotateplane 1.2s infinite ease-in-out;
	}

	@keyframes rotateplane {
		0% {
			transform: perspective(120px) rotateX(0deg) rotateY(0deg);
		}
		50% {
			transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
		}
		100% {
			transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
		}
	}
</style>
