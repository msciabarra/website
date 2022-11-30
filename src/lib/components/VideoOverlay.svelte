<script>
	import { createEventDispatcher } from 'svelte';
	import closeIcon from '$lib/assets/icons/close-x.png';
	const dispatch = createEventDispatcher();

	function handleClose() {
		dispatch('overlayClose', null);
	}

	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[500]">
	<div
		class="h-fit w-fit flex flex-col items-center bg-white shadow-nuv-box-shadow rounded-[20px] overflow-hidden"
	>
		<button on:click={handleClose} class="self-end mr-[19px]">
			<img src={closeIcon} alt="close" class="h-[40px]" />
		</button>
		{#if innerWidth >= 1280}
			<p>
				<iframe
					class="content-center"
					width="1000"
					height="600"
					src="https://www.youtube.com/embed/pOdhx_vxxPI"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</p>
		{:else if innerWidth >= 768}
			<p>
				<iframe
					class="content-center"
					width="700"
					height="400"
					src="https://www.youtube.com/embed/pOdhx_vxxPI"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</p>
		{:else}
			<p>
				<iframe
					class="content-center"
					width="350"
					height="200"
					src="https://www.youtube.com/embed/pOdhx_vxxPI"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</p>
		{/if}
	</div>
</div>
