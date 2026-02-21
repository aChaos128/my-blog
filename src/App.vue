<template>
  <div class="app-shell">
    <header class="sticky-header">
      <div class="brand">Nebula Blog</div>
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我</router-link>
      </nav>
    </header>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #0f172a;
  background: radial-gradient(circle at top left, #e0ecff, #f7f9ff 42%, #ffffff 75%);
}

.app-shell {
  min-height: 100vh;
}

.sticky-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px clamp(18px, 5vw, 60px);
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.78);
  border-bottom: 1px solid #e5e7eb;
}

.brand {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.4px;
}

.sticky-header nav {
  display: flex;
  gap: 10px;
}

.sticky-header a {
  color: #334155;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 10px;
  font-weight: 600;
}

.sticky-header a:hover {
  background: #eff6ff;
  color: #1d4ed8;
}

.sticky-header a.router-link-exact-active {
  background: #dbeafe;
  color: #1d4ed8;
}

.main-content {
  padding: clamp(18px, 4vw, 40px) clamp(18px, 5vw, 60px) 60px;
}
</style>
