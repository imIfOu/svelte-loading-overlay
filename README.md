# Svelte loading overlay

Simple svelte component to display custom loading screen.

## Documentation
For more info see the documentation : https://github.com/imIfOu/svelte-loading-overlay/wiki

## Getting Started

Install dependency : `npm i svelte-loading-overlay`

You can manipulate the library in two ways :

### Component
```svelte
import { Loader } from 'svelte-loading-overlay';

<script>
let container;
</script>

<Loader active="true" container={container}></Loader>
<div this={container} style="height: 200px; wight: 400px;border:solid black">
   <p>I can display svelte component loader</p>
   <p>Into specific container</p>
   <p>or</p>
   <p>in full screen</p>
</div>
```

### Methods
```javascript
import { show } from 'svelte-loading-overlay';

const loader = show();
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000)
}).finally(() => loader.hide());
```