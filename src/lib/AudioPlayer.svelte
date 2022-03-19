<script lang="ts">
  import { onMount } from 'svelte';
  import { setAudioContext } from './context';
  import { derived, writable } from 'svelte/store';

  /**
   * States
   */

  let duration = writable(0);
  let currentTime = writable(0);
  let volume = writable(1);
  let muted = writable(false);
  let ended = writable(false);
  let repeat = writable(false);
  let playbackRate = writable(1);
  let paused = writable(true);
  let playing = derived(paused, ($paused) => !$paused);

  let audio: HTMLAudioElement | undefined;

  /**
   * Reactives
   */

  /**
   * Mounted
   */
  onMount(() => {
    $duration = audio?.duration;
  });
  /**
   * Context
   */

  setAudioContext({
    currentTime,
    repeat,
    duration,
    playing,
    volume,
    muted,
    ended,
    paused,
    playbackRate,
    seekBy: (n: number) => {
      $currentTime += n;
    },
    seekTo: (t: number) => {
      $currentTime = t;
    }
  });
</script>

<div>
  <audio
    bind:volume={$volume}
    bind:duration={$duration}
    bind:currentTime={$currentTime}
    bind:muted={$muted}
    bind:paused={$paused}
    bind:ended={$ended}
    bind:playbackRate={$playbackRate}
    loop={$repeat}
    bind:this={audio}
    src="https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav"
    style="display: none;"
  />

  <slot />
</div>
