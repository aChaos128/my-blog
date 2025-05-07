<template>
  <div ref="box" class="box">
    <img :src="imageUrl" alt="头像" class="img" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
const imageUrl = new URL('@/assets/head.jpg', import.meta.url).href

const box = ref(null)

onMounted(() => {
  gsap.from(box.value, {
    x: -200,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
})
</script>

<style scoped>
.box {
  width: 50px;
  height: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;

  box-shadow:
    12.5px 12.5px 10px rgba(0, 0, 0, 0.07),
    100px 100px 80px rgba(0, 0, 0, 0.14);
  
}
.img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow:
    12.5px 12.5px 10px rgba(0, 0, 0, 0.07),
    100px 100px 80px rgba(0, 0, 0, 0.14);
}
</style>
