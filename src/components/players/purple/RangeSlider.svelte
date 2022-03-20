<script lang="ts">
  export let min = 0;
  export let max = 1;
  export let value;
  export let step = 0.01;
</script>

<div class="relative flex items-center flex-1">
  <div class="h-2 w-full rounded-sm bg-purple-300 absolute" />
  <div
    class="h-2 rounded-sm bg-gradient-to-r from-purple-300 to-purple-500 absolute"
    style={`width: ${(value * 100) / max}%;`}
  />
  <input
    bind:value
    {min}
    {max}
    {step}
    type="range"
    class="w-full absolute h-2 appearance-none bg-transparent outline-none"
  />
</div>

<style>
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    @apply w-2 h-2 cursor-pointer;
  }

  input[type='range']::-webkit-slider-thumb:hover {
    @apply bg-purple-600;
  }
</style>
