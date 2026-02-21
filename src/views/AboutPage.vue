<template>
  <section class="about-page">
    <div class="intro card">
      <h1>你好，我是一名热爱创作的开发者 👋</h1>
      <p>
        这个博客用来持续记录我在前端工程、产品设计和内容写作方面的实践。
        我希望它不仅是展示页，更是一个不断迭代的数字作品。
      </p>
    </div>

    <div class="grid">
      <div class="card">
        <h2>我在做什么</h2>
        <ul>
          <li>构建更流畅的前端交互体验</li>
          <li>整理可复用的个人知识库</li>
          <li>每周至少输出 1 篇高质量笔记</li>
        </ul>
      </div>

      <div class="card">
        <h2>技能栈</h2>
        <div class="tags">
          <span>Vue 3</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>UI/UX</span>
          <span>内容写作</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.about-page {
  max-width: 920px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  padding: 20px;
}

.intro {
  margin-bottom: 16px;
}

h1,
h2 {
  margin: 0 0 10px;
}

p,
li {
  color: #475467;
  line-height: 1.8;
}

ul {
  margin: 0;
  padding-left: 20px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tags span {
  border-radius: 999px;
  border: 1px solid #cfdffb;
  background: #f5f9ff;
  color: #1e3a8a;
  padding: 6px 10px;
  font-size: 13px;
}
</style>
