<script>
  import { asset } from "$app/paths";

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
          max-lg:order-2 lg:flex-col max-lg:p-2 max-lg:pl-4 max-lg:pr-4 max-lg:bg-black/40 max-lg:backdrop-blur-sm"
  >
    <div
      class="flex h-fit max-lg:h-full items-center gap-2 text-4xl
            font-extralight tracking-tight p-1 pr-4 pl-4"
    >
      <span class="font-light text-2xl"><a href="/age">Age</a></span>
      <div
        class="flex h-8 w-8 text-center items-center justify-center
            rounded-full border-[2px] border-sky-500
            font-light text-sm"
      >
        <span>19</span>
      </div>
    </div>
    <div
      class="flex h-fit items-center gap-3 rounded-sm
            p-1 pr-4 pl-4 lg:bg-black/40 lg:w-full"
    >
      <img alt="100+" src={asset("/100+.png")} class="h-[56px]" />
      <div class="flex flex-col">
        <span class="text-sm leading-tight font-light"
          ><a href="/projects">Projects</a></span
        >
        <span class="text-xs text-gray-400">446 XP</span>
      </div>
    </div>
  </div>
  <div class=" max-lg:order-1">
    <ContactMe />
  </div>
</div>
