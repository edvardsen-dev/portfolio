<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import NavBar from '$lib/components/layout/nav-bar/index.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { setSwMode } from '$lib/context/sw-mode-context.svelte';

	let { data, children } = $props();

	setSwMode(data.swMode ?? false);

	onMount(() => {
		if (!dev) {
			console.clear();
			console.log(
				'%c Understand this code, you do. Debug you must, young Padawan - Master Yoda',
				'color: #75934E'
			);
		}
	});
</script>

<svelte:head>
	<title>Joakim Edvardsen</title>
	<!--FavIcon  -->
	<link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />

	<meta
		name="description"
		content="Joakim Edvardsen - Experienced Full-Stack Developer specializing in web application using modern JavaScript frameworks."
	/>
	<meta
		name="keywords"
		content="Front-End Developer, Full-Stack Developer, UX Designer, Web Developer, Responsive Design, Joakim Edvardsen"
	/>

	<meta property="og:title" content="Joakim Edvardsen" />
	<meta
		property="og:description"
		content="Experienced developer specializing in web application using modern JavaScript frameworks."
	/>
	<meta property="og:url" content="https://www.edvardsen.dev" />
	<meta property="og:type" content="website" />

	<meta name="twitter:title" content="Joakim Edvardsenr" />
	<meta
		name="twitter:description"
		content="Experienced developer specializing in web application using modern JavaScript frameworks."
	/>

	<meta name="author" content="Joakim Edvardsen" />

	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<ModeWatcher />
<NavBar />
<div class="mb-[100vh] bg-background shadow">
	{@render children()}
</div>
<Footer />
