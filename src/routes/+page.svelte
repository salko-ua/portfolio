<script>
  import Header from '../components/header.svelte';
import Stats from '../components/stats.svelte';
</script>

<div
  class="h-max min-h-screen w-screen bg-black
    bg-[url(/background.jpg)] bg-top bg-no-repeat p-2 pt-5"
>
  <div
    class="m-auto grid w-full grid-cols-1
      justify-items-center gap-4 lg:w-230 lg:grid-cols-3"
  >
    <Header />
    <Stats />
  </div>
</div>
