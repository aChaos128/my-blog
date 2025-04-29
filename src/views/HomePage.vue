<template>
  <div class="home">
    <h1>首页</h1>
    <p>欢迎来到我的博客！</p>
  </div>
  <template>
  <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>

  <div class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </div>

  <div class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </div>

  <div>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </div>
</template>



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

<style >
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


<style >
.click-effect {
  position: fixed;
  width: 50px;
  height: 50px;
  background: rgb(68, 65, 65);
  border-radius: 50%;
  transform: translate(100px,100px);
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
