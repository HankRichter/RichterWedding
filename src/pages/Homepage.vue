<template>
    <div class="homepage">
        <div class="photos-section">
            <!-- <AnimatedHeart /> -->
            <img src="/photos/Hank&Jamie-99.jpg" alt="Ice cream shot" class="photo photo1">
            <img src="/photos/Hank&Jamie-43.jpg" alt="Hanging Out" class="photo photo2">
        </div>
        
        <div class="info-section">
            <h1 class="names">
                <span class="first-name">Jaime Allcorn</span>
                <span class="ampersand">&</span>
                <span class="last-name">Hank Richter</span>
            </h1>
            <p class="date">July 25, 2026</p>
            <p class="location">Detroit, MI</p>
            
            <div class="countdown">
                <div class="countdown-item">
                    <span class="number">{{ days }}</span>
                    <span class="label">Days</span>
                </div>
                <div class="countdown-item">
                    <span class="number">{{ hours }}</span>
                    <span class="label">Hours</span>
                </div>
                <div class="countdown-item">
                    <span class="number">{{ minutes }}</span>
                    <span class="label">Minutes</span>
                </div>
                <div class="countdown-item">
                    <span class="number">{{ seconds }}</span>
                    <span class="label">Seconds</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AnimatedHeart from '../components/AnimatedHeart.vue'

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

function updateCountdown() {
    const weddingDate = new Date('2026-07-25').getTime()
    const now = new Date().getTime()
    const distance = weddingDate - now
    
    days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
}

onMounted(() => {
    updateCountdown()
    setInterval(updateCountdown, 1000)
})
</script>

<style scoped>
.homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    margin-bottom: 100px;
}

.photos-section {
    position: relative;
    width: 850px;
    height: 600px;
    margin-bottom: 2rem;
    margin-top: 2rem;
}

.photo {
    position: absolute;
    width: 450px;
    height: 500px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.photo1 {
    left: 0;
    top: 50px;
    z-index: 2;
}

.photo2 {
    right: 0;
    top: 0;
    z-index: 3;
}

.info-section {
    text-align: center;
    max-width: 600px;
}

.names {
    font-size: 3rem;
    color: #e91e63;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.first-name,
.ampersand,
.last-name {
    display: inline;
    white-space: nowrap;
}

.date {
    font-size: 1.5rem;
    color: #666;
    margin: 0.5rem 0;
}

.location {
    font-size: 1.2rem;
    color: #999;
    margin-bottom: 2rem;
}

.countdown {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
    flex-wrap: wrap;
}

.countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 8px;
    min-width: 80px;
}

.number {
    font-size: 2rem;
    font-weight: bold;
    color: #e91e63;
}

.label {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.5rem;
}

@media (max-width: 768px) {
    .homepage {
        padding: 1rem;
    }

    .photos-section {
        width: 100%;
        height: 300px;
    }
    
    .photo {
        width: 55%;
        height: 250px;
    }
    
    .photo1 {
        left: 0;
        top: 25px;
    }
    
    .photo2 {
        right: 0;
        top: 0;
    }
    
    .names {
        flex-direction: column;
        font-size: 2rem;
        gap: 0;
    }
    
    .date {
        font-size: 1.2rem;
    }
    
    .countdown {
        gap: 0.5rem;
    }
    
    .countdown-item {
        min-width: 70px;
        padding: 0.75rem;
    }
    
    .number {
        font-size: 1.5rem;
    }
}
</style>