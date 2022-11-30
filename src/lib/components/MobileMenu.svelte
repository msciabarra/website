<script lang="ts">
	const items = [
		{ text: 'Products', url: '/product' },
		{ text: 'Documentation', url: '/documentation' },
		{ text: 'Blog', url: '/blog' },
		{ text: 'About', url: '/about' },
		{ text: 'FAQ', url: '/faq' },
		{ text: 'Download', url: '/download' }
	];

	export let show: Boolean;
	export let toggle: any;
</script>

<!-- <div class="bg-nuv-blue h-[81px] w-full justify-end px-[28px] hidden xl:flex">
    {#each cmds as cmd}
        <button class="whitespace-nowrap mr-[30px] text-[26px] text-white text-left font-medium leading-[30px] tracking-[-0.02em]"  on:click={() => handleClick(cmd[1])}>{cmd[0]}</button>
    {/each}
</div> -->
{#if show}
	<div
		class="flex flex-col shadow-nuv-box-shadow rounded-b-[20px] absolute bg-white right-0 z-[100] w-[50%] pb-10 xl:hidden"
	>
		{#each items as item}
			{#if item.text === 'Download'}
				<div
					class="text-[20px] text-white bg-nuv-orange h-full w-full text-center font-semibold leading-[23px] tracking-[-0.02em] py-3 mx-auto"
					>
					<a href={item.url}
					on:click={toggle}
					>{item.text}</a>
				</div>
			{:else if item.text === 'FAQ'}
				<div
					class="text-[20px] text-nuv-blue text-center h-full w-full font-semibold leading-[23px] tracking-[-0.02em] py-3 mx-auto"
					>
					<a href={item.url}
					on:click={toggle}
					>{item.text}</a>
				</div>
			{:else}
				<div
					class="text-[20px] text-nuv-blue text-center h-full w-full font-semibold leading-[23px] tracking-[-0.02em] py-3 mx-auto border-b-[1px] border-solid border-nuv-blue"
					>
					<a href={item.url}
					on:click={toggle}
					>{item.text}</a>
				</div>
			{/if}
		{/each}
	</div>
{/if}
