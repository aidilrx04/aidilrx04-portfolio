<script lang="ts">
	import ThemeToggler from './ThemeToggler.svelte';

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
</script>

<svelte:window on:scroll={watchScroll} />

<nav
	use:responsiveNav
	class="bg-slate-50 dark:bg-slate-800 mx-auto my-4 mb-12 justify-between items-center px-9 z-50 sticky top-0 left-0
	{shouldSticky ? 'w-full dark:shadow-md dark:shadow-slate-900' : 'container lg:max-w-screen-lg '}
	flex relative
	"
>
	<a href="/" class="brand">
		<h1
			class="uppercase bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600 text-transparent font-bold text-4xl"
		>
			Aidil.dev
		</h1>
	</a>
	<div class="bg-inherit flex gap-4 flex-row-reverse md:flex-row">
		<div class="dropdown bg-inherit group">
			<button
				class="peer md:hidden w-full px-3 py-1 text-slate-600 border-2 border-slate-400 dark:border-slate-700 rounded-lg my-4 flex items-center justify-center
						active:text-blue-500 active:border-blue-500 focus:text-blue-500 focus:border-blue-500 focus-within:text-blue-500 focus-within:border-blue-500
						group-active:text-blue-500 group-active:border-blue-500 group-focus:text-blue-500 group-focus:border-blue-500 group-focus-within:text-blue-500 group-focus-within:border-blue-500
				"
			>
				<i class="ph ph-list text-3xl text-inherit" />
			</button>
			<!-- TODO: fix the navbar transition when dropdown is open -->
			<div
				class="max-h-0 h-auto md:max-h-full dark:shadow-md shadow-slate-900 md:shadow-none md:static md:block hidden dropdown-content absolute bg-inherit w-full left-0 top-full
				peer-active:block
				peer-focus:block
				peer-focus-within:block
				group-focus-within:block
				group-focus:block
				group-active:block
				group-focus-within:max-h-screen
				group-focus:max-h-screen
				group-active:max-h-screen
				peer-active:max-h-screen
				peer-focus:max-h-screen
				peer-focus-within:max-h-screen"
			>
				<ul class="md:flex md:justify-end gap-0 flex-wrap justify-center">
					<li>
						<a class="nav-item" href="/">Home</a>
					</li>
					<li>
						<a href="#about" class="nav-item">About</a>
					</li>
					<li>
						<a href="#porfolio" class="nav-item">Portfolio</a>
					</li>
					<li>
						<a href="#contact" class="nav-item">Contact</a>
					</li>
				</ul>
			</div>
		</div>
		<ThemeToggler />
	</div>
</nav>

<style lang="postcss">
	.nav-item {
		@apply block py-4 uppercase text-lg tracking-wider px-9 text-slate-900;
	}
	.nav-item:hover {
		@apply bg-teal-200;
	}

	@media screen(md) {
		.nav-item {
			@apply px-4;
		}
	}

	:global(.dark) .nav-item {
		@apply text-slate-50;
	}

	:global(.dark) .nav-item:hover {
		@apply bg-slate-700;
	}
</style>
