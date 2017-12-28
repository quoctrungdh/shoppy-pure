export const serviceAuth = (function() {

	let user = null;

	let listeners = [];

	const userInfoStorageKey = 'user-info';

	function getUser() {
		let userDataString = localStorage.getItem(userInfoStorageKey);

		let user = userDataString === null || userDataString === undefined
			? null
			: JSON.parse(userDataString);

		return user;
	}

	function setUser(userInfo) {
		user = userInfo;

		if (user) {
			localStorage.setItem(userInfoStorageKey, JSON.stringify(user));
		} else {
			localStorage.removeItem(userInfoStorageKey);
		}

		_notifyListeners();
	}

	function addListerner(cb) {
		listeners = listeners.concat(cb)
	}

	function removeListener(cb) {
		listeners = listeners.filter(item => item !== cb)
	}

	function _notifyListeners() {
		listeners.forEach(l => l())
	}

	return {
		getUser,
		setUser,
		addListerner,
		removeListener
	}
})();
