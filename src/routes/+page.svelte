<script lang="ts">
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
	class="bg-slate-800 mx-auto my-4 mb-12 justify-between items-center px-9 transition-all z-50
	{shouldSticky ? 'w-full sticky top-0 left-0' : 'container lg:max-w-screen-lg '}
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

<main class="container lg:max-w-screen-lg mx-auto">
	<Section id="name" class="flex items-center justify-between flex-col-reverse sm:flex-row">
		<div class="left text-center sm:text-left">
			<div class="title uppercase mb-8 text-2xl tracking-widest">I AM MUHAMAD AIDIL</div>
			<div
				class="job text-7xl mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-600 max-w-fit font-extrabold"
			>
				Web Developer
			</div>

			<a
				href="#contact"
				class="text-white px-6 py-3.5 bg-blue-600 rounded font-semibold transition-all hover:bg-blue-700"
				style="box-shadow: 0 0 20px rgb(37 99 235 / var(--tw-bg-opacity));"
			>
				Contact Me
			</a>
		</div>
		<div class="right mb-8 sm:mb-0 sm:w-[40%] h-full flex items-center justify-center">
			<img src="/images/1.png" alt="Web Development" />
		</div>
	</Section>

	<Section id="about" class="flex items-center justify-between flex-col-reverse sm:flex-row">
		<div class="left pr-4">
			<div
				class="title uppercase mb-8 text-2xl tracking-wider text-blue-400 font-bold text-center sm:text-left"
			>
				About Me
			</div>
			<h2 class="text-5xl font-extrabold mb-8 text-slate-50">I am a Web Developer</h2>
			<p class="text-base text-slate-300">
				I'm a passionate web developer with a strong commitment to creating user-friendly websites
				and applications. With expertise in HTML, CSS, JavaScript, and web frameworks, I excel at
				transforming ideas into elegant digital experiences. My focus on both aesthetics and
				functionality sets me apart, and I'm always eager to take on new web development challenges.
			</p>
		</div>
		<div class="right min-w-[40%] h-full flex items-center justify-center">
			<img src="/images/2.png" alt="Web Dev" class="mb-8 sm:mb-0" />
		</div>
	</Section>

	<!-- <div id="resume"></div> -->
	<Section id="porfolio">
		<h2 class="title uppercase text-center text-2xl tracking-wider text-blue-400 font-bold mb-8">
			Porfolio
		</h2>
		<div class="projects grid grid-cols-2 sm:grid-cols-3 justify-around gap-5 mx-auto">
			<div class="project rounded-md overflow-hidden relative group">
				<a href="https://cari-kata.aidil.dev" target="_blank">
					<img src="/images/cari-kata.png" class="h-full w-full object-cover" alt="Cari Kata" />
					<div
						class="image-overlay absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 ease-out"
					/>
					<div class="caption absolute z-20 left-8 bottom-8 right-8">
						<div class="title w-full relative overflow-hidden">
							<h4
								class="delay-[750ms] opacity-0 duration-100 group-hover:opacity-100 text-2xl transition-all font-semibold
                                "
							>
								Cari Kata
							</h4>
						</div>
						<div class="subtitle w-fit relative overflow-hidden">
							<span
								class="text-sm delay-700 opacity-0 duration-100 group-hover:opacity-100 transition-all"
								>Wordsearch Game</span
							>
						</div>
					</div>
				</a>
			</div>
			<div class="project rounded-md overflow-hidden relative group">
				<a href="https://ladle.vercel.app" target="_blank">
					<img src="/images/ladle.png" class="h-full w-full object-cover" alt="Cari Kata" />
					<div
						class="image-overlay absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 ease-out"
					/>
					<div class="caption absolute z-20 left-8 bottom-8 right-8">
						<div class="title w-full relative overflow-hidden">
							<h4
								class="delay-[750ms] opacity-0 duration-100 group-hover:opacity-100 text-2xl transition-all font-semibold
                                "
							>
								Ladle
							</h4>
						</div>
						<div class="subtitle w-fit relative overflow-hidden">
							<span
								class="text-sm delay-700 opacity-0 duration-100 group-hover:opacity-100 transition-all"
								>Wordle-like Game</span
							>
						</div>
					</div>
				</a>
			</div>
			<div class="project rounded-md overflow-hidden relative group">
				<a href="https://duit-gone.vercel.app" target="_blank">
					<img src="/images/duit-gone.png" class="h-full w-full object-cover" alt="Cari Kata" />
					<div
						class="image-overlay absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 ease-out"
					/>
					<div class="caption absolute z-20 left-8 bottom-8 right-8">
						<div class="title w-full relative overflow-hidden">
							<h4
								class="delay-[750ms] opacity-0 duration-100 group-hover:opacity-100 text-2xl transition-all font-semibold
                                "
							>
								duitGone
							</h4>
						</div>
						<div class="subtitle w-fit relative overflow-hidden">
							<span
								class="text-sm delay-700 opacity-0 duration-100 group-hover:opacity-100 transition-all"
								>A simple finance manager</span
							>
						</div>
					</div>
				</a>
			</div>
		</div>
	</Section>

	<Section id="contact" class="flex justify-between flex-col md:flex-row">
		<div class="col w-full md:w-[50%] pr-5 text-center mb-8 md:mb-0">
			<div
				class="title uppercase text-2xl tracking-wider text-blue-400 font-bold mb-8 text-center md:text-left"
			>
				Contact Us
			</div>
			<h2 class="text-5xl font-extrabold text-teal-400 mb-8">Realize your dream with us</h2>
			<div class="icons text-3xl flex items-center gap-5 justify-center">
				<a href="https://facebook.com/muhd.aidils.7" target="_blank">
					<i class="ph-duotone ph-facebook-logo text-blue-500" />
				</a>
				<a href="https://github.com/aidilrx04" target="_blank">
					<i class="ph-duotone ph-github-logo" />
				</a>
			</div>
		</div>
		<div class="col pl-5 md:w-4/5">
			<form class="w-full md:w-[400px] max-w-full mx-auto">
				<div class="relative z-0 mb-8">
					<input
						type="text"
						id="floating_standard"
						class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
						placeholder=" "
					/>
					<label
						for="floating_standard"
						class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Name
					</label>
				</div>

				<div class="relative z-0 mb-8">
					<textarea
						id="floating_standard"
						class="block min-h-[100px] py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
						placeholder=" "
					/>
					<label
						for="floating_standard"
						class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Message
					</label>
				</div>

				<div class="mb-8">
					<button class="block w-full px-4 py-4 font-semibold bg-blue-600"> Send </button>
				</div>
			</form>
		</div>
	</Section>
</main>

<footer class="container lg:max-w-screen-lg mx-auto px-9 py-5 bg-slate-800">
	Copyright &copy; <span>aidil.dev</span> 2023
</footer>

<style lang="postcss">
	:global(html) {
		scroll-behavior: smooth;
	}
	:global(body) {
		/* @apply bg-gradient-to-r from-slate-800 to-slate-900; */
		@apply bg-slate-900;
	}

	:global(*) {
		color: white;
	}

	.nav-item {
		@apply block px-4 py-4 uppercase text-lg tracking-wider transition-all;
	}

	.nav-item:hover {
		@apply bg-slate-700;
	}

	@keyframes titles {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(-101%);
		}
	}

	.project .title::after,
	.project .subtitle::after {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.project:hover .title::after,
	.project:hover .subtitle::after {
		transform: translateY(101%);
		animation: titles 600ms cubic-bezier(0.45, 0.81, 0.83, 0.18) forwards;
		animation-delay: 0.1s;
		@apply bg-blue-500 bg-gradient-to-r from-blue-400 to-teal-600;
	}
	.project:hover .subtitle::after {
		animation-delay: 0.5s;
	}

	/* section {
		@apply bg-slate-800 mb-8 px-4 py-3;
	} */
</style>
