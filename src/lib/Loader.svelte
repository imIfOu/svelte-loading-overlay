<script>
	import { createWatcher } from './utils/watcher';
	import { convertObjectToCss } from './utils/cssUtils';
	import { fade } from 'svelte/transition';
	import { onDestroy, createEventDispatcher } from 'svelte';
	import shapes from './shape';

	// HtmlElement container
	export let container;

	export let active = false;
	export let fullScreen = false;
	export let lockScroll = true;

	// Cancellation
	export let cancellable = false;
	export let cancelKeyCode = 27;

	// Overlay style
	export let zIndex = 9999;

	// Background style
	export let background = '#ffffff';
	export let opacity = 0.6;

	// Transition
	export let delay = 0;
	export let duration = 300;

	// Type of loader component
	export let component = 'RotateSquare';

	const dispatch = createEventDispatcher();
	const lockScrollWatcher = createWatcher(onLockScrollChange, lockScroll);
	const elementWatcher = createWatcher(onElementChange, undefined);

	$: display = active && (container || fullScreen);
	$: element = fullScreen ? document.body : container;
	$: elementWatcher.listen(element);
	$: lockScrollWatcher.listen(lockScroll);

	onDestroy(() => {
		disabledLoader(element, lockScroll);
	});

	function onElementChange(oldElementValue, newElementValue) {
		disabledLoader(oldElementValue, lockScroll);
		enabledLoader(newElementValue, lockScroll);
	}

	function onLockScrollChange(oldLockScrollValue, newLockScrollValue) {
		disabledLockScroll(element, oldLockScrollValue);
		enabledLockScroll(element, newLockScrollValue);
	}

	function enabledLoader(element, lockScroll) {
		if (element) {
			element.classList.add('svl-container');
			enabledLockScroll(element, lockScroll);
		}
	}

	function disabledLoader(element, lockScroll) {
		if (element) {
			element.classList.remove('svl-container');
			disabledLockScroll(element, lockScroll);
		}
	}

	function enabledLockScroll(element, lockScroll) {
		if (element && lockScroll) {
			element.classList.add('svl-lockScroll');
		}
	}

	function disabledLockScroll(element, lockScroll) {
		if (element && lockScroll) {
			element.classList.remove('svl-lockScroll');
		}
	}

	function handleKeydown(event) {
		if (cancellable && event.keyCode === cancelKeyCode) {
			dispatch('cancel', event);
			active = false;
		}
	}

	$: overlayStyle = {
		position: fullScreen ? 'fixed' : 'absolute',
		zIndex: zIndex
	};

	$: backgroundStyle = {
		background: background,
		opacity: opacity
	};

	$: cssOverlayStyle = convertObjectToCss(overlayStyle);
	$: cssBackgroundStyle = convertObjectToCss(backgroundStyle);
</script>

<svelte:window on:keydown={handleKeydown} />

{#if display}
	<div
		class="svl-overlay"
		style={cssOverlayStyle}
		transition:fade={{ delay, duration }}
		on:introstart={() => enabledLoader(element, lockScroll)}
		on:outroend={() => disabledLoader(element, lockScroll)}
	>
		<div class="svl-background" style={cssBackgroundStyle} />
		<div class="svl-content">
			<slot name="top" />
			<slot><svelte:component this={shapes[component]} {...$$restProps} /></slot>
			<slot name="bottom" />
		</div>
	</div>
{/if}

<style>
	:global(.svl-lockScroll) {
		overflow: hidden !important;
	}

	:global(.svl-container) {
		position: relative !important;
	}

	.svl-overlay {
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
	}

	.svl-overlay .svl-content {
		position: relative;
	}

	.svl-overlay .svl-background {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
	}
</style>
