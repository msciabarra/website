<script lang="ts">
	export let numberOfItems;
	export let normConst;

	$: offsetWidth = 0;
	$: windowWidth = 0;

	$: itemSelected = 0;

	$: itemWidth = offsetWidth / numberOfItems;

	$: paddingWidth = (windowWidth - itemWidth) / 1.5;
	$: moveWidth = -(itemWidth - normConst) * itemSelected;

	$: styles = {
		'padding-left': `${paddingWidth}px`,
		'margin-left': `${moveWidth}px`
	};

	$: cssVarStyles = Object.entries(styles)
		.map(([key, value]) => `${key}:${value}`)
		.join(';');

	function handleNext() {
		if (itemSelected === numberOfItems - 1) {
			return;
		}
		itemSelected++;
	}
	function handleBack() {
		if (itemSelected === 0) {
			return;
		}
		itemSelected--;
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="relative flex items-center overflow-x-hidden ">
	<div class="absolute w-full flex justify-between px-[30px]">
		<button on:click={handleBack}>&#10094;</button>
		<button on:click={handleNext}>&#10095;</button>
	</div>
	<div class="flex w-fit items-center justify-evenly" bind:offsetWidth style={cssVarStyles}>
		<slot />
	</div>
</div>
