---
type: page
---

# 按地区索引

<script setup>
import { posts } from "../../src/collections"
import { REGIONS } from "./[key].paths"

const regionEntries = Object.entries(REGIONS).map(([key, label]) => ({
  key,
  label,
  count: posts.filter((post) =>
    Array.isArray(post.metadata.region)
      ? post.metadata.region.includes(key)
      : post.metadata.region === key,
  ).length,
}))
</script>

<ul>
  <li v-for="entry in regionEntries" :key="entry.key">
    <a :href="`/region/${entry.key}`">{{ `${entry.key.toUpperCase()} - ${entry.label}` }}</a>（{{ entry.count }} 篇）
  </li>
</ul>
