<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Section from '$lib/components/Section.svelte';

	const year = new Date().getFullYear();
</script>

<Navbar />

<main class="container lg:max-w-screen-lg mx-auto">
	<Section id="name" class="flex items-center justify-between flex-col-reverse sm:flex-row">
		<div class="left text-center sm:text-left">
			<div class="title uppercase mb-8 text-2xl tracking-widest text-slate-700 dark:text-slate-50">
				I AM MUHAMAD AIDIL
			</div>
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
				class="title uppercase mb-8 text-2xl tracking-wider text-blue-600 dark:text-blue-400 font-bold text-center sm:text-left"
			>
				About Me
			</div>
			<h2 class="text-5xl font-extrabold mb-8 text-teal-500 dark:text-slate-50">
				I am a Web Developer
			</h2>
			<p class="text-base text-slate-700 dark:text-slate-300">
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
		<h2
			class="title uppercase text-center text-2xl tracking-wider text-blue-600 dark:text-blue-400 font-bold mb-8"
		>
			Porfolio
		</h2>
		<div
			class="projects grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-around gap-5 mx-auto"
		>
			<div class="project rounded-md overflow-hidden relative group">
				<a href="https://cari-kata.aidil.dev" target="_blank">
					<img src="/images/cari-kata.png" class="h-full w-full object-cover" alt="Cari Kata" />
					<div
						class="image-overlay absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 ease-out"
					/>
					<div class="caption absolute z-20 left-8 bottom-8 right-8">
						<div class="title w-full relative overflow-hidden">
							<h4
								class="text-slate-50 delay-[750ms] opacity-0 duration-100 group-hover:opacity-100 text-2xl transition-all font-semibold
                                "
							>
								Cari Kata
							</h4>
						</div>
						<div class="subtitle w-fit relative overflow-hidden">
							<span
								class="text-slate-100 text-sm delay-700 opacity-0 duration-100 group-hover:opacity-100 transition-all"
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
								class="text-slate-50 delay-[750ms] opacity-0 duration-100 group-hover:opacity-100 text-2xl transition-all font-semibold
                                "
							>
								Ladle
							</h4>
						</div>
						<div class="subtitle w-fit relative overflow-hidden">
							<span
								class="text-slate-100 text-sm delay-700 opacity-0 duration-100 group-hover:opacity-100 transition-all"
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
								class="text-slate-50 delay-[750ms] opacity-0 duration-100 group-hover:opacity-100 text-2xl transition-all font-semibold
                                "
							>
								duitGone
							</h4>
						</div>
						<div class="subtitle w-fit relative overflow-hidden">
							<span
								class="text-slate-100 text-sm delay-700 opacity-0 duration-100 group-hover:opacity-100 transition-all"
								>A simple finance manager</span
							>
						</div>
					</div>
				</a>
			</div>
		</div>
	</Section>

	<Section id="contact" class="flex justify-between flex-col md:flex-row">
		<div class="col w-full md:w-[50%] pr-0 md:pr-5 text-center md:text-left mb-8 md:mb-0">
			<div
				class="title uppercase text-2xl tracking-wider text-blue-600 dark:text-blue-400 font-bold mb-8 text-center md:text-left"
			>
				Contact Me
			</div>
			<h2 class="text-5xl font-extrabold text-teal-400 mb-8">Realize your dream with me</h2>
			<div class="icons text-3xl flex items-center md:justify-start gap-5 justify-center">
				<a href="https://facebook.com/muhd.aidils.7" target="_blank">
					<i class="ph-duotone ph-facebook-logo text-blue-500" />
				</a>
				<a href="https://github.com/aidilrx04" target="_blank">
					<i class="ph-duotone ph-github-logo" />
				</a>
				<a href="https://www.linkedin.com/in/aidilrx04" target="_blank">
					<i class="ph-duotone ph-linkedin-logo text-white bg-blue-500 rounded-sm" />
				</a>
			</div>
		</div>
		<div class="col pl-0 md:pl-5 md:w-4/5">
			<ContactForm />
		</div>
	</Section>
</main>

<Section class="container lg:max-w-screen-lg mx-auto mb-0">
	<footer>
		Copyright &copy; <span>aidil.dev</span>
		{year}
	</footer>
</Section>

<style lang="postcss">
	:global(html) {
		scroll-behavior: smooth;
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
