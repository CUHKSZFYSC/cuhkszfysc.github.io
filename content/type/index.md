---
type: page
---

# 按分享类型索引

<script setup>
import { posts } from "../../src/collections"
import { TYPES } from "./[key].paths"

const typeEntries = Object.entries(TYPES).map(([key, label]) => ({
  key,
  label,
  count: posts.filter((post) => post.metadata.type === key).length,
}))
</script>

<ul>
  <li v-for="entry in typeEntries" :key="entry.key">
    <a :href="`/type/${entry.key}`">{{ entry.label }}</a>（{{ entry.count }} 篇）
  </li>
</ul>
