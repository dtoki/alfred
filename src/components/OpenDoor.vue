<template>
    <div id="app">
        <button @click="openDoor">Open Door</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'App',
    methods: {
        async openDoor() {
            try {
                const response = await axios.post('/api/open-door');
                alert(response.data.message);
            } catch (error) {
                alert(error.response ? error.response.data.error : 'Failed to reach the server');
            }
        }
    }
};
</script>

<style>
/* Your styles here */
</style>
