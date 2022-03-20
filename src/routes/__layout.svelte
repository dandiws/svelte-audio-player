<script>
  import Footer from '$components/Footer.svelte';
  import Navbar from '$components/Navbar.svelte';

  import '../app.css';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="px-8 max-w-screen-sm md:max-w-screen-lg mx-auto flex flex-col min-h-screen">
  <Navbar />
  <div class="flex-1">
    <slot />
  </div>
  <Footer />
</div>
