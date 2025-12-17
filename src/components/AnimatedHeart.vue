<template>
    <div class="heart-container">
        <!-- SVG Heart -->
        <svg viewBox="0 0 100 100" class="heart">
            <path d="M50,90 m20,70 10,50 10,35 m10,20 20,10 30,10 m40,10 50,20 50,20 m50,20 60,10 70,10 m80,10 90,20 90,35 C90,50 80,70 50,90 Z" 
                  fill="currentColor" />
        </svg>

        <!-- Sparkles -->
        <div v-for="sparkle in sparkles" :key="sparkle.id" class="sparkle" :style="sparkle.style">
            ✨
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sparkles = ref([])

function generateSparkles() {
    const sparkleArray = []
    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2  // Distribute around circle
        const distance = 120  // Distance from center
        const x = Math.cos(angle) * distance
        const y = Math.sin(angle) * distance
        
        sparkleArray.push({
            id: i,
            style: {
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${i * 0.1}s`,
                animation: 'sparkleGlow 1.5s ease-in-out infinite'
            }
        })
    }
    sparkles.value = sparkleArray
}

onMounted(() => {
    generateSparkles()
})
</script>

<style scoped>
.heart-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 200px;
    height: 200px;
}

.heart {
    width: 100%;
    height: 100%;
    color: #e91e63;
    animation: heartAppear 1s ease-out;
}

@keyframes heartAppear {
    from {
        opacity: 0;
        transform: scale(0.5);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.sparkle {
    position: absolute;
    font-size: 1.5rem;
    animation: sparkleGlow 1.5s ease-in-out infinite;
}

@keyframes sparkleGlow {
    0%, 100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.5);
    }
    50% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}
</style>