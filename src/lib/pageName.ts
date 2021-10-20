const getPageName = (path: string): string =>
	path !== '/'
		? path
				.substring(1)
				.split('/')
				.map((str) => str.charAt(0).toUpperCase() + str.substring(1))
				.slice(0,2)
				.join(' - ')
		: 'Home';

export default getPageName;
