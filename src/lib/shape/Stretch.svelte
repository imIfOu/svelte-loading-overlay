<script>
	import { convertObjectToCss } from '../utils/cssUtils.js';

	export let color = '#ff4f00';
	export let width = '64px';
	export let height = '64px';
	export let duration = '1.2s';

	$: shapeStyle = {
		width: width,
		height: height
	};

	$: rectStyle = {
		backgroundColor: color,
		animationDuration: duration
	};

	$: cssShapeStyle = convertObjectToCss(shapeStyle);
	$: cssRectStyle = convertObjectToCss(rectStyle);
</script>

<div style={cssShapeStyle} class="spinner spinner--stretch">
	<div style={cssRectStyle} class="rect rect-1" />
	<div style={cssRectStyle} class="rect rect-2" />
	<div style={cssRectStyle} class="rect rect-3" />
	<div style={cssRectStyle} class="rect rect-4" />
	<div style={cssRectStyle} class="rect rect-5" />
</div>

<style>
	.spinner {
		display: inline-block;
		text-align: center;
		font-size: 10px;
	}

	.rect {
		animation: sk-stretchdelay 1.2s ease-in-out infinite;
	}

	.spinner * {
		line-height: 0;
		box-sizing: border-box;
	}

	.spinner > div {
		height: 100%;
		width: 10%;
		display: inline-block;
	}

	.spinner .rect-2 {
		animation-delay: -1.1s;
	}

	.spinner .rect-3 {
		animation-delay: -1s;
	}

	.spinner .rect-4 {
		animation-delay: -0.9s;
	}

	.spinner .rect-5 {
		animation-delay: -0.8s;
	}

	@keyframes sk-stretchdelay {
		0%,
		40%,
		100% {
			transform: scaleY(0.4);
		}

		20% {
			transform: scaleY(1);
		}
	}
</style>
