<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuth } from '~/composables/useAuth';
  
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();
  
  const loginUser = async () => {
    try {
      const response = await $fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        body: {
          username: username.value,
          password: password.value,
        },
      });
  
      login(response.token, response.user);
      router.push('/');
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };
  </script>