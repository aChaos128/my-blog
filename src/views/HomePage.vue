<template>
  <div class="home-page">
    <section class="hero">
      <p class="hero-tip">WELCOME TO MY DIGITAL GARDEN</p>
      <h1>把灵感、技术与生活，写成长期可复利的内容。</h1>
      <p class="hero-desc">
        这是我的个人博客实验田：记录前端开发、设计思考与创作方法，目标是清晰、有趣、可执行。
      </p>
    </section>

    <section class="toolbar">
      <input v-model.trim="keyword" type="text" placeholder="搜索文章标题或摘要..." />
      <select v-model="selectedCategory">
        <option value="全部">全部分类</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
    </section>

    <section class="post-grid">
      <article v-for="post in filteredPosts" :key="post.id" class="post-card">
        <img :src="post.cover" :alt="post.title" class="cover" />
        <div class="content">
          <div class="meta">
            <span class="chip">{{ post.category }}</span>
            <span>{{ post.date }}</span>
            <span>· {{ post.readingTime }}</span>
          </div>
          <h2>{{ post.title }}</h2>
          <p>{{ post.excerpt }}</p>
          <router-link :to="`/post/${post.slug}`">阅读文章 →</router-link>
        </div>
      </article>
    </section>

    <p class="empty" v-if="filteredPosts.length === 0">暂无匹配结果，换个关键词试试～</p>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { posts } from '../data/posts';

const keyword = ref('');
const selectedCategory = ref('全部');

const categories = computed(() => [...new Set(posts.map((post) => post.category))]);

const filteredPosts = computed(() =>
  posts.filter((post) => {
    const categoryMatch =
      selectedCategory.value === '全部' || post.category === selectedCategory.value;
    const target = `${post.title} ${post.excerpt}`.toLowerCase();
    const keywordMatch = target.includes(keyword.value.toLowerCase());
    return categoryMatch && keywordMatch;
  })
);

function createClickEffect(e) {
  const effect = document.createElement('div');
  effect.className = 'click-effect';
  effect.style.left = `${e.clientX}px`;
  effect.style.top = `${e.clientY}px`;
  document.body.appendChild(effect);

  setTimeout(() => effect.remove(), 900);
}

onMounted(() => window.addEventListener('click', createClickEffect));
onUnmounted(() => window.removeEventListener('click', createClickEffect));
</script>

<style scoped>
.hero {
  margin: 10px 0 26px;
}

.hero-tip {
  margin: 0;
  color: #2563eb;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
}

.hero h1 {
  margin: 8px 0;
  font-size: clamp(28px, 4.6vw, 48px);
  line-height: 1.2;
  max-width: 900px;
}

.hero-desc {
  margin: 0;
  max-width: 800px;
  color: #475467;
}

.toolbar {
  display: grid;
  grid-template-columns: 1fr 160px;
  gap: 12px;
  margin: 24px 0;
}

input,
select {
  border: 1px solid #d0d5dd;
  border-radius: 12px;
  background: #ffffff;
  padding: 12px 14px;
  font-size: 15px;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 18px;
}

.post-card {
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.12);
}

.cover {
  width: 100%;
  height: 170px;
  object-fit: cover;
}

.content {
  padding: 14px;
}

.meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #64748b;
}

.chip {
  background: #eaf2ff;
  color: #1d4ed8;
  padding: 4px 10px;
  border-radius: 999px;
}

h2 {
  margin: 10px 0 8px;
  font-size: 20px;
}

.content p {
  margin: 0 0 12px;
  color: #475467;
  line-height: 1.7;
}

.content a {
  color: #1d4ed8;
  text-decoration: none;
  font-weight: 600;
}

.empty {
  text-align: center;
  margin-top: 24px;
  color: #64748b;
}

:global(.click-effect) {
  position: fixed;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  background: linear-gradient(120deg, #f97316, #facc15);
  animation: pop 0.9s ease-out forwards;
}

@keyframes pop {
  from {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  to {
    transform: translate(-50%, -50%) scale(2.8);
    opacity: 0;
  }
}

@media (max-width: 700px) {
  .toolbar {
    grid-template-columns: 1fr;
  }
}
</style>
