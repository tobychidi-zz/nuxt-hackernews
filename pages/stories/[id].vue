<template>
   <div v-if="story" class="item-view">
      <div class="item-view-header">
         <NuxtLink :to="story.url" target="_blank">
            <h1>{{ story.title }}</h1>
         </NuxtLink>
         <span v-if="story.domain" class="host">{{ story.domain }}</span>
         <p class="meta">
            {{ story.points }} points | by{{ " " }}
            <NuxtLink :to="`/users/${story.user}`">{{ story.user }}</NuxtLink>{{ " " }}
            {{ story.time_ago }} ago
         </p>
      </div>
      <div class="item-view-comments">
         <p class="item-view-comments-header">
            {{ story.comments_count
                  ? story.comments_count + " comments"
                  : "No comments yet."
            }}
         </p>
         <ul class="comment-children">
            <LazyComment v-for="(comment, key) in story.comments" :key="key" :comment="comment" />
         </ul>
      </div>
   </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const storyID = computed(() => route.params.id)
const story = await useGetStory(storyID.value)
</script>