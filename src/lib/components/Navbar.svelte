<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Section from '$lib/components/Section.svelte';

	let shouldSticky = false;
	let el: HTMLElement;
	let box: DOMRect;

	const responsiveNav = (e: HTMLElement) => {
		// get
		el = e;

		box = el.getBoundingClientRect();
	};

	const watchScroll = () => {
		const scroll = document.documentElement.scrollTop || document.body.scrollTop;

		if (scroll > box.bottom) {
			shouldSticky = true;
		} else {
			shouldSticky = false;
		}
	};

	$: console.log(shouldSticky);
</script>

<svelte:window on:scroll={watchScroll} />

<nav
	use:responsiveNav
	class="bg-slate-800 mx-auto my-4 mb-12 justify-between items-center px-9 transition-all z-50 sticky top-0 left-0
	{shouldSticky ? 'w-full' : 'container lg:max-w-screen-lg '}
	flex flex-col pt-4 sm:pt-0 sm:flex-row
	"
>
	<a href="/" class="brand">
		<h1
			class="uppercase bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600 text-transparent font-bold text-4xl"
		>
			Aidil.dev
		</h1>
	</a>
	<ul class="flex gap-0">
		<li>
			<a class="nav-item" href="/">Home</a>
		</li>
		<li>
			<a href="#about" class="nav-item">About</a>
		</li>
		<li>
			<a href="#porfolio" class="nav-item">Portfolio</a>
		</li>
	</ul>
</nav>

<style>
	.nav-item {
		@apply block px-4 py-4 uppercase text-lg tracking-wider transition-all;
	}

	.nav-item:hover {
		@apply bg-slate-700;
	}
</style>
