<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { useSidebar } from "$lib/components/ui/sidebar/index.js";
	import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
	import Plus from "lucide-svelte/icons/plus";

	// This should be `Component` after lucide-svelte updates types
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let {
		workspaces,
		selectedWorkspace,
		handleWorkspaceSelect
	}: {
		workspaces: { name: string; logo: any; plan: string; navMain: any }[];
		selectedWorkspace: { name: string; logo: any; plan: string; navMain: any };
		handleWorkspaceSelect: (workspace: any) => void;
	} = $props();
	const sidebar = useSidebar();
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem class="w-full">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Sidebar.MenuButton
						{...props}
						size="lg"
						class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground w-full"
					>
						<div
							class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
						>
							<selectedWorkspace.logo class="size-4" />
						</div>
						<div class="grid flex-1 text-left text-sm leading-tight">
							<span class="truncate font-semibold">
								{selectedWorkspace.name}
							</span>
							<span class="truncate text-xs">{selectedWorkspace.plan}</span>
						</div>
						<ChevronsUpDown class="ml-auto" />
					</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				class="w-[--bits-dropdown-menu-anchor-width] min-w-56 rounded-lg"
				align="start"
				side={sidebar.isMobile ? "bottom" : "right"}
				sideOffset={4}
			>
				<DropdownMenu.Label class="text-muted-foreground text-xs">Workspaces</DropdownMenu.Label>
				{#each workspaces as workspace}
					<DropdownMenu.Item onSelect={() => handleWorkspaceSelect(workspace)} class="gap-2 p-2">
						<div class="flex size-6 items-center justify-center rounded-sm border">
							<workspace.logo class="size-4 shrink-0" />
						</div>
						{workspace.name}
					</DropdownMenu.Item>
				{/each}
				<DropdownMenu.Separator />
				<DropdownMenu.Item class="gap-2 p-2">
					<div
						class="bg-background flex size-6 items-center justify-center rounded-md border"
					>
						<Plus class="size-4" />
					</div>
					<div class="text-muted-foreground font-medium">Add Workspace</div>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu> 