<script lang="ts">
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
	<div class="dropdown bg-inherit group">
		<button
			class="peer md:hidden w-full px-3 py-1 border-2 border-slate-700 rounded-lg my-4 flex items-center justify-center"
		>
			<i class="ph ph-list text-3xl text-slate-50" />
		</button>
		<!-- TODO: fix the navbar transition when dropdown is open -->
		<div
			class="max-h-0 h-auto md:max-h-full md:static md:block hidden dropdown-content absolute bg-inherit w-full left-0 top-full
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
            peer-focus-within:max-h-screen
            transition-all duration-1000"
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
</nav>

<style lang="postcss">
	.nav-item {
		@apply block  py-4 uppercase text-lg tracking-wider transition-all px-9;
	}

	@media screen(md) {
		.nav-item {
			@apply px-4;
		}
	}

	.nav-item:hover {
		@apply bg-slate-700;
	}
</style>
