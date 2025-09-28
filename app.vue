<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <NavLinks />

    <!-- Main Content (takes remaining space) -->
    <div class="flex-1">
      <NuxtPage />
    </div>

    <!-- Footer (always at bottom, never overlaps) -->
    <FooterInHomePage />
  </div>
</template>

<script setup>
import NavLinks from "./components/NavLinks.vue";
import FooterInHomePage from "./components/FooterInHomePage.vue";

// Set up favicon and meta tags
useHead({
  title: 'Gita Unlocked - Success Sutras from Bhagavad Gita',
  meta: [
    { name: 'description', content: 'Discover timeless wisdom from the Bhagavad Gita for modern success. Join our course designed for students and young professionals seeking clarity, purpose, and inner strength.' },
    { name: 'keywords', content: 'Bhagavad Gita, spiritual wisdom, success, youth, students, meditation, life guidance' },
    { name: 'author', content: 'Gita Unlocked' },
    { property: 'og:title', content: 'Gita Unlocked - Success Sutras from Bhagavad Gita' },
    { property: 'og:description', content: 'Discover timeless wisdom from the Bhagavad Gita for modern success.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Gita Unlocked - Success Sutras from Bhagavad Gita' },
    { name: 'twitter:description', content: 'Discover timeless wisdom from the Bhagavad Gita for modern success.' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ]
});
</script>

<style scoped>
main {
  padding-bottom: 2rem; /* ensures spacing above footer */
}

nav a {
  transition: color 0.3s;
}
</style>
