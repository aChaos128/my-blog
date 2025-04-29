<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于我</router-link>
    </nav>
    <router-view></router-view>  <!-- 这里显示路由对应的组件 -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  margin: 20px;
}

router-link {
  margin: 10px;
  text-decoration: none;
  color: blue;
}

router-link:hover {
  text-decoration: underline;
}
</style>
