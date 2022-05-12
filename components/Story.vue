<template>
   <li class="news-item">
      <span class="score">{{ story.points }}</span>
      <span class="title">
         <template v-if="story.url && !story.url.startsWith(' item?id=')">
            <NuxtLink :to="story.url" target="_blank" rel="noreferrer">
               {{ story.title }}
            </NuxtLink>
            <span class="host">{{ story.domain }}</span>
         </template>
         <NuxtLink v-else :to="`/item/${story.id}`">{{ story.title }}</NuxtLink>
      </span>
      <br />
      <span class="meta">
         <template v-if="story.type !== 'job'">
            by <NuxtLink :to="`/users/${story.user}`">{{ story.user }}</NuxtLink>{{ story.time_ago }}
            <NuxtLink :to="`/stories/${story.id}`">
               {{ story.comments_count ? `${story.comments_count} comments` : "discuss" }}
            </NuxtLink>
         </template>

         <NuxtLink v-else :to="`/stories/${story.id}`">{{ story.time_ago }}</NuxtLink>
      </span>

      <span v-if="story.type !== 'link'" class="label">{{ story.type }}</span>
   </li>
</template>

<script setup lang="ts">
const props = defineProps<{
   story: any;
}>();

// console.log(props.story)
</script>

<style scoped>
</style>
