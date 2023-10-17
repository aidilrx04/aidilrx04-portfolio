<script lang="ts">
	import { db } from '$lib/firebase';
	import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';

	let name = '';
	let email = '';
	let message = '';

	let isSendingMessage = false;

	let isMessageSent = false;
	let errorMessage: string | undefined;

	const contactsRef = collection(db, 'contacts');

	const handleContactSubmit = async () => {
		isSendingMessage = true;
		errorMessage = undefined;
		isMessageSent = false;

		const msgRef = doc(contactsRef);

		// upload doc
		setDoc(msgRef, {
			name,
			email,
			message,
			createdAt: serverTimestamp()
		})
			.then(() => {
				isMessageSent = true;
				isSendingMessage = false;
				clearInputs();
			})
			.catch((err) => {
				isMessageSent = false;
				errorMessage = err?.message || 'Unknown error';
				isSendingMessage = false;
			});
	};

	const clearInputs = () => {
		name = '';
		email = '';
		message = '';
	};
</script>

<form class="w-full md:w-[400px] max-w-full mx-auto" on:submit|preventDefault={handleContactSubmit}>
	{#if isMessageSent}
		<div class="mb-8 bg-teal-100 border-2 border-teal-900 rounded-md px-4 py-3">
			<span class="text-teal-900">Your message has been sent!</span>
		</div>
	{:else if errorMessage !== undefined}
		<div class="mb-8 bg-rose-100 border-2 border-rose-900 rounded-md px-4 py-3">
			<span class="block text-red-900">Oops! Error occured:</span>
			<ul class="list-disc pl-9 marker:text-rose-900 mb-2">
				<li>
					<span class="text-red-900">{errorMessage}</span>
				</li>
			</ul>
			<span class="block text-red-900">Please try again.</span>
		</div>
	{/if}
	<div class="relative z-0 mb-8">
		<input
			bind:value={name}
			type="text"
			id="name"
			class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
			placeholder=" "
			required
		/>
		<label
			for="name"
			class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
		>
			Name
		</label>
	</div>

	<div class="relative z-0 mb-8">
		<input
			bind:value={email}
			type="email"
			id="email"
			class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
			placeholder=" "
			required
		/>
		<label
			for="email"
			class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
		>
			Email
		</label>
	</div>

	<div class="relative z-0 mb-8">
		<textarea
			bind:value={message}
			id="message"
			class="block min-h-[100px] py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
			placeholder=" "
			required
		/>
		<label
			for="message"
			class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
		>
			Message
		</label>
	</div>

	<div class="mb-8">
		<button
			disabled={isSendingMessage}
			type="submit"
			class="flex items-center justify-center w-full px-4 py-4 font-semibold text-slate-50 bg-blue-600 disabled:bg-blue-800 disabled:text-slate-300 hover:bg-blue-500 active:bg-blue-700"
		>
			{#if isSendingMessage}
				<i class="ph-bold ph-spinner animate-spin text-lg mr-2 inline-block" />
			{/if}
			<span class="inline-block">Send</span>
		</button>
	</div>
</form>
