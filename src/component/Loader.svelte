<script>
    import { convertObjectToCss }  from '../lib/cssUtils'
    import {fade} from 'svelte/transition';
    import {onDestroy, createEventDispatcher} from 'svelte';
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
    export let component = 'circle';

    // Component props
    export let options = {}

    const dispatch = createEventDispatcher()

    onDestroy(() => {
        disabledLoader();
    });

    function enabledLoader() {
        if(container){
            container.classList.add('svl-container');
            if (lockScroll) {
                container.classList.add('svl-lockScroll');
            }
        }
    }

    function disabledLoader() {
        if(container){
            container.classList.remove('svl-container');
            if (lockScroll) {
                container.classList.remove('svl-lockScroll');
            }
        }
    }

    function handleKeydown(event) {
        if(cancellable && event.keyCode === cancelKeyCode){
            dispatch('cancel', event)
            active = false
        }
    }

    $: overlayStyle = {
        position: fullScreen ? 'fixed' : 'absolute',
        zIndex: zIndex
    }

    $: backgroundStyle = {
        background: background,
        opacity: opacity,
    }

    $: cssOverlayStyle = convertObjectToCss(overlayStyle);
    $: cssBackgroundStyle = convertObjectToCss(backgroundStyle);
</script>

<svelte:window on:keydown={handleKeydown}/>

{#if active}
    <div class="svl-overlay" style={cssOverlayStyle}
         transition:fade={{delay, duration}}
         on:introstart="{() => enabledLoader()}"
         on:outroend="{() => disabledLoader()}">
        <div class="svl-background" style={cssBackgroundStyle}></div>
        <div class="svl-content">
            <slot name="top"></slot>
            <slot><svelte:component this={shapes[component]} {...options}/></slot>
            <slot name="bottom"></slot>
        </div>
    </div>
{/if}

<style>
    :global(.svl-lockScroll) {
        overflow: hidden !important;
    }

    :global(.svl-container){
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

    .svl-overlay .svl-content{
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
