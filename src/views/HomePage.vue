<template>
  <div class="home" >
    nihao
  </div>

</template>


<script>
export default {
  name: 'HomePage',
};
</script>

<script setup>
import { onMounted, onUnmounted } from 'vue';

function createClickEffect(e) {
  const effect = document.createElement('div');
  effect.className = 'click-effect';
  effect.style.left = `${e.clientX}px`;
  effect.style.top = `${e.clientY}px`;
  document.body.appendChild(effect);

  setTimeout(() => {
    effect.remove();
  }, 1000);
}

onMounted(() => {
  window.addEventListener('click', createClickEffect);
});

onUnmounted(() => {
  window.removeEventListener('click', createClickEffect);
});
</script>

<style>
@keyframes floatUp {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -150%) scale(1.5);
  }
}
</style>


<style>
.click-effect {
  position: fixed;
  width: 15px;
  height: 15px;
  background-image: linear-gradient(121deg, #e64c10, #f07810, #f79f0f, #fdc30f);
  border-radius: 50%;
  transform: translate(100px, 100px);
  pointer-events: none;
  animation: pop 1s forwards;
  z-index: 9999;
}

@keyframes pop {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  100% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}

.home {
  text-align: center;
}
</style>
