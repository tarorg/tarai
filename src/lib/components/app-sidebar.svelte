<script lang="ts" module>
	import AudioWaveform from "lucide-svelte/icons/audio-waveform";
	import BookOpen from "lucide-svelte/icons/book-open";
	import Bot from "lucide-svelte/icons/bot";
	import ChartPie from "lucide-svelte/icons/chart-pie";
	import Command from "lucide-svelte/icons/command";
	import Frame from "lucide-svelte/icons/frame";
	import GalleryVerticalEnd from "lucide-svelte/icons/gallery-vertical-end";
	import Map from "lucide-svelte/icons/map";
	import Settings2 from "lucide-svelte/icons/settings-2";
	import SquareTerminal from "lucide-svelte/icons/square-terminal";
	import {
		Home,
		CreditCard,
		User,
		Users,
		Settings,
		LogOut,
		ShoppingBag,
		PackagePlus,
		PackageCheck,
		PackageX,
		Truck,
		BarChart,
		PieChart,
		FileText,
		Mail,
		Calendar
	} from 'lucide-svelte';

	// This is sample data.
	const data = {
		user: {
			name: "shadcn",
			email: "m@example.com",
			avatar: "public/assets/023.png",
		},
		workspaces: [
			{
				name: "Pin",
				logo: GalleryVerticalEnd,
				plan: "Commerce",
				navMain: [
					{
						title: "POS",
						icon: Command,
						items: [
							{ title: "New Sale", url: "/pos/new-sale" },
							{ title: "Orders", url: "/pos/orders" },
							{ title: "Returns", url: "/pos/returns" }
						]
					},
					{
						title: "Commerce",
						icon: SquareTerminal,
						items: [
							{ title: "Products", url: "/commerce/products" },
							{ title: "Customers", url: "/commerce/customers" }
						]
					},
					{
						title: "Inventory",
						icon: BookOpen,
						items: [
							{ title: "Stock Overview", url: "/inventory/stock-overview" },
							{ title: "Stock Adjustments", url: "/inventory/stock-adjustments" },
							{ title: "Purchase Orders", url: "/inventory/purchase-orders" }
						]
					},
					{
						title: "Reports",
						icon: ChartPie,
						items: [
							{ title: "Sales Reports", url: "/reports/sales" },
							{ title: "Inventory Reports", url: "/reports/inventory" }
						]
					},
					{
						title: "Settings",
						icon: Settings2,
						items: [
							{ title: "Inventory Settings", url: "/settings/inventory" },
							{ title: "User Management", url: "/settings/user-management" }
						]
					}
				]
			},
			{
				name: "Branding",
				logo: AudioWaveform,
				plan: "CRM, Campaigns",
				navMain: [
					{
						title: "Campaigns",
						icon: Mail,
						items: [
							{ title: "New Campaign", url: "#" },
							{ title: "Campaign History", url: "#" },
							{ title: "Drafts", url: "#" }
						]
					},
					{
						title: "Lead Management",
						icon: Users,
						items: [
							{ title: "Lead Sources", url: "#" },
							{ title: "Lead Analytics", url: "#" }
						]
					},
					{
						title: "Content",
						icon: FileText,
						items: [
							{ title: "Content Library", url: "#" },
							{ title: "Templates", url: "#" },
							{ title: "Media Management", url: "#" }
						]
					},
					{
						title: "Reports",
						icon: ChartPie,
						items: [
							{ title: "Campaign Performance", url: "#" },
							{ title: "Lead Reports", url: "#" },
							{ title: "ROI Analysis", url: "#" }
						]
					},
					{
						title: "Settings",
						icon: Settings2,
						items: [
							{ title: "Campaign Settings", url: "#" },
							{ title: "Lead Settings", url: "#" },
							{ title: "User Management", url: "#" }
						]
					}
				]
			}
		],
		navMain: [
			{
				title: "Playground",
				url: "#",
				icon: SquareTerminal,
				isActive: true,
				items: [
					{
						title: "History",
						url: "#",
					},
					{
						title: "Starred",
						url: "#",
					},
					{
						title: "Settings",
						url: "#",
					},
				],
			},
			{
				title: "Models",
				url: "#",
				icon: Bot,
				items: [
					{
						title: "Genesis",
						url: "#",
					},
					{
						title: "Explorer",
						url: "#",
					},
					{
						title: "Quantum",
						url: "#",
					},
				],
			},
			{
				title: "Documentation",
				url: "#",
				icon: BookOpen,
				items: [
					{
						title: "Introduction",
						url: "#",
					},
					{
						title: "Get Started",
						url: "#",
					},
					{
						title: "Tutorials",
						url: "#",
					},
					{
						title: "Changelog",
						url: "#",
					},
				],
			},
			{
				title: "Settings",
				url: "#",
				icon: Settings2,
				items: [
					{
						title: "General",
						url: "#",
					},
					{
						title: "Team",
						url: "#",
					},
					{
						title: "Billing",
						url: "#",
					},
					{
						title: "Limits",
						url: "#",
					},
				],
			},
		],
		projects: [
			{
				name: "Design Engineering",
				url: "#",
				icon: Frame,
			},
			{
				name: "Sales & Marketing",
				url: "#",
				icon: ChartPie,
			},
			{
				name: "Travel",
				url: "#",
				icon: Map,
			},
		],
	};
</script>

<script lang="ts">
	import NavMain from "$lib/components/nav-main.svelte";
	import NavProjects from "$lib/components/nav-projects.svelte";
	import NavUser from "$lib/components/nav-user.svelte";
	import WorkspaceSwitcher from "$lib/components/workspace-switcher.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";

	let {
		ref = $bindable(null),
		collapsible = "icon",
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();

	let selectedWorkspace = $state(data.workspaces[0]);

	function handleWorkspaceSelect(workspace: typeof data.workspaces[0]) {
		selectedWorkspace = workspace;
	}
</script>

<Sidebar.Root bind:ref {collapsible} {...restProps}>
	<Sidebar.Header class="flex-shrink-0 w-full">
		<div class="flex items-center justify-between w-full px-2 py-3">
			<div class="flex-1">
				<WorkspaceSwitcher
					workspaces={data.workspaces}
					{selectedWorkspace}
					{handleWorkspaceSelect}
					class="pl-0"
				/>
			</div>
			<Sidebar.Trigger class="md:hidden" />
		</div>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={selectedWorkspace.navMain} />
		<NavProjects />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
