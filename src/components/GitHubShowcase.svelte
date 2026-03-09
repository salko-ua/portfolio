<script lang="ts">
  import { portfolioData } from "$lib/data";
  export let title: string;
  export let link: string;
  export let altText: string;
</script>

<div
  class="p-3 h-fit text-sm font-light text-white min-h-10 w-full bg-black/40 backdrop-blur-sm col-span-1 lg:col-span-2 max-lg:order-2"
>
  {title}
  <a href={link}>
    <img src={portfolioData.githubShowcase.imageSrc} alt={altText} />
  </a>
</div>
