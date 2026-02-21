<template>
  <div class="post-detail" v-if="post">
    <img :src="post.cover" :alt="post.title" class="banner" />
    <div class="meta-row">
      <span class="chip">{{ post.category }}</span>
      <span>{{ post.date }}</span>
      <span>·</span>
      <span>{{ post.readingTime }}</span>
    </div>
    <h1>{{ post.title }}</h1>
    <p class="excerpt">{{ post.excerpt }}</p>

    <article>
      <p v-for="(paragraph, index) in post.content" :key="index">{{ paragraph }}</p>
    </article>

    <div class="tag-row">
      <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
    </div>

    <router-link to="/" class="back-link">← 返回首页</router-link>
  </div>

  <div class="empty" v-else>
    <h2>文章不存在</h2>
    <router-link to="/">回到首页</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { posts } from '../data/posts';

const route = useRoute();

const post = computed(() => posts.find((item) => item.slug === route.params.slug));
</script>

<style scoped>
.post-detail {
  max-width: 860px;
  margin: 0 auto;
}

.banner {
  width: 100%;
  height: 320px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 10px 35px rgba(16, 24, 40, 0.18);
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #475467;
  margin: 18px 0 8px;
}

.chip {
  background: #eaf2ff;
  color: #1d4ed8;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 13px;
}

h1 {
  margin: 0;
  font-size: clamp(30px, 4vw, 40px);
}

.excerpt {
  color: #475467;
  margin: 14px 0 24px;
}

article p {
  color: #1f2937;
  line-height: 1.95;
  margin: 14px 0;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0;
}

.tag {
  border: 1px solid #cfe0ff;
  background: #f8fbff;
  color: #1e3a8a;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 13px;
}

.back-link {
  color: #1d4ed8;
  text-decoration: none;
  font-weight: 600;
}

.empty {
  text-align: center;
  padding: 80px 0;
}
</style>
