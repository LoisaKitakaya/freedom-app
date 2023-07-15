<script>
	import * as config from '$lib/config'
	import image1 from '$lib/assets/1.png'
	import image2 from '$lib/assets/2.png'
	import { fade } from 'svelte/transition'
</script>

<svelte:head>
	<title>{config.title} | About</title>
</svelte:head>

<div
	class="flex justify-center items-center"
	out:fade={{ duration: 400 }}
	in:fade={{ delay: 400, duration: 400 }}
>
	<div class="prose m-0 sm:ml-8">
		<p>
			Hello there! I'm {config.title}, a freelance full-stack web developer passionate about
			creating impactful digital experiences. With expertise in Python and JavaScript, I possess the
			skills needed to build dynamic and user-friendly websites.
		</p>
		<p>
			As a versatile developer, I excel in frameworks like Flask, Django, Svelte, and React,
			allowing me to craft powerful web applications. My proficiency in HTML, CSS, and REST/GraphQL
			APIs enables me to design and develop seamless interfaces that engage and delight users.
		</p>
		<p>
			Beyond my professional endeavors, coding is not just a career for me; it's a hobby. I enjoy
			taking on mini-projects, constantly pushing myself to learn and explore new technologies.
			System design and web design are among my strengths, ensuring that the solutions I deliver are
			both visually appealing and architecturally robust.
		</p>
		<p>
			Whether you're looking to enhance your online presence or bring your innovative ideas to life,
			I'm eager to collaborate and transform your vision into reality. Let's embark on this coding
			journey together and create something remarkable.
		</p>
	</div>
	<div class="flex flex-col justify-center items-center gap-4">
		<img class="w-2/4 rounded" src={image1} alt="me" loading="lazy" />
		<img class="w-1/2 rounded" src={image2} alt="me" loading="lazy" />
	</div>
</div>
