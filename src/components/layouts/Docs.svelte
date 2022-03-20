<script context="module">
  import table from '$components/ResponsiveTable.svelte';
  export { table };
</script>

<script>
  import Sidebar from '$components/Sidebar.svelte';
</script>

<svelte:head>
  <link rel="stylesheet" href="/prism-base16-ateliersulphurpool.light.css" />
</svelte:head>

<div class="flex flex-col lg:flex-row">
  <Sidebar />
  <main class="docs__layout flex-1 mt-8 lg:px-8 lg:mt-0">
    <slot />
  </main>
</div>

<style lang="postcss" global>
  .docs__layout a {
    @apply text-blue-500;
  }

  .docs__layout a:hover {
    @apply underline;
  }

  .docs__layout p {
    @apply mb-3;
  }

  .docs__layout :not(pre) > code {
    @apply text-[0.9em] text-indigo-700 bg-gray-50 rounded-sm p-px;
  }

  .docs__layout h1,
  .docs__layout h2,
  .docs__layout h3 {
    @apply leading-loose;
  }

  .docs__layout table td,
  .docs__layout table th {
    @apply border border-gray-200 p-2;
  }

  .docs__layout h1 {
    @apply text-2xl mb-3;
  }

  .docs__layout h2 {
    @apply text-xl mb-2 mt-6;
  }

  .docs__layout h3 {
    @apply text-base mb-2;
  }

  .docs__layout table {
    @apply mb-3;
  }
</style>
