<template>
    <nav>
      <div v-if="isAuthenticated">
        <span>{{ username }}</span>
        <button @click="logout">Logout</button>
      </div>
      <div v-else>
        <nuxt-link to="/login">Login</nuxt-link>
        <nuxt-link to="/signup">Signup</nuxt-link>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { useAuth } from '~/composables/useAuth';
  
  const { isAuthenticated, username, logout } = useAuth();
  </script>