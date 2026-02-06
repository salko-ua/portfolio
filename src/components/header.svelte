<script>
  import { asset } from '$app/paths';
</script>

<div
  class="xs:items-center h-50 w-full bg-transparent p-4
        backdrop-blur-sm md:col-span-2"
>
  <!-- avatar -->
  <div
    class="max-xs:h-24 max-xs:w-24 float-left mr-4 h-42
          w-42 bg-white"
  >
    <img alt="portrayal" src={asset('/pfp.jpg')} class="size-full" />
  </div>
</div>
