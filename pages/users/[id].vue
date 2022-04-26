<template>
   <div class="user-view">
      <h1 v-if="user && user.error">User not found.</h1>
      <template v-else>
         <h1>User : {{ user.id }}</h1>
         <ul class="meta">
            <li><span class="label">Created:</span>{{user.created}}</li>
            <li v-if="user.about" v-html="user.about" class="about" />
         </ul>
         <p class="links">
            <a :href="`https://news.ycombinator.com/submitted?id=${user.id}`">
               submissions
            </a>
            <a :href="`https://news.ycombinator.com/threads?id=${user.id}`"> comments </a>
         </p>
      </template>
   </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const userID = route.params.id;
const user: any = await useGetUser(userID);
</script>
