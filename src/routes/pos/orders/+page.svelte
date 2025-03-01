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
</script>

<div class="flex">
	<Sidebar>
		<main class="flex-1 p-4">
			<div class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
				<div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
					<Tabs.Root value="week">
						<div class="flex items-center">
							<Tabs.List>
								<Tabs.Trigger value="week">Week</Tabs.Trigger>
								<Tabs.Trigger value="month">Month</Tabs.Trigger>
								<Tabs.Trigger value="year">Year</Tabs.Trigger>
							</Tabs.List>
							<div class="ml-auto flex items-center gap-2">
								<DropdownMenu.Root>
									<DropdownMenu.Trigger>
										{#snippet child({ props })} 
											<Button {...props} size="sm" class="h-7 gap-1 text-sm">
												<ListFilter class="size-3.5" />
												<span class="sr-only sm:not-sr-only">Filter</span>
											</Button>
										{/snippet}
									</DropdownMenu.Trigger>
									<DropdownMenu.Content align="end">
										<DropdownMenu.Group>
											<DropdownMenu.GroupHeading>Filter by</DropdownMenu.GroupHeading>
											<DropdownMenu.Separator />
											<DropdownMenu.CheckboxItem checked>Fulfilled</DropdownMenu.CheckboxItem>
											<DropdownMenu.CheckboxItem>Declined</DropdownMenu.CheckboxItem>
											<DropdownMenu.CheckboxItem>Refunded</DropdownMenu.CheckboxItem>
										</DropdownMenu.Group>
									</DropdownMenu.Content>
								</DropdownMenu.Root>
								<Button size="sm" variant="outline" class="h-7 gap-1 text-sm">
									<File class="size-3.5" />
									<span class="sr-only sm:not-sr-only">Export</span>
								</Button>
							</div>
						</div>
						<Tabs.Content value="week">
							<Card.Root
								data-x-chunk-name="dashboard-05-chunk-3"
								data-x-chunk-description="A table of recent orders showing the following columns: Customer, Type, Status, Date, and Amount."
							>
								<Card.Header class="px-7">
									<Card.Title>Orders</Card.Title>
									<Card.Description>Recent orders from your store.</Card.Description>
								</Card.Header>
								<Card.Content>
									<Table.Root>
										<Table.Header>
											<Table.Row>
												<Table.Head>Customer</Table.Head>
												<Table.Head class="hidden sm:table-cell">Type</Table.Head>
												<Table.Head class="hidden sm:table-cell">Status</Table.Head>
												<Table.Head class="hidden md:table-cell">Date</Table.Head>
												<Table.Head class="text-right">Amount</Table.Head>
											</Table.Row>
										</Table.Header>
										<Table.Body>
											<Table.Row class="bg-accent">
												<Table.Cell>
													<div class="font-medium">Liam Johnson</div>
													<div class="text-muted-foreground hidden text-sm md:inline">liam@example.com</div>
												</Table.Cell>
												<Table.Cell class="hidden sm:table-cell">Sale</Table.Cell>
												<Table.Cell class="hidden sm:table-cell">
													<Badge class="text-xs" variant="secondary">Fulfilled</Badge>
												</Table.Cell>
												<Table.Cell class="hidden md:table-cell">2023-06-23</Table.Cell>
												<Table.Cell class="text-right">$250.00</Table.Cell>
											</Table.Row>
											<Table.Row>
												<Table.Cell>
													<div class="font-medium">Olivia Smith</div>
													<div class="text-muted-foreground hidden text-sm md:inline">olivia@example.com</div>
												</Table.Cell>
												<Table.Cell class="hidden sm:table-cell">Refund</Table.Cell>
												<Table.Cell class="hidden sm:table-cell">
													<Badge class="text-xs" variant="outline">Declined</Badge>
												</Table.Cell>
												<Table.Cell class="hidden md:table-cell">2023-06-24</Table.Cell>
												<Table.Cell class="text-right">$150.00</Table.Cell>
											</Table.Row>
											<Table.Row>
												<Table.Cell>
													<div class="font-medium">Noah Williams</div>
													<div class="text-muted-foreground hidden text-sm md:inline">noah@example.com</div>
												</Table.Cell>
												<Table.Cell class="hidden sm:table-cell">Subscription</Table.Cell>
												<Table.Cell class="hidden sm:table-cell">
													<Badge class="text-xs" variant="secondary">Fulfilled</Badge>
												</Table.Cell>
												<Table.Cell class="hidden md:table-cell">2023-06-25</Table.Cell>
												<Table.Cell class="text-right">$350.00</Table.Cell>
											</Table.Row>
										</Table.Body>
									</Table.Root>
								</Card.Content>
							</Card.Root>
						</Tabs.Content>
					</Tabs.Root>
				</div>
				<div>
					<Card.Root
						class="overflow-hidden"
						data-x-chunk-name="dashboard-05-chunk-4"
						data-x-chunk-description="An order details card with order details, shipping information, customer information and payment information."
					>
						<Card.Header class="bg-muted/50 flex flex-row items-start">
							<div class="grid gap-0.5">
								<Card.Title class="group flex items-center gap-2 text-lg">
									Order Oe31b70H
									<Button
										size="icon"
										variant="outline"
										class="size-6 opacity-0 transition-opacity group-hover:opacity-100"
									>
										<Copy class="size-3" />
										<span class="sr-only">Copy Order ID</span>
									</Button>
								</Card.Title>
								<Card.Description>Date: November 23, 2023</Card.Description>
							</div>
							<div class="ml-auto flex items-center gap-1">
								<Button size="sm" variant="outline" class="h-8 gap-1">
									<Truck class="size-3.5" />
									<span class="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
										Track Order
									</span>
								</Button>
								<DropdownMenu.Root>
									<DropdownMenu.Trigger>
										{#snippet child({ props })}
											<Button
												{...props}
												size="icon"
												variant="outline"
												class="size-8"
											>
												<EllipsisVertical class="size-3.5" />
												<span class="sr-only">More</span>
											</Button>
										{/snippet}
									</DropdownMenu.Trigger>
									<DropdownMenu.Content align="end">
										<DropdownMenu.Item>Edit</DropdownMenu.Item>
										<DropdownMenu.Item>Export</DropdownMenu.Item>
										<DropdownMenu.Separator />
										<DropdownMenu.Item>Trash</DropdownMenu.Item>
									</DropdownMenu.Content>
								</DropdownMenu.Root>
							</div>
						</Card.Header>
						<Card.Content class="p-6 text-sm">
							<div class="grid gap-3">
								<div class="font-semibold">Order Details</div>
								<ul class="grid gap-3">
									<li class="flex items-center justify-between">
										<span class="text-muted-foreground">
											Glimmer Lamps x <span>2</span>
										</span>
										<span>$250.00</span>
									</li>
									<li class="flex items-center justify-between">
										<span class="text-muted-foreground">
											Aqua Filters x <span>1</span>
										</span>
										<span>$49.00</span>
									</li>
								</ul>
								<Separator class="my-2" />
								<ul class="grid gap-3">
									<li class="flex items-center justify-between">
										<span class="text-muted-foreground">Subtotal</span>
										<span>$299.00</span>
									</li>
									<li class="flex items-center justify-between">
										<span class="text-muted-foreground">Shipping</span>
										<span>$5.00</span>
									</li>
									<li class="flex items-center justify-between">
										<span class="text-muted-foreground">Tax</span>
										<span>$25.00</span>
									</li>
									<li class="flex items-center justify-between font-semibold">
										<span class="text-muted-foreground">Total</span>
										<span>$329.00</span>
									</li>
								</ul>
							</div>
							<Separator class="my-4" />
							<div class="grid grid-cols-2 gap-4">
								<div class="grid gap-3">
									<div class="font-semibold">Shipping Information</div>
									<address class="text-muted-foreground grid gap-0.5 not-italic">
										<span>Liam Johnson</span>
										<span>1234 Main St.</span>
										<span>Anytown, CA 12345</span>
									</address>
								</div>
								<div class="grid auto-rows-max gap-3">
									<div class="font-semibold">Billing Information</div>
									<div class="text-muted-foreground">Same as shipping address</div>
								</div>
							</div>
							<Separator class="my-4" />
							<div class="grid gap-3">
								<div class="font-semibold">Customer Information</div>
								<dl class="grid gap-3">
									<div class="flex items-center justify-between">
										<dt class="text-muted-foreground">Customer</dt>
										<dd>Liam Johnson</dd>
									</div>
									<div class="flex items-center justify-between">
										<dt class="text-muted-foreground">Email</dt>
										<dd>
											<a href="mailto:">liam@acme.com</a>
										</dd>
									</div>
									<div class="flex items-center justify-between">
										<dt class="text-muted-foreground">Phone</dt>
										<dd>
											<a href="tel:">+1 234 567 890</a>
										</dd>
									</div>
								</dl>
							</div>
							<Separator class="my-4" />
							<div class="grid gap-3">
								<div class="font-semibold">Payment Information</div>
								<dl class="grid gap-3">
									<div class="flex items-center justify-between">
										<dt class="text-muted-foreground flex items-center gap-1">
											<CreditCard class="size-4" />
											Visa
										</dt>
										<dd>**** **** **** 4532</dd>
									</div>
								</dl>
							</div>
						</Card.Content>
						<Card.Footer class="bg-muted/50 flex flex-row items-center border-t px-6 py-3">
							<div class="text-muted-foreground text-xs">
								Updated <time dateTime="2023-11-23">November 23, 2023</time>
							</div>
							<Pagination.Root count={10} class="ml-auto mr-0 w-auto">
								<Pagination.Content>
									<Pagination.Item>
										<Button size="icon" variant="outline" class="size-6">
											<ChevronLeft class="size-3.5" />
											<span class="sr-only">Previous Order</span>
										</Button>
									</Pagination.Item>
									<Pagination.Item>
										<Button size="icon" variant="outline" class="size-6">
											<ChevronRight class="size-3.5" />
											<span class="sr-only">Next Order</span>
										</Button>
									</Pagination.Item>
								</Pagination.Content>
							</Pagination.Root>
						</Card.Footer>
					</Card.Root>
				</div>
			</div>
		</main>
	</Sidebar>
</div>

<style>
	/* Add any necessary styles for the Orders page */
</style>
