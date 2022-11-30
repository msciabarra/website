<script>
    export let imageSrc;
    export let imageAlt;
    export let title;
    export let text;
</script>

<div
    class="flex flex-col items-center w-[224px] h-[287px] shadow-nuv-box-shadow rounded-[20px] p-[15px] mx-[8px] my-2"
>
    <img src={imageSrc} alt={imageAlt} class="h-[165px]" />
    <span
        class="text-nuv-blue text-[20px] leading-[24px] font-semibold mt-[6px]"
    >
        {title}
    </span>
    <span class="text-[10px] leading-[11px] font-semibold mt-auto">
        {text}
    </span>
</div>
