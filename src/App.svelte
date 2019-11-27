<script>

	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte';

	import { crypter, decrypter } from './crypter';

	let areas = ['', ''],
		error = undefined,
		encrypt = true;

	async function doWork() {
		if (encrypt) {
			crypter(areas[0])
				.then(v => {
					areas[1] = v;
					error = undefined;
				})
				.catch(err => error = err)
		} else {
			decrypter(areas[1])
				.then(v => {
					areas[0] = v;
					error = undefined;
				})
				.catch(err => error = err)
		}
	}

	async function switched() {
		encrypt = !encrypt;
	}

</script>

<Navbar />

{#if error}

	<div class="section has-text-centered">
		<article class="message is-danger">
			<div class="message-header">
				<p>Error</p>
			</div>
			<div class="message-body">
				{error}
			</div>
		</article>
	</div>

{/if}

<div class="container has-text-centered section">
	<div class="columns {encrypt ? '' : 'switch-columns'}">
		<div class="column">
			<label for="input">Encrypted</label>

			<textarea 
				on:keyup={doWork}
				bind:value={areas[0]}
				class="textarea" 
				name="output" 
				cols="30" 
				rows="10"
				readonly={!encrypt}
			></textarea>

		</div>
		<div class="column is-2 vcentered">
			<button class="button is-rounded is-button" on:click={switched}>
				<span>Switch</span>
				<span><i class="fas fa-random"></i></span>				
			</button>
		</div>
		<div class="column">
			<label for="output">Decrypted</label>

			<textarea 
				on:keyup={doWork}
				bind:value={areas[1]}
				class="textarea" 
				name="output" 
				cols="30" 
				rows="10"
				readonly={encrypt}
			></textarea>

		</div>
	</div>
</div>

<Footer />

<style>
	.vcentered {
		align-self: center !important;
	}
	label {
		font-weight: bold;
	}
	span {
		padding: 5px;
	}
</style>