<template>
   <li class="comment">
      <div class="by">
         <NuxtLink :to="`/users/${comment.user}`">{{ comment.user }}</NuxtLink>
         {{ comment.time_ago }}
      </div>
      <div class="text" v-html="comment.content" />
      <template v-if="comment.comments.length">
         <Toggle>
            <template v-for="(nested, key) in comment.comments">
               <LazyComment :comment="nested" />
            </template>
         </Toggle>
      </template>
   </li>
</template>

<script setup lang="ts">
const props = defineProps<{
   comment: any
}>();
</script>

<style scoped>
</style>