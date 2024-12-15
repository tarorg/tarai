<script lang="ts">
    import AppSidebar from "$lib/components/app-sidebar.svelte";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import { Circle, Square, Triangle } from "lucide-svelte";
</script>

<Sidebar.Provider>
    <AppSidebar />
    <Sidebar.Inset>
        <header class="flex h-16 shrink-0 items-center gap-2">
            <div class="flex items-center gap-2 px-4 w-full">
                <div class="flex-1 flex items-center gap-2">
                    <Sidebar.Trigger />
                </div>
                <div class="icon-group flex items-center gap-2">
                    <a href="/tarai">
                        <Circle class="h-4 w-4" />
                    </a>
                    <a href="/tasks">
                        <Triangle class="h-4 w-4" />
                    </a>
                    <a href="/spaces">
                        <Square class="h-4 w-4" />
                    </a>
                </div>
            </div>
        </header>
        <div class="flex flex-1 flex-col gap-0 p-0 pt-0">
            <slot />
        </div>
    </Sidebar.Inset>
</Sidebar.Provider>
