<template>
    <div>
      <h2>signup</h2>
      <form @submit.prevent="signup">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <input v-model="email" type="email" placeholder="Email" required />
  
        <button type="submit">signup</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useRuntimeConfig } from '#app';
  
  const username = ref('');
  const password = ref('');
  const email = ref('');
  const router = useRouter();
   
  
  const signup = async () => {
    try {
      const response = await $fetch("http://127.0.0.1:8000/signup", {
        method: 'POST',
        body: {
          username: username.value,
          password: password.value,
          email: email.value
        },
      });
  
      localStorage.setItem('token', response.token);
      localStorage.setItem('username', response.user.username);
  
      router.push('/');
    } catch (error) {
      console.error('Failed to signup:', error);
    }
  };
  </script>