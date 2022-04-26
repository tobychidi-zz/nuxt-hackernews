<template>
   <li class="news-item">
      <span class="score">{{ story.points }}</span>
      <span class="title">
         <template v-if="story.url && !story.url.startsWith(' item?id=')">
            <a :href="story.url" target="_blank" rel="noreferrer">
               {{ story.title }}
            </a>
            <span class="host">{{story.domain}}</span>
         </template>
         <a v-else :href="`/item/${story.id}`">{{ story.title }}</a>
      </span>
      <br />
      <span class="meta">
         <template v-if="story.type !== 'job'">
            by <a :href="`/users/${story.user}`">{{ story.user }}</a>{{ story.time_ago }}
            <a :href="`/stories/${story.id}`">
               {{ story.comments_count ? `${story.comments_count} comments` : "discuss" }}
            </a>
         </template>

         <a v-else :href="`/stories/${story.id}`">{{story.time_ago}}</a>
      </span>

      <span v-if="story.type !== 'link'" class="label">{{story.type}}</span>
   </li>
</template>

<script setup lang="ts">
const props = defineProps<{
   story: any;
}>();

// console.log(props.story)
</script>

<style scoped></style>
