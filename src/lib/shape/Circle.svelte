<script>
	import { convertObjectToCss } from '../utils/cssUtils';

	export let color = '#ff4f00';
	export let backgroundColor = 'rgba(112,112,112,0.51)';
	export let stroke = '5px';
	export let width = '64px';
	export let height = '64px';
	export let duration = '0.8s';

	$: shapeStyle = {
		border: stroke + ' solid ' + backgroundColor,
		borderTopColor: color,
		width: width,
		height: height,
		animationDuration: duration
	};

	$: cssShapeStyle = convertObjectToCss(shapeStyle);
</script>

<div style={cssShapeStyle} class="spinner spinner--circle-2" />

<style>
	.spinner {
		box-sizing: border-box;
		border-radius: 100%;
		border: 10px solid rgba(255, 255, 255, 0.2);
		animation: circle-2-spin 0.8s infinite linear;
	}

	@keyframes circle-2-spin {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
