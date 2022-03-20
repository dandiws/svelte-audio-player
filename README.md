
# Svelte Audio Player

Component that wraps html audio tag for building custom audio player.

## Installation

```sh
npm install svelte-audio-player
```

or using yarn

```sh
yarn add svelte-audio-player
```

## Usage

```svelte
<script>
  import { AudioPlayer } from 'svelte-audio-player'
</script>

<AudioPlayer src="/BabyElephantWalk60.wav">
  <MyAudioPlayer />
</AudioPlayer>
```

`MyAudioPlayer.svelte`

```svelte
<script>
  import { getAudioContext } from 'svelte-audio-player'

  const { 
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
  } = getAudioContext()
</script>

<!-- Your custom audio player component -->
```

Full documentation please visit [Svelte Audio Player's website](https://svelte-audio-player.vercel.app/)