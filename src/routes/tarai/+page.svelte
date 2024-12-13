<script lang="ts">
	import Sidebar from "$lib/components/sidebar.svelte";
	import ChevronUp from "lucide-svelte/icons/chevron-up";
</script>

<div class="flex">
	<Sidebar>
		<main class="flex-1 flex flex-col">
			<div class="flex-1 overflow-y-auto">
				<div class="mx-auto w-full max-w-3xl p-4">
					<div class="mb-4">
						<h1 class="text-2xl font-bold tracking-tight">Tarai AI Assistant</h1>
						<p class="text-muted-foreground">Have a conversation with Tarai, your AI assistant.</p>
					</div>
					<div class="space-y-4">
						<!-- Messages will go here -->
					</div>
				</div>
			</div>

			<div class="border-t bg-background sticky bottom-0">
				<div class="mx-auto max-w-3xl p-4">
					<div class="relative">
						<input
							type="text"
							placeholder="Type your message..."
							class="w-full min-h-10 rounded-xl border bg-background px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
						/>
						<button
							class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-gray-200 p-1 text-primary-foreground hover:bg-gray-300 transition-colors duration-200"
						>
							<ChevronUp class="h-4 w-4" />
						</button>
					</div>
				</div>
			</div>
		</main>
	</Sidebar>
</div>