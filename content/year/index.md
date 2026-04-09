---
type: page
---

# 按年级索引

<script setup>
import { posts } from "../../src/collections"
import { YEARS } from "./[year].paths"

const yearEntries = YEARS.map((year) => ({
  year,
  count: posts.filter((post) => post.metadata.year === year).length,
}))
</script>

<ul>
  <li v-for="entry in yearEntries" :key="entry.year">
    <a :href="`/year/${entry.year}`">{{ `20${entry.year} 级` }}</a>（{{ entry.count }} 篇）
  </li>
</ul>
