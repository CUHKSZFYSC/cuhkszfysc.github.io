---
type: page
---

# 按年级索引

<script setup lang="ts">
import { posts } from "../../src/collections";
import { SCHOOLS } from "./[key].paths";

const yearEntries = Object.entries(YEARS).map(([key, label]) => ({
  key,
  label,
  count: posts.filter((post) => post.metadata.year === key).length,
}));
</script>

<ul>
  <li v-for="entry in yearEntries" :key="entry.key">
    <a :href="`/year/${entry.key}`">{{ entry.label }}</a>（{{ entry.count }} 篇）
  </li>
</ul>