import LoaderComponent from "../component/Loader.svelte";

class Loader {

    constructor(options = {}) {
        const mergedOptions = Object.assign({}, defaultOptions, options);

        if (!mergedOptions.container) {
            mergedOptions.container = document.body;
            mergedOptions.fullScreen = true;
        }

        this._component= new LoaderComponent({
            target: mergedOptions.container,
            props: mergedOptions,
            intro: true
        })
    }

    hide () {
        this._component.$destroy()
    }
}


let defaultOptions = {
    active: true,
    lockScroll: true,
    fullScreen: true,
    cancellable: false,
    component: 'rotateSquare',
    options: {}
}

export default {
    Loader: LoaderComponent,
    show: (options= {}) => new Loader(options),
    defaultOptions
}