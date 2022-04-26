<template>
   <Head>
      <Meta charset="UTF-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Meta name="description" content="Nuxt Hackernews" />
      <Title>NuxtJs - Hacker News</Title>
   </Head>
   <header class="header">
      <nav class="inner">
         <a href="/">
            <strong>HN</strong>
         </a>
         <a href="/new">
            <strong>New</strong>
         </a>
         <a href="/show">
            <strong>Show</strong>
         </a>
         <a href="/ask">
            <strong>Ask</strong>
         </a>
         <a href="/job">
            <strong>Jobs</strong>
         </a>
         <a class="github" href="https://github.com/withastro/astro" target="_blank" rel="noreferrer">
            Built with Nuxt JS
         </a>
      </nav>
   </header>
   <slot></slot>
</template>

<style>
@import "@/assets/css/global.css"
</style>