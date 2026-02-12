<script>
  import Header from "../components/header.svelte";
import Stats from "../components/stats.svelte";
import SideMenu from "../components/side_menu.svelte";
</script>

<div
  class="h-max min-h-screen w-screen bg-black
    bg-[url(/background.jpg)] bg-top bg-no-repeat p-1 pt-5"
>
  <div
    class="
      m-auto
      grid
      grid-cols-1 lg:grid-cols-3
      w-full
      lg:w-230
      justify-items-center gap-4
     "
  >
    <Header />
    <Stats />
    <div
      class="
        h-fit
        min-h-400
        w-full
        bg-black/40
        col-span-1
        lg:col-span-2
        max-lg:order-2
      "
    >
      <div></div>
    </div>
    <SideMenu />
  </div>
</div>
