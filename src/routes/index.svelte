<script lang="ts">
  import AudioPlayer from '$lib/AudioPlayer.svelte';
  import Purple from '$components/players/purple/Purple.svelte';

  const SOURCES = [
    'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
    'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav',
    'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav',
    'https://www2.cs.uic.edu/~i101/SoundFiles/Fanfare60.wav',
    'https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg10.wav',
    'https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg.wav',
    'https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav',
    'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav',
    'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther60.wav',
    'https://www2.cs.uic.edu/~i101/SoundFiles/preamble10.wav',
    'https://www2.cs.uic.edu/~i101/SoundFiles/preamble.wav',
    'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars3.wav',
    'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav',
    'https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav'
  ];

  let selectedIndex = 0;
</script>

<svelte:head>
  <title>Svelte Audio Player</title>
</svelte:head>

<div class="w-full flex flex-col justify-center items-center">
  <AudioPlayer src={SOURCES[selectedIndex]}>
    <Purple />
  </AudioPlayer>

  <div
    class="mt-8 text-sm bg-gray-100 rounded-sm h-60 md:h-44 md:max-w-lg overflow-hidden overflow-y-auto w-full flex flex-col"
  >
    {#each SOURCES as src, index}
      <div
        on:mousedown={() => (selectedIndex = index)}
        class:bg-gray-300={selectedIndex === index}
        class="px-2 py-1 cursor-pointer w-full break-words"
      >
        <span>{src}</span>
      </div>
    {/each}
  </div>
</div>
