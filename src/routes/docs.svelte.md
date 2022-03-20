---
layout: docs
packageName: svelte-audio-player
---

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

## `Audio Player`

This component wraps a html `audio` tag and provide context for its children to control the state of audio player.

### Usage

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

### Props

| prop  | type     | description                      |
| ----- | -------- | -------------------------------- |
| `src` | `string` | required, source of audio player |

## `getAudioContext()`

Returns context object of type `AudioContext` of an audio player.
This context consist of reactive stores and methods to control your custom audio player.

## `AudioContext`

| property       | type                  | description                                                                                                   |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------------------- |
| `currentTime`  | `Writable<number>`    | controls current time of audio player                                                                         |
| `repeat`       | `Writable<boolean>`   | controls if audio player will repeat after finish playing                                                     |
| `volume`       | `Writable<number>`    | controls volume of audio player with value beetwen 0 and 1                                                    |
| `muted`        | `Writable<boolean>`   | controls if audio player muted or not                                                                         |
| `paused`       | `Writable<booolean>`  | controls if audio player paused or not, use this store to controls play and pause button of your audio player |
| `playbackRate` | `Writable<number>`    | controls playback speed of audio player where `1` is normal speed                                             |
| `playing`      | `Readable<boolean>`   | get audio playing status, equivalent with negate of `paused` store                                            |
| `duration`     | `Readable<number>`    | get duration of audio track in second                                                                         |
| `ended`        | `Readable<boolean>`   | get if audio player ended                                                                                     |
| `seekBy`       | `(t: number) => void` | Update `currentTime` by adding  `t` seconds                                                                   |
| `seekTo`       | `(t: number) => void` | Setting `currentTime` to equal `t`, this methods is equivalent with setting `currentTime` store directly      |

## Utilities

- `toggle(store: Writable<boolean>) => void`

  Easly toggle boolean store

- `toHHMMSS(sec_num: number) => string`

  Format number in seconds as `hh:mm:ss` or `mm:ss` string


  **Example usage**


```svelte
<script>
  import { toggle, toHHMMSS } from 'svelte-audio-player/utils'
  const { paused, currentTime, duration } from 'svelte-audio-player'
</script>

<button on:click={() => toggle(paused)}>
  {#if $paused}
    Play
  {:else}
    Pause
  {/if}
</button>

<span>
  {toHHMMSS($currentTime)}/{toHHMMSS($duration)}
</span>
```
