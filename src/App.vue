<script setup>
import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>