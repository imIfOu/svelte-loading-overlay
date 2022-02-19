/**
 * @param {function} onChange Function call when old value is different of new value
 * @param defaultValue Default value
 */
export function createWatcher(onChange, defaultValue) {
	return new Watcher(onChange, defaultValue);
}

class Watcher {
	/**
	 * @param {function} onChange Function call when old value is different of new value
	 * @param defaultValue Default value
	 */
	constructor(onChange, defaultValue) {
		this._onChange = onChange;
		this._currentValue = defaultValue;
	}

	/**
	 * @param newValue New value
	 */
	listen(newValue) {
		if (this._currentValue !== newValue) {
			this._onChange(this._currentValue, newValue);
			this._currentValue = newValue;
		}
	}
}
