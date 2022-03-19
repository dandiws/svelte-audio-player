<script lang="ts">
  import AudioPlayer from '$lib/AudioPlayer.svelte';
  import Purple from '../components/Purple.svelte';
</script>

<svelte:head>
  <title>Svelte Audio Player</title>
</svelte:head>

<div class="max-w-xl mx-auto p-16 flex justify-center">
  <AudioPlayer>
    <Purple />
  </AudioPlayer>
</div>
