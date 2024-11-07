<script>
	import Button from '../ui/button/button.svelte';
	import Width from '../utils/width.svelte';
</script>

<Width>
	<header class="grid min-h-screen content-center md:flex md:items-center md:justify-between">
		<div class="mb-8">
			<h1 class="mb-8 flex flex-col uppercase">
				Hi 👋, I'm
				<span class="text-4xl font-extrabold md:text-6xl">Joakim<br />Edvardsen</span>
			</h1>
			<h2 class="mb-4 font-bold uppercase text-primary">Full stack software engineer</h2>
			<p class="mb-8">Computer engineer student at NTNU Trondheim, Norway.</p>
			<div>
				<Button>Take contact</Button>
				<Button variant="outline">Check out GitHub</Button>
			</div>
		</div>
		<img
			src="/img/profile_pictures/profile_pic_circles.png"
			alt="Joakim Edvardsen"
			class="w-[150px] md:w-[200px] lg:w-[300px]"
		/>
	</header>
</Width>
