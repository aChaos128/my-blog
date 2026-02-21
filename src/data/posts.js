export const posts = [
  {
    id: 1,
    slug: 'build-a-vue-blog-ui',
    title: '从 0 到 1：搭建一个优雅的 Vue 博客首页',
    excerpt: '以信息层级、阅读节奏和移动端体验为核心，快速构建一个可扩展的博客首页。',
    category: '前端',
    readingTime: '6 min',
    date: '2026-02-16',
    cover:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    content: [
      '一个好看的博客首页，不只是“能放文章卡片”这么简单。它需要明确的视觉层级：主标题、关键行动按钮、文章区块、侧边信息。',
      '在实现上，可以先从静态数据入手，把“页面组织能力”做出来，再逐步接入后端。这样迭代速度最快，也更利于后续重构。',
      '建议先保证三件事：清晰的导航、稳定的内容卡片布局、移动端下可阅读的字体与间距。'
    ],
    tags: ['Vue 3', 'UI 设计', '响应式']
  },
  {
    id: 2,
    slug: 'design-system-for-personal-blog',
    title: '个人博客也需要设计系统吗？',
    excerpt: '从颜色、间距、排版到组件复用，设计系统让个人项目也能保持长期一致性。',
    category: '设计',
    readingTime: '8 min',
    date: '2026-02-13',
    cover:
      'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80',
    content: [
      '即使是个人博客，也会不断增加页面与模块。如果没有基础规范，页面会越来越“像拼起来的”。',
      '你可以先定义 3 套文字层级、6 个间距等级和一套色板。只做这三件事，就能显著提升一致性。',
      '之后再把按钮、卡片、标签等抽象为组件，维护成本会持续下降。'
    ],
    tags: ['Design System', '组件化', '可维护性']
  },
  {
    id: 3,
    slug: 'how-i-write-weekly-notes',
    title: '我的周记工作流：让输出持续发生',
    excerpt: '如何通过固定模板和最小行动机制，把灵感沉淀成可发布的内容。',
    category: '写作',
    readingTime: '5 min',
    date: '2026-02-08',
    cover:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    content: [
      '持续写作最难的不是“写得好”，而是“持续写”。我会把写作任务拆成收集、整理、发布三个阶段。',
      '每周固定一个半小时做内容归档，然后从归档里挑一个主题扩写，这样几乎不会“无话可写”。',
      '模板化并不限制表达，反而能减少启动成本。'
    ],
    tags: ['写作习惯', '效率', '内容创作']
  }
];
