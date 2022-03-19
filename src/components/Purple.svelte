<script lang="ts">
  import PauseIcon from './icons/PauseIcon.svelte';
  import PlayIcon from './icons/PlayIcon.svelte';
  import RepeatIcon from './icons/RepeatIcon.svelte';
  import RewindIcon from './icons/RewindIcon.svelte';
  import SpeedIcon from './icons/SpeedIcon.svelte';
  import VolumeMute from './icons/VolumeMute.svelte';
  import VolumeUp from './icons/VolumeUp.svelte';

  import { getAudioContext } from '$lib/context';
  import { toggle, toHHMMSS } from '$lib/utils';

  const SEEK_SECONDS = 10;
  const PLAYBACK_SPEEDS = [1, 1.25, 1.5, 1.75, 2, 0.25, 0.5, 0.75];

  const { playing, playbackRate, paused, repeat, seekBy, currentTime, duration, muted } =
    getAudioContext();

  let speedIndex = 0;

  const handlePlaybackSpeedClick = () => {
    $playbackRate = PLAYBACK_SPEEDS[++speedIndex % PLAYBACK_SPEEDS.length];
  };
</script>

<div
  class="h-40 w-[320px] p-8 flex flex-col justify-center items-center border border-gray-100 shadow-md shadow-purple-500/10 rounded-xl"
>
  <div class="flex items-center space-x-3">
    <button on:click={() => toggle(repeat)}>
      <RepeatIcon class={`icon-4 ${$repeat ? 'text-purple-500' : 'text-purple-300'}`} />
    </button>

    <button on:click={() => seekBy(-1 * SEEK_SECONDS)}>
      <RewindIcon class="icon-4 text-purple-300" />
    </button>
    <button
      on:click={() => toggle(paused)}
      class="w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-br from-purple-300 to-purple-500"
    >
      {#if $playing}
        <PauseIcon />
      {:else}
        <PlayIcon />
      {/if}
    </button>

    <button on:click={() => seekBy(SEEK_SECONDS)}>
      <SpeedIcon class="icon-4 text-purple-300" />
    </button>

    <button class="" on:click={() => toggle(muted)}>
      {#if $muted}
        <VolumeMute class="icon-4 text-purple-300" />
      {:else}
        <VolumeUp class="icon-4 text-purple-300" />
      {/if}
    </button>

    <button
      class="w-6 h-4 flex items-center justify-center rounded-full bg-purple-300"
      on:click={handlePlaybackSpeedClick}
    >
      <!-- <PlaybackSpeedIcon class="text-purple-300 w-4" /> -->
      <span class="text-[8px] font-semibold text-white">{$playbackRate}x</span>
    </button>
  </div>

  <div class="mt-4 w-full flex items-center space-x-2">
    <span class="text-sm text-purple-800">{toHHMMSS($currentTime)}</span>
    <div class="relative flex items-center flex-1">
      <div class="h-2 w-full rounded-sm bg-purple-300 absolute" />
      <div
        class="h-2 rounded-sm bg-gradient-to-r from-purple-300 to-purple-500 absolute"
        style={`width: ${($currentTime * 100) / $duration}%;`}
      />
      <input
        bind:value={$currentTime}
        max={$duration}
        type="range"
        class="w-full absolute h-2 appearance-none bg-transparent outline-none"
      />
    </div>
    <span class="text-sm text-purple-800">{toHHMMSS($duration)}</span>
  </div>
</div>

<style lang="postcss">
  :global(.icon-4) {
    @apply w-4 h-4;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    @apply w-2 h-2 cursor-pointer;
  }

  input[type='range']::-webkit-slider-thumb:hover {
    @apply bg-purple-600;
  }
</style>
