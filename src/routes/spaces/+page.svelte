<script lang="ts">
	import Sidebar from "$lib/components/sidebar.svelte";
	import Avatar from "$lib/components/Avatar.svelte";

	const chats = [
		{
			id: 1,
			name: "John Doe",
			lastMessage: "Hey there!",
			time: "10:00 AM",
			avatar: "/public/assets/03.png",
		},
		{
			id: 2,
			name: "Jane Smith",
			lastMessage: "How are you?",
			time: "9:30 AM",
			avatar: "/public/assets/04.png",
		},
		{
			id: 3,
			name: "Peter Jones",
			lastMessage: "See you later!",
			time: "Yesterday",
			avatar: "/public/assets/05.png",
		},
	];
</script>

<div class="flex">
	<Sidebar>
		<main class="flex-1 p-4">
			<div class="mb-4">
				<h1 class="text-2xl font-bold tracking-tight">Spaces</h1>
				<p class="text-muted-foreground">chats. communities</p>
			</div>
			<div class="space-y-2">
				{#each chats as chat (chat.id)}
					<button
						class="w-full flex items-center gap-3 p-3 transition-colors hover:bg-muted"
					>
						<Avatar src={chat.avatar} alt={chat.name} name={chat.name} size={40} />
						<div class="flex-1 text-left">
							<h2 class="font-medium">{chat.name}</h2>
							<p class="text-sm text-muted-foreground">{chat.lastMessage}</p>
						</div>
						<p class="text-xs text-muted-foreground">{chat.time}</p>
					</button>
				{/each}
			</div>
		</main>
	</Sidebar>
</div>