<script>
  import { asset } from "$app/paths";
</script>

<div
  class="
    flex
    max-xs:h-fit
    h-50 w-full p-2
    lg:col-span-2
  "
>
  <!-- avatar -->
  <div
    class="
      min-h-42
      min-w-42
      h-42
      w-42
      max-xs:min-h-24
      max-xs:min-w-24
      max-xs:h-24
      max-xs:w-24
      mr-4
    "
  >
    <img alt="portrayal" src={asset("/pfp.jpg")} class="size-full" />
  </div>
  <!-- name -->
  <div class="flex flex-col">
    <div class="text-white text-3xl">SALO</div>
    <div class="text-gray-400 text-lg mb-6">Volodymyr, Volyn', Ukraine 🇺🇦</div>
    <div class="text-gray-400 text-lg">
      Software Developer, Automation, Artist
    </div>
    <div class="text-gray-100">
      <a href="https://github.com/salko-ua/">GitHub link</a>
    </div>
  </div>
</div>
