<script lang="ts">
	export let src: string;
	export let alt: string;
	export let name: string;
	export let size: number = 40; // Default size

	$: initials = name
		.split(" ")
		.map((n) => n[0])
		.join("")
		.substring(0, 2);
</script>

<div class="avatar" style:width="{size}px" style:height="{size}px">
	{#if src}
		<img {src} {alt} />
	{:else}
		<span class="initials">{initials}</span>
	{/if}
</div>

<style>
	.avatar {
		border-radius: 50%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ccc; /* Fallback color */
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.initials {
		font-size: 16px;
		font-weight: bold;
		color: #fff;
	}
</style> 