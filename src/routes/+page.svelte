<script>
  import Header from "../components/header.svelte";
import Stats from "../components/stats.svelte";
import SideMenu from "../components/side_menu.svelte";
export let useVideo = true;
export let src = "/background.jpg";
export let videoSrc = "/background.mp4";
</script>

<div
  class="relative h-max min-h-screen w-screen bg-black p-1 pt-5 overflow-x-hidden"
>
  {#if useVideo}
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 z-0 h-full w-full object-contain object-top"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  {:else}
    <div
      class="absolute inset-0 z-0 h-full w-full bg-contain bg-top bg-no-repeat"
      style="background-image: url({src})"
    ></div>
  {/if}

  <div
    class="relative z-10 m-auto grid grid-cols-1 lg:grid-cols-3 w-full lg:w-230 justify-items-center gap-4"
  >
    <Header />
    <Stats />
    <div
      class="h-fit min-h-400 w-full bg-black/40 col-span-1 lg:col-span-2 max-lg:order-2"
    >
      <div></div>
    </div>
    <SideMenu />
  </div>
</div>
