<script lang="ts">
	import { darkMode } from '$lib/color-scheme';
	import '../app.css';

	let darkEl: HTMLBodyElement;

	$: if (darkEl) darkEl.classList.toggle('dark', $darkMode);

	const initDarkMode = (el: HTMLDivElement) => {};

	const balls = (el: HTMLBodyElement) => {
		console.log('balls');
		darkEl = el;
	};
</script>

<svelte:body use:balls />

<slot><!-- optional fallback --></slot>

<style>
	:global(body) {
		@apply bg-slate-200 text-slate-800;
	}
	:global(body.dark) {
		/* @apply bg-gradient-to-r from-slate-800 to-slate-900; */
		@apply bg-slate-900 text-slate-50;
	}
</style>
