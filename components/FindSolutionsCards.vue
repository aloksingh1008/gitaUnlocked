<template>
  <div class="bg-gray-100 p-4">

    <div class="text-center text-[#D61C75] font-bold text-6xl uppercase">
      find solution for...
    </div>
    <div class="flex justify-around items-center h-[32rem] bg-[#f5f5f5] relative overflow-hidden">

      <!-- Left Arrow -->
      <button @click="prevCard" class="absolute left-4 text-3xl text-gray-700 hover:text-black z-10">
        &#10094;
      </button>

      <!-- Card Wrapper -->
      <div class="flex space-x-12 transition-transform duration-500">
        <Motion v-for="(card, index) in visibleCards" :key="card.title + index" :initial="{
          opacity: 0,
          x: direction === 'right' ? 100 : -100
        }" :enter="{
      opacity: 1,
      x: 0,
      transition: { duration: 1000, ease: 'easeInOut' }
    }" :leave="{
      opacity: 0,
      x: direction === 'right' ? -100 : 100,
      transition: { duration: 1000, ease: 'easeInOut' }
    }" class="transition-transform">
          <NewCard :title="card.title" :description="card.description" :image="card.image" />
        </Motion>
      </div>

      <!-- Right Arrow -->
      <button @click="nextCard" class="absolute right-4 text-3xl text-gray-700 hover:text-black z-10">
        &#10095;
      </button>
    </div>
  </div>
</template>

<script setup>
import Card from "./Card.vue";
import NewCard from "./NewCard.vue";

const cards = ref([
  { title: 'Overthinking', description: 'The Hidden Enemy That Destorys Peace.' , image:"/2.svg"},
  { title: 'Anger', description: 'A Fire -- When uncontrolled, it burns who holds it.', image:"/1.svg" },
  { title: 'Loneliness', description: 'When Hearts Drifts furthers Than Galaxies', image:"/3.svg" }
  // { title: 'Burnout', description: 'Signs and solutions for burnout.', image:"/1.svg" },
  // { title: 'Insomnia', description: 'Sleep better with these tips.', image:"/1.svg" },
])

const currentIndex = ref(0)
const direction = ref('right')

// Show 3 cards at a time
const visibleCards = computed(() => {
  const visible = []
  for (let i = 0; i < 3; i++) {
    visible.push(cards.value[(currentIndex.value + i) % cards.value.length])
  }
  return visible
})

const nextCard = () => {
  direction.value = 'right'
  currentIndex.value = (currentIndex.value + 1) % cards.value.length
}

const prevCard = () => {
  direction.value = 'left'
  currentIndex.value =
    (currentIndex.value - 1 + cards.value.length) % cards.value.length
}

</script>