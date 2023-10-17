import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const darkMode = writable(false);

if (browser) {
	console.log('runned');

	const mode =
		Boolean(localStorage.getItem('darkMode')) ||
		window.matchMedia('(prefers-color-scheme: dark)').matches;

	darkMode.set(mode);
}

darkMode.subscribe((value) => {
	if (browser) {
		localStorage.setItem('darkMode', value ? '1' : '');
	}
});
