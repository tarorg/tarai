<script lang="ts">
    import AppSidebar from "$lib/components/app-sidebar.svelte";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
</script>

<Sidebar.Provider>
    <AppSidebar />
    <Sidebar.Inset>
        <header class="flex h-16 shrink-0 items-center gap-2">
            <div class="flex items-center gap-2 px-4">
                <Sidebar.Trigger />
            </div>
        </header>
        <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
            <slot />
        </div>
    </Sidebar.Inset>
</Sidebar.Provider>
