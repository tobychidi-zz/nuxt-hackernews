<template>
   <div>

      <Head>
         <Meta charset="UTF-8" />
         <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <Meta name="description" content="Nuxt Hackernews" />
         <Title>NuxtJs - Hacker News</Title>
      </Head>
      <NuxtLoading ref="loading" />
      <header class="header">
         <nav class="inner">
            <NuxtLink to="/">
               <strong>HN</strong>
            </NuxtLink>
            <NuxtLink to="/new">
               <strong>New</strong>
            </NuxtLink>
            <NuxtLink to="/show">
               <strong>Show</strong>
            </NuxtLink>
            <NuxtLink to="/ask">
               <strong>Ask</strong>
            </NuxtLink>
            <NuxtLink to="/job">
               <strong>Jobs</strong>
            </NuxtLink>
            <a class="github" href="https://github.com/nuxt/framework" target="_blank" rel="noreferrer">
               Built with Nuxt JS
            </a>
         </nav>
      </header>
      <slot></slot>
   </div>
</template>

<script lang="ts" setup>
const loading = ref(null)

const nuxtApp = useNuxtApp()

nuxtApp.hook("page:start", () => {
   loading.value.start()
})

nuxtApp.hook("page:finish", () => {
   loading.value.finish()
   window.scrollTo(0, 0)
})
</script>

<style>
@import "@/assets/css/global.css";
</style>