<script>
  import { asset } from '$app/paths';

import ContactMe from '../components/contact_me.svelte';
</script>

<div
  class="flex
        h-50 w-full
        flex-col justify-between
        max-lg:h-35
        max-lg:bg-black/15 max-lg:backdrop-blur-sm
        p-4 font-sans text-white
        lg:col-span-1"
>
  <div
    class="flex items-start justify-between max-lg:justify-around gap-4
          max-lg:order-2 lg:flex-col max-lg:p-2 max-lg:pl-4 max-lg:pr-4 max-lg:bg-black/15 max-lg:backdrop-blur-sm"
  >
    <div
      class="flex h-fit max-lg:h-full items-center gap-2 text-4xl
            font-extralight tracking-tight"
    >
      <span class="font-mono text-3xl">Age</span>
      <span
        class="flex h-9 w-9 items-center justify-center
              rounded-full border-[2px] border-sky-500
              font-mono text-lg"
      >
        19
      </span>
    </div>

    <div
      class="flex h-fit items-center gap-3 rounded-sm
            p-1 pr-4 pl-4 lg:bg-black/15 lg:w-full"
    >
      <img alt="100+" src={asset('/100+.png')} class="h-[56px]" />
      <div class="flex flex-col">
        <span class="text-sm leading-tight font-light">Projects</span>
        <span class="text-xs text-gray-400">446 XP</span>
      </div>
    </div>
  </div>
  <div class="max-lg:mb-4 max-lg:order-1">
    <ContactMe />
  </div>
</div>
