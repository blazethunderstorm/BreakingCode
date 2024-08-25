<template>
    <div>
        Home
        {{ username }}
    </div>
    {{ k }}
    <input type="text" v-model="text">
    <button @click="NEW" > click me</button>
</template>

<script setup>
import { useAuth } from '~/composables/useAuth';

const { isAuthenticated, username, logout } = useAuth();
const k = ref({})
const text = ref("")

</script>