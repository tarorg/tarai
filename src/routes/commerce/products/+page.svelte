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
					<Tabs.Root value="active" class="w-full h-full flex flex-col">
						<div class="flex items-center">
							<Tabs.List>
								<Tabs.Trigger value="active">Active</Tabs.Trigger>
								<Tabs.Trigger value="inactive">Inactive</Tabs.Trigger>
							</Tabs.List>
							<div class="ml-auto flex items-center gap-2">
								<Button size="icon" class="h-7 text-black bg-white border-gray-200 hover:bg-white">
									<Plus class="size-3.5" />
									<span class="sr-only">Add Product</span>
								</Button>
							</div>
						</div>
						<Tabs.Content value="active" class="w-full flex-1 overflow-auto p-0">
							<div class="p-4 flex items-center">
								<div class="flex w-full items-center gap-2">
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
									<Input
										type="text"
										placeholder="Search products..."
										bind:value={searchQuery}
										class="w-full border border-gray-200 rounded-md p-2"
									/>
								</div>
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
											</Table.Row>
										</Table.Header>
										<Table.Body>
											<Table.Row class="bg-accent">
												<Table.Cell>
													<div class="font-medium">Product A</div>
												</Table.Cell>
											</Table.Row>
											<Table.Row>
												<Table.Cell>
													<div class="font-medium">Product B</div>
												</Table.Cell>
											</Table.Row>
											<Table.Row>
												<Table.Cell>
													<div class="font-medium">Product C</div>
												</Table.Cell>
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
					<Card.Root
						data-x-chunk-name="product-card"
						data-x-chunk-description="A card displaying product details."
						class="w-full border-none"
					>
						<Card.Header class="px-0 py-0 border-none rounded-none">
						</Card.Header>
						<Card.Content class="p-0">
							<Table.Root class="w-full border-none">
								<Table.Header>
									<Table.Row class="hidden">
										<Table.Head>Name</Table.Head>
										<Table.Head class="hidden md:table-cell">SKU</Table.Head>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									<Table.Row class="bg-accent">
										<Table.Cell>
											<div class="font-medium">Product A</div>
										</Table.Cell>
										<Table.Cell class="hidden md:table-cell"></Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<div class="font-medium">SKU 001</div>
										</Table.Cell>
										<Table.Cell class="hidden md:table-cell"></Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<div class="font-medium">SKU 002</div>
										</Table.Cell>
										<Table.Cell class="hidden md:table-cell"></Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<div class="font-medium">SKU 003</div>
										</Table.Cell>
										<Table.Cell class="hidden md:table-cell"></Table.Cell>
									</Table.Row>
								</Table.Body>
							</Table.Root>
						</Card.Content>
					</Card.Root>
				</div>
				<div class="w-1/3 p-0" id="containerC">
					<Card.Root
						data-x-chunk-name="details-card"
						data-x-chunk-description="A card displaying detailed information about the selected product."
						class="w-full border-none"
					>
						<Card.Content class="p-0">
							<Tabs.Root value="core" class="w-full">
								<div class="flex items-center justify-between">
									<Tabs.List>
										<Tabs.Trigger value="core">Core</Tabs.Trigger>
										<Tabs.Trigger value="options">Options</Tabs.Trigger>
										<Tabs.Trigger value="properties">Properties</Tabs.Trigger>
										<Tabs.Trigger value="branding">Branding</Tabs.Trigger>
										<Tabs.Trigger value="variant detail">Variant detail</Tabs.Trigger>
										<Tabs.Trigger value="inventory">Inventory</Tabs.Trigger>
									</Tabs.List>
									<div class="ml-auto flex items-center gap-2">
										<Button
											size="sm"
											class="h-7 gap-1 text-sm text-black bg-white border-gray-200 hover:bg-white"
										>
											<span class="sr-only sm:not-sr-only">Save</span>
										</Button>
									</div>
								</div>
								<div class="mt-4">
									<Tabs.Content value="core">
										<Table.Root class="w-full border-none">
											<Table.Body>
												<Table.Row class="border-t border-gray-200">
													<Table.Cell class="p-0">
														<div class="flex h-full w-full">
															<div class="h-12 w-full border-r border-gray-200 bg-white" />
															<div class="h-12 w-full border-r border-gray-200 bg-white" />
															<div class="h-12 w-full border-r border-gray-200 bg-white" />
															<div class="h-12 w-full border-r border-gray-200 bg-white" />
															<div class="h-12 w-full bg-white" />
														</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Name</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Type</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Description</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Manufacturer</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Unit</div>
													</Table.Cell>
												</Table.Row>
											</Table.Body>
										</Table.Root>
									</Tabs.Content>
									<Tabs.Content value="options">
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
														<div class="font-medium">Option 1</div>
													</Table.Cell>
													<Table.Cell class="hidden md:table-cell">50</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Option 2</div>
													</Table.Cell>
													<Table.Cell class="hidden md:table-cell">75</Table.Cell>
												</Table.Row>
											</Table.Body>
										</Table.Root>
									</Tabs.Content>
									<Tabs.Content value="properties">
										<Table.Root class="w-full border-none">
											<Table.Header>
												<Table.Row class="hidden">
													<Table.Head>Name</Table.Head>
													<Table.Head class="hidden md:table-cell">Value</Table.Head>
												</Table.Row>
											</Table.Header>
											<Table.Body>
												<Table.Row class="bg-accent">
													<Table.Cell>
														<div class="font-medium">Property 1</div>
													</Table.Cell>
													<Table.Cell class="hidden md:table-cell">Value 1</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Property 2</div>
													</Table.Cell>
													<Table.Cell class="hidden md:table-cell">Value 2</Table.Cell>
												</Table.Row>
											</Table.Body>
										</Table.Root>
									</Tabs.Content>
									<Tabs.Content value="branding">
										<Table.Root class="w-full border-none">
											<Table.Header>
												<Table.Row class="hidden">
													<Table.Head>Name</Table.Head>
													<Table.Head class="hidden md:table-cell">Inventory</Table.Head>
												</Table.Row>
											</Table.Header>
											<Table.Body>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Category</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Tags</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Collections</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Handle</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Meta</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Status</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Visibility</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Sales Channel</div>
													</Table.Cell>
												</Table.Row>
											</Table.Body>
										</Table.Root>
									</Tabs.Content>
									<Tabs.Content value="variant detail">
										<Table.Root class="w-full border-none">
											<Table.Header>
												<Table.Row class="hidden">
													<Table.Head>Name</Table.Head>
													<Table.Head class="hidden md:table-cell">Quantity</Table.Head>
												</Table.Row>
											</Table.Header>
											<Table.Body>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">SKU</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Medias</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Vendor</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Warehouse</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Weight</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">UPC</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">EAN</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">ISBN</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Selling Price</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Cost Price</div>
													</Table.Cell>
												</Table.Row>
											</Table.Body>
										</Table.Root>
									</Tabs.Content>
									<Tabs.Content value="inventory">
										<Table.Root class="w-full border-none">
											<Table.Body>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Opening Stock</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Closing Stock</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell>
														<div class="font-medium">Reorder</div>
													</Table.Cell>
												</Table.Row>
											</Table.Body>
										</Table.Root>
									</Tabs.Content>
								</div>
							</Tabs.Root>
						</Card.Content>
					</Card.Root>
				</div>
			</div>
		</main>
	</Sidebar>
</div>

<style>
	/* Add any necessary styles for the Orders page */
</style>
