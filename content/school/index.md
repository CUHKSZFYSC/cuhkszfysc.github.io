---
type: page
---

# 按学院索引

<script setup lang="ts">
import { posts } from "../../src/collections";
import { SCHOOLS } from "./[key].paths";

const schoolEntries = Object.entries(SCHOOLS).map(([key, label]) => ({
  key,
  label,
  count: posts.filter((post) => post.metadata.school === key).length,
}));
</script>

<ul>
  <li v-for="entry in schoolEntries" :key="entry.key">
    <a :href="`/school/${entry.key}`">{{ entry.label }}</a>（{{ entry.count }} 篇）
  </li>
</ul>
