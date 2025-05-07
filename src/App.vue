<template>
  <div class="app-container">
    <header class="sticky-header">
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我</router-link>
      </nav>
    </header>
    <main class="main-content">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* 重置默认样式 */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  
}

/* 全局容器 */
.app-container {
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
}

/* Sticky Header 样式 */
.sticky-header {
  position: sticky;
  top: 0;
  max-width: 100%; /* 确保占满屏幕宽度 */
  background-color: #ffffff;
  color: black;
  padding: 1% ;
  box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.107),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.105),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.098),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.089),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.08),
  100px 100px 80px rgba(0, 0, 0, 0.07);
  z-index: 1000; /* 确保在其他内容上方 */
}

.sticky-header nav {
  display: flex;
  justify-content: space-around;
}

.sticky-header a {
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.sticky-header a:hover {
  color: #4a90e2;
}

/* 主内容样式 */
.main-content {
  padding: 20px;
  font-size: 18px;
  line-height: 1.6;
}
</style>