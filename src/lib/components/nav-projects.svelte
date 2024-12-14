<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { useSidebar } from "$lib/components/ui/sidebar/context.svelte.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import Ellipsis from "lucide-svelte/icons/ellipsis";
	import Folder from "lucide-svelte/icons/folder";
	import Forward from "lucide-svelte/icons/forward";
	import Trash2 from "lucide-svelte/icons/trash-2";

	const sidebar = useSidebar();
</script>

<Sidebar.Group class="group-data-[collapsible=icon]:hidden">
	<Sidebar.GroupLabel>Notes</Sidebar.GroupLabel>
</Sidebar.Group>
