<script>
  import Sidebar from '$components/Sidebar.svelte';
</script>

<div class="flex">
  <Sidebar />
  <main class="flex-1">
    <slot />
  </main>
</div>

<style lang="postcss">
  main :global(a) {
    @apply text-blue-500;
  }

  main :global(a:hover) {
    @apply underline;
  }

  main :global(p) {
    @apply mb-3;
  }

  main :global(pre) {
    @apply bg-gray-200 p-1 rounded-sm;
  }
</style>
