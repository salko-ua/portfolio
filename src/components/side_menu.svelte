<script>
  import { portfolioData } from "$lib/data";
</script>

<div
  class="
    min-h-10
    h-fit
    w-full
    lg:bg-black/40
    lg:backdrop-blur-sm
    col-span-1
    lg:row-span-999999
    max-lg:order-1
  "
>
  <div
    class="
      grid
      grid-cols-2
      xs:grid-cols-3
      sm:grid-cols-4
      lg:grid-cols-1
      lg:pt-4
      lg:pb-4
      gap-2
      pl-2
      pr-2
      text-sm
      text-shadow-lg
      font-normal
      text-white/95
      max-lg:justify-items-center
      lg:space-y-2
    "
  >
    <div
      class="
        mt-0
        w-full
        max-lg:bg-black/40
        max-lg:backdrop-blur-sm
        max-lg:p-2
        text-cyan-300
        font-extralight
        col-span-2
        xs:col-span-3
        sm:col-span-4
        lg:col-span-1
        text-lg
      "
    >
      <a href="/" class="flex h-full items-center">
        <span class="mr-2 ml-2 text-lg">Currently Hired</span>
      </a>
    </div>

    <!-- button1 -->
    <div class="w-full max-lg:bg-black/50 max-lg:backdrop-blur-sm max-lg:p-2">
      <a href={portfolioData.sideMenu.projects.link} class="flex h-full items-center">
        <span class="mr-2 ml-2">Projects</span>
        <span class="text-gray-400">{portfolioData.sideMenu.projects.count}</span>
      </a>
    </div>
    <div class="w-full max-lg:bg-black/50 max-lg:backdrop-blur-sm max-lg:p-2">
      <a href={portfolioData.sideMenu.artwork.link} class="flex h-full items-center">
        <span class="mr-2 ml-2">Artwork</span>
        <span class="text-gray-400">{portfolioData.sideMenu.artwork.count}</span>
      </a>
    </div>

    <div class="w-full max-lg:bg-black/40 max-lg:backdrop-blur-sm max-lg:p-2">
      <a href={portfolioData.sideMenu.languages.link} class="flex h-full items-center">
        <span class="mr-2 ml-2">Languages</span>
        <span class="text-gray-400">{portfolioData.sideMenu.languages.count}</span>
      </a>
    </div>
    <div class="w-full max-lg:bg-black/40 max-lg:backdrop-blur-sm max-lg:p-2">
      <a href={portfolioData.sideMenu.reviews.link} class="flex h-full items-center">
        <span class="mr-2 ml-2">Reviews</span>
        <span class="text-gray-400">{portfolioData.sideMenu.reviews.count}</span>
      </a>
    </div>
    <div class="w-full max-lg:bg-black/40 max-lg:backdrop-blur-sm max-lg:p-2">
      <a href={portfolioData.sideMenu.anime.link} class="flex h-full items-center">
        <span class="mr-2 ml-2">Anime</span>
        <span class="text-gray-400"></span>
      </a>
    </div>
    <div class="w-full max-lg:bg-black/40 max-lg:backdrop-blur-sm max-lg:p-2">
      <a href={portfolioData.sideMenu.discord.link} class="flex h-full items-center">
        <span class="mr-2 ml-2">Discord</span>
        <span class="text-gray-400"></span>
      </a>
    </div>
    <div class="w-full max-lg:bg-black/40 max-lg:backdrop-blur-sm max-lg:p-2">
      <a href={portfolioData.sideMenu.telegram.link} class="flex h-full items-center">
        <span class="mr-2 ml-2">Telegram</span>
        <span class="text-gray-400"></span>
      </a>
    </div>
    <div class="w-full max-lg:bg-black/40 max-lg:backdrop-blur-sm max-lg:p-2">
      <a href={portfolioData.sideMenu.steam.link} class="flex h-full items-center">
        <span class="mr-2 ml-2">Steam</span>
        <span class="text-gray-400"></span>
      </a>
    </div>
  </div>
</div>
