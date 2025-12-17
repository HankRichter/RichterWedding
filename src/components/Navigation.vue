<template>
    <div class="navigation">
        <div class="nav-title">Jaime & Hank</div>
        <button class="menu-toggle" @click="isOpen = !isOpen">
            ☰
        </button>
        <div class="nav-links" :class="{ active: isOpen }">
            <RouterLink to="/" @click="isOpen = false">Home</RouterLink>
            <RouterLink to="/schedule" @click="isOpen = false">Schedule</RouterLink>
            <RouterLink to="/travel" @click="isOpen = false">Travel</RouterLink>
            <RouterLink to="/wedding-party" @click="isOpen = false">Wedding Party</RouterLink>
            <RouterLink to="/registry" @click="isOpen = false">Registry</RouterLink>
            <RouterLink to="/gallery" @click="isOpen = false">Gallery</RouterLink>
            <RouterLink to="/faq" @click="isOpen = false">FAQ</RouterLink>
        </div>
    </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'

  const isOpen = ref(false)
</script>

<style scoped>
.navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  top: 0;
  width: 100%;
  background-color: #f5f5f5;
  z-index: 100;
  padding: 2rem 1rem;
  border-bottom: 1px solid #ddd;
}

.nav-title {
  font-size: 2rem;
  font-weight: bold;
  color: #e91e63;
  font-family: 'Georgia', serif;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

a {
  text-decoration: none;
  color: inherit;
  position: relative;
  padding-bottom: 0.5rem;
  transition: color 0.3s ease;
  font-family: 'Trebuchet MS', sans-serif;

}

a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #e91e63;
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}

a.router-link-active::after {
  width: 100%;
  background-color: #e91e63;
}

@media (max-width: 768px) {
  .navigation {
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
  }

  .nav-title {
    font-size: 1.2rem;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links {
    flex-direction: column;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #f5f5f5;
    z-index: 100;
  }

  .nav-links.active {
    max-height: 500px;
  }

  a {
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
    display: block;
  }

  a::after {
    display: none;
  }

  a.router-link-active {
    background-color: #ffe0e6;
  }
}
</style>