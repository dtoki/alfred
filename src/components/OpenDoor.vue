<template>
    <div id="app">
        <button @click="openDoor">Open Door</button>
    </div>
</template>

<script>
import axios from 'axios';
import messaging from '@/firebase/init';

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
    },
    async mounted() {
        try {
            // Request notification permission from the user
            const permission = await Notification.requestPermission();
            this.notificationPermissionGranted = permission === 'granted';

            if (permission === 'granted') {
                // Get the FCM registration token
                const token = await messaging.getToken({ vapidKey: process.env.VAPID_KEY });
                console.log('FCM Token:', token);
                // ... Send the token to your backend server

                // Handle foreground incoming messages
                messaging.onMessage((payload) => {
                    console.log('Message received', payload);
                    // ... Handle the message, e.g., update the UI
                });

                // [Optional] If you have service worker logic, include that here
            } else {
                console.error('Unable to get permission to notify.');
            }
        } catch (err) {
            console.error('An error occurred while getting notification permission or FCM token:', err);
        }
    },
};
</script>

<style>
/* Your styles here */
</style>
