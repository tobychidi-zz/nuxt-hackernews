<template>
   <div class="toggle" :class="{ open: open }">
      <a @click="() => (open = !open)">
         {{ open ? " [-]" : "[+] comments collapsed" }}
      </a>
   </div>
   <ul
      class="comment-children"
      :style="{
         display: open ? 'block' : 'none',
      }"
   >
      <slot></slot>
   </ul>
</template>

<script setup lang="ts">
const open = ref<boolean>(true);
</script>

<style scoped></style>
