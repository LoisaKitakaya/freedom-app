<script>
	import * as config from '$lib/config'
</script>

<svelte:head>
	<title>{config.title} | About Me</title>
</svelte:head>

<section class="px-8 sm:px-0 w-full main-section">
	<div class="flex flex-col-reverse sm:flex-row items-center justify-center w-fit m-auto pt-8 sm:pt-16">
		<div class="flex flex-col justify-center items-center w-fit gap-4 about-img p-0 m-0">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="https://ik.imagekit.io/vg0ett8n6/Docs/1.png?updatedAt=1692188319610"
				alt="An image of me"
                class="rounded-md"
                loading="lazy"
                />
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img
				src="https://ik.imagekit.io/vg0ett8n6/Docs/78635122.png?updatedAt=1692188316721"
				alt="An image of my avatar"
                class="rounded-md"
                loading="lazy"
			/>
		</div>
		<div class="about-text bg-base-100 px-4">
			<div class="prose m-0 sm:ml-8 text-center sm:text-left mb-4 sm:mb-0">
				<p>
					Hello there! I'm {config.title}, a freelance full-stack web developer passionate about
					creating impactful digital experiences. With expertise in Python and JavaScript, I possess
					the skills needed to build dynamic and user-friendly websites.
				</p>
				<p>
					As a versatile developer, I excel in frameworks like Flask, Django, Svelte, and React,
					allowing me to craft powerful web applications. My proficiency in HTML, CSS, and
					REST/GraphQL APIs enables me to design and develop seamless interfaces that engage and
					delight users.
				</p>
				<p>
					Beyond my professional endeavors, coding is not just a career for me; it's a hobby. I
					enjoy taking on mini-projects, constantly pushing myself to learn and explore new
					technologies. System design and web design are among my strengths, ensuring that the
					solutions I deliver are both visually appealing and architecturally robust.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		height: 100vh;
	}

	.about-img {
		width: 40%;
	}

	img {
		width: 50%;
	}

	@media only screen and (max-width: 600px) {
		.about-img {
            padding-top: 2rem;
			width: 100%;
			padding-bottom: 6rem;
		}

		.about-text {
			padding-left: 1.75rem;
			padding-right: 1.75rem;
		}

		img {
			width: 80%;
		}
	}
</style>
