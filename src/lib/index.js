import Loader from './Loader.svelte';

class LoaderObject {
	constructor(options = {}) {
		const mergedOptions = Object.assign({}, defaultOptions, options);

		if (!mergedOptions.container) {
			mergedOptions.container = document.body;
			mergedOptions.fullScreen = true;
		}

		this._component = new Loader({
			target: mergedOptions.container,
			props: mergedOptions,
			intro: true
		});
	}

	hide() {
		this._component.$destroy();
	}
}

let defaultOptions = {
	active: true,
	lockScroll: true,
	fullScreen: true,
	cancellable: false,
	component: 'rotateSquare',
	container: undefined
};

export function show(options = {}) {
	return new LoaderObject(options);
}

export default { Loader, show, defaultOptions };
