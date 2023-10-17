<script>
	import { browser } from '$app/environment';
	import '../app.css';

	export let darkMode = false;

	$: if (browser) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			darkMode = true;
		}
	}

	$: if (browser) document.body.classList.toggle('dark', darkMode);
</script>

<slot><!-- optional fallback --></slot>

<style>
	:global(body.dark) {
		/* @apply bg-gradient-to-r from-slate-800 to-slate-900; */
		@apply bg-slate-900 text-slate-50;
	}

	:global(body) {
		@apply bg-slate-200 text-slate-800;
	}
</style>
