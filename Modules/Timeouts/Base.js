module.exports = class Base {
	constructor (listener, after) {
		this.listener = listener;
		this.after = after;
		this.unreffed = false;
		/**
		 * Maximum value of a timer, minus 1
		 * Also known as 2^31 - 1
		 * @type {Number}
		 */
		this.MAX = 2147483647;
		this.timeout = null;
	}
};