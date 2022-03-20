<script lang="ts">
  import { onMount } from 'svelte';
  import { setAudioContext } from './context';
  import { derived, writable } from 'svelte/store';

  /**
   * Props
   */

  export let src: string;
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
   * Methods
   */

  const seekBy = (n: number) => {
    $currentTime += n;
  };

  const seekTo = (t: number) => {
    $currentTime = t;
  };

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
    seekBy,
    seekTo
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
    {src}
    style="display: none;"
  />

  <slot />
</div>
