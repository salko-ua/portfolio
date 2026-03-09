<script>
  import { asset } from "$app/paths";
  import { portfolioData } from "$lib/data";

  import ContactMe from "../components/contact_me.svelte";
</script>

<div
  class="flex
        h-50 w-full
        flex-col justify-between
        max-lg:h-32
        pl-2 pr-2
        lg:p-2
        text-white
        lg:col-span-1
        min-w-fit
  "
>
  <div
    class="flex items-start justify-between max-lg:justify-around gap-4
          max-lg:order-2 lg:flex-col max-lg:p-2 max-lg:pl-4 max-lg:pr-4 max-lg:bg-black/40"
  >
    <div
      class="flex h-fit max-lg:h-full items-center gap-2 text-4xl
            font-extralight tracking-tight p-1 pr-4 pl-4"
    >
      <span class="font-light text-2xl"><a href={portfolioData.stats.age.link}>Age</a></span>
      <div
        class="relative flex h-9 w-9
            rounded-full border-[2px] border-purple-500
            font-light text-lg"
      >
        <span
          class="absolute top-[50%] left-[49%] -translate-x-1/2 -translate-y-1/2"
          >{portfolioData.stats.age.value}</span
        >
      </div>
    </div>
    <div
      class="flex h-fit items-center gap-3 rounded-sm
            p-1 pr-4 pl-4 lg:bg-black/40 lg:backdrop-blur-sm lg:w-full"
    >
      <img alt="100+" src={asset("/100+.png")} class="h-[56px]" />
      <div class="flex flex-col">
        <span class="text-sm leading-tight font-light"
          ><a href={portfolioData.stats.projectsXP.link}>Projects</a></span
        >
        <span class="text-xs text-gray-400">{portfolioData.stats.projectsXP.value} XP</span>
      </div>
    </div>
  </div>
  <div class=" max-lg:order-1">
    <ContactMe />
  </div>
</div>
