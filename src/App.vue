<script setup>
import NavBar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router'; // Ist sowas wie Outlet in React
</script>

<template>
  <NavBar />
  <RouterView />
</template>
