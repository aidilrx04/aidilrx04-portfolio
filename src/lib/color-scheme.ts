import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const darkMode = writable(false);

if (browser) {
	console.log('runned');

	const mode = localStorage.getItem('darkMode')
		? localStorage.getItem('darkMode') === 'dark'
			? true
			: false
		: window.matchMedia('(prefers-color-scheme: dark)').matches
		? true
		: false;

	darkMode.set(mode);
}

darkMode.subscribe((value) => {
	if (browser) {
		localStorage.setItem('darkMode', value ? 'dark' : 'light');
	}
});
