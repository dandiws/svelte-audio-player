<script lang="ts">
  import PauseIcon from '../../icons/PauseIcon.svelte';
  import PlayIcon from '../../icons/PlayIcon.svelte';
  import RepeatIcon from '../../icons/RepeatIcon.svelte';
  import RewindIcon from '../../icons/RewindIcon.svelte';
  import SpeedIcon from '../../icons/SpeedIcon.svelte';

  import { getAudioContext } from '$lib/context';
  import { toggle, toHHMMSS } from '$lib/utils';
  import RangeSlider from './RangeSlider.svelte';
  import VolumeControl from './VolumeControl.svelte';

  const SEEK_SECONDS = 10;
  const PLAYBACK_SPEEDS = [1, 1.25, 1.5, 1.75, 2, 0.25, 0.5, 0.75];

  const { playing, playbackRate, paused, repeat, seekBy, currentTime, duration } =
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

    <button
      class="w-6 h-4 flex items-center justify-center rounded-full bg-purple-300"
      on:click={handlePlaybackSpeedClick}
    >
      <span class="text-[8px] font-semibold text-white">{$playbackRate}x</span>
    </button>
  </div>

  <div class="mt-4 w-full flex items-center space-x-2">
    <span class="text-sm text-purple-800">{toHHMMSS($currentTime)}</span>
    <RangeSlider max={$duration} bind:value={$currentTime} />
    <span class="text-sm text-purple-800">{toHHMMSS($duration)}</span>
    <VolumeControl />
  </div>
</div>

<style lang="postcss">
  :global(.icon-4) {
    @apply w-4 h-4;
  }
</style>
