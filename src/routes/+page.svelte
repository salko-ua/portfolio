<script>
  import { asset } from "$app/paths";
</script>

<div
  class="bg-black bg-[url(/background.jpg)] min-h-screen h-max w-screen bg-no-repeat bg-top p-2 pt-5"
>
  <div
    class="grid grid-cols-1 md:grid-cols-3 w-full md:w-230 gap-4 m-auto justify-items-center"
  >
    <!-- header -->
    <div
      class="flex max-xs:flex-wrap bg-transparent h-50 md:col-span-2 w-full xs:items-center p-4"
    >
      <!-- avatar -->
      <div class="row-span-2 max-xs:h-24 max-xs:w-24 h-42 w-42 bg-white mr-4">
        <img alt="portrayal" src={asset("/pfp.jpg")} class="size-full" />
      </div>
      <!-- user information -->

      <div class="text-white h-42">
        <!-- name -->
        <div class="text-xl font-light w-fit">SALO</div>

        <div class="text-xs text-gray-400 w-full">
          Miami, Florida, United States
        </div>
        <div class="text-xs text-gray-400 w-fit">Software Developer</div>
        <div class="text-xs w-fit">
          <a href="https://matias.ma/nsfw">https://matias.ma/nsfw</a>
        </div>
      </div>
    </div>
    <div class="bg-black/25 backdrop-blur-sm h-50 md:col-span-1 w-full"></div>
    <div class="bg-black/25 backdrop-blur-sm h-300 md:col-span-2 w-full"></div>
    <div class="bg-black/25 backdrop-blur-sm h-300 md:col-span-1 w-full"></div>
  </div>
</div>
