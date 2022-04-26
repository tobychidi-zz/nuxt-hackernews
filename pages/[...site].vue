<template>
   <div class="news-view">
      <div class="news-list-nav">
         <a v-if="page > 1" class="page-link" :href="`${type}?page=${page - 1}`" aria-label="Previous Page">
            &lt; prev
         </a>
         <span v-else class="page-link disabled" aria-hidden="true">&lt; prev</span>

         <span>page {{ page }}</span>
         <!-- sometimes the length isn't 30? -->
         <a v-if="stories.length >= 28" class="page-link" :href="`${type}?page=${page + 1}`" aria-label="Next Page">
            more &gt;
         </a>
         <span v-else class="page-link" aria-hidden="true">more &gt;</span>
      </div>
      <main class="news-list">
         <ul>
            <LazyStory v-for="(story, key) in stories" :key="key" :story="story" />
         </ul>
      </main>
   </div>
</template>

<script setup lang="ts">
const route = useRoute()
const type = route.params.site[0] ?? "top";
console.log(type)
let pageID: string = "1"
if (route.query.page) pageID = route.query.page.toString()
const page: number = parseInt(pageID);
const stories = await useGetStories(type, page) as [];
</script>
