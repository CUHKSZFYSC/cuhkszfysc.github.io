---
type: page
---

# 按院系索引

<script setup>
import { posts } from "../../src/collections"
import { DEPARTMENTS } from "./[key].paths"

const departmentEntries = Object.entries(DEPARTMENTS).map(([key, label]) => ({
  key,
  label,
  count: posts.filter((post) => post.metadata.department === key).length,
}))
</script>

<ul>
  <li v-for="entry in departmentEntries" :key="entry.key">
    <a :href="`/department/${entry.key}`">{{ entry.label }}</a>（{{ entry.count }} 篇）
  </li>
</ul>
