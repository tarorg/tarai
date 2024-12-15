<script>
	// Add any necessary imports and logic for the Orders page
	import Sidebar from "$lib/components/sidebar.svelte";
	import ChevronLeft from "lucide-svelte/icons/chevron-left";
	import ChevronRight from "lucide-svelte/icons/chevron-right";
	import Copy from "lucide-svelte/icons/copy";
	import CreditCard from "lucide-svelte/icons/credit-card";
	import File from "lucide-svelte/icons/file";
	import ListFilter from "lucide-svelte/icons/list-filter";
	import EllipsisVertical from "lucide-svelte/icons/ellipsis-vertical";
	import Truck from "lucide-svelte/icons/truck";
	import Plus from "lucide-svelte/icons/plus";

	import { Badge } from "$lib/components/ui/badge/index.ts";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.ts";
	import { Button } from "$lib/components/ui/button/index.ts";
	import * as Card from "$lib/components/ui/card/index.ts";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.ts";
	import { Input } from "$lib/components/ui/input/index.ts";
	import * as Pagination from "$lib/components/ui/pagination/index.ts";
	import { Progress } from "$lib/components/ui/progress/index.ts";
	import { Separator } from "$lib/components/ui/separator/index.ts";
	import * as Table from "$lib/components/ui/table/index.ts";
	import * as Tabs from "$lib/components/ui/tabs/index.ts";

	let searchQuery = ""; // State for the search query
</script>

<div class="flex h-screen m-0 flex-col border-t bg-gray-100">
	<Sidebar>
		<div class="border-b border-gray-200"></div>
		<main class="flex-1 flex m-0">
			<div class="flex w-full m-0">
				<div class="w-1/3 border-r border-gray-200 p-0" id="containerA">
					<Tabs.Root value="week" class="w-full h-full flex flex-col">
						<div class="flex items-center">
							<Tabs.List>
								<Tabs.Trigger value="week">Week</Tabs.Trigger>
								<Tabs.Trigger value="month">Month</Tabs.Trigger>
								<Tabs.Trigger value="year">Year</Tabs.Trigger>
							</Tabs.List>
							<div class="ml-auto flex items-center gap-2">
								<DropdownMenu.Root>
									<DropdownMenu.Trigger>
										<Button
											size="sm"
											class="h-7 gap-1 text-sm text-black bg-white border-gray-200 hover:bg-white"
										>
											<ListFilter class="size-3.5" />
											<span class="sr-only sm:not-sr-only">Filter</span>
										</Button>
									</DropdownMenu.Trigger>
									<DropdownMenu.Content align="end">
										<DropdownMenu.Group>
											<DropdownMenu.GroupHeading>Filter by</DropdownMenu.GroupHeading>
											<DropdownMenu.Separator />
											<DropdownMenu.CheckboxItem checked>In Stock</DropdownMenu.CheckboxItem>
											<DropdownMenu.CheckboxItem>Low Stock</DropdownMenu.CheckboxItem>
											<DropdownMenu.CheckboxItem>Out of Stock</DropdownMenu.CheckboxItem>
										</DropdownMenu.Group>
									</DropdownMenu.Content>
								</DropdownMenu.Root>
								<Button size="icon" class="h-7 text-black bg-white border-gray-200 hover:bg-white">
									<Plus class="size-3.5" />
									<span class="sr-only">Add Product</span>
								</Button>
							</div>
						</div>
						<Tabs.Content value="week" class="w-full flex-1 overflow-auto p-0">
							<div class="p-4">
								<Input
									type="text"
									placeholder="Search products..."
									bind:value={searchQuery}
									class="w-full border border-gray-200 rounded-md p-2"
								/>
							</div>
							<Card.Root
								data-x-chunk-name="dashboard-05-chunk-3"
								data-x-chunk-description="A table of recent orders showing the following columns: Customer, Type, Status, Date, and Amount."
								class="w-full border-none"
							>
								<Card.Header class="px-0 py-0 border-none rounded-none">
									<Card.Title></Card.Title>
									<Card.Description></Card.Description>
								</Card.Header>
								<Card.Content class="p-0">
									<Table.Root class="w-full border-none">
										<Table.Header>
											<Table.Row class="hidden">
												<Table.Head>Name</Table.Head>
												<Table.Head class="hidden md:table-cell">Inventory</Table.Head>
											</Table.Row>
										</Table.Header>
										<Table.Body>
											<Table.Row class="bg-accent">
												<Table.Cell>
													<div class="font-medium">Glimmer Lamps</div>
												</Table.Cell>
												<Table.Cell class="hidden md:table-cell">120</Table.Cell>
											</Table.Row>
											<Table.Row>
												<Table.Cell>
													<div class="font-medium">Aqua Filters</div>
												</Table.Cell>
												<Table.Cell class="hidden md:table-cell">25</Table.Cell>
											</Table.Row>
											<Table.Row>
												<Table.Cell>
													<div class="font-medium">Solar Panels</div>
												</Table.Cell>
												<Table.Cell class="hidden md:table-cell">50</Table.Cell>
											</Table.Row>
										</Table.Body>
									</Table.Root>
								</Card.Content>
							</Card.Root>
						</Tabs.Content>
					</Tabs.Root>
				</div>
				<div
					class="w-1/3 p-0 border-r border-gray-200"
					id="containerB"
				>
					<!-- Content for the second container -->
				</div>
				<div class="w-1/3 p-0" id="containerC">
					<!-- Content for the third container -->
				</div>
			</div>
		</main>
	</Sidebar>
</div>

<style>
	/* Add any necessary styles for the Orders page */
</style>
