<script>
  import Header from "../components/header.svelte";
  import Stats from "../components/stats.svelte";
  import SideMenu from "../components/side_menu.svelte";
  export let userVideo = true;
  export let src = "/background.jpg";
  export let videoSrc = "/background.mp4";
</script>

<div
  class="relative h-max min-h-screen w-screen bg-black overflow-x-hidden justify-center items-center"
>
  {#if userVideo}
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute z-0 left-1/2 -translate-x-1/2 h-full w-[1920px] max-2xl:object-cover object-top"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  {:else}
    <div
      class=" absolute z-0 left-1/2 -translate-x-1/2 h-full w-[1920px] bg-top bg-no-repeat"
      style="background-image: url({src})"
    ></div>
  {/if}

  <div
    class="relative pt-5 z-10 m-auto grid grid-cols-1 lg:grid-cols-3 w-full lg:w-230 justify-items-center gap-4"
  >
    <Header />
    <Stats />
    <div
      class=" p-3 h-fit text-white min-h-10 w-full bg-black/40 backdrop-blur-sm col-span-1 lg:col-span-2 max-lg:order-2"
    >
      <img
        class=""
        src="https://raw.githubusercontent.com/salko-ua/salko-ua/main/dark_mode.svg"
        alt="Dark Mode Toggle"
      />
    </div>
    <SideMenu />
  </div>
</div>
