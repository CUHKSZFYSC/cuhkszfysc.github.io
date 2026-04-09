---
type: page
---

# 索引

这里可以按年级、地区和学院浏览帖子。每个条目后面的数字是对应的帖子数量。

<p>当前共有 {{ posts.length }} 篇帖子。</p>

<script setup lang="ts">
import { posts } from "../src/collections";
import { REGIONS } from "./region/[key].paths";
import { SCHOOLS } from "./school/[key].paths";
import { YEARS } from "./year/[year].paths";

const yearEntries = YEARS.map((year) => ({
  year,
  label: `20${year} 级`,
  count: posts.filter((post) => post.metadata.year === year).length,
}));

const regionEntries = Object.entries(REGIONS).map(([key, label]) => ({
  key,
  label: `${key.toUpperCase()} - ${label}`,
  count: posts.filter((post) =>
    Array.isArray(post.metadata.region)
      ? post.metadata.region.includes(key)
      : post.metadata.region === key,
  ).length,
}));

const schoolEntries = Object.entries(SCHOOLS).map(([key, label]) => ({
  key,
  label,
  count: posts.filter((post) => post.metadata.school === key).length,
}));
</script>

## 按年级

<ul>
  <li v-for="entry in yearEntries" :key="entry.year">
    <a :href="`/year/${entry.year}`">{{ entry.label }}</a>（{{ entry.count }} 篇）
  </li>
</ul>

## 按地区

<ul>
  <li v-for="entry in regionEntries" :key="entry.key">
    <a :href="`/region/${entry.key}`">{{ entry.label }}</a>（{{ entry.count }} 篇）
  </li>
</ul>

## 按学院

<ul>
  <li v-for="entry in schoolEntries" :key="entry.key">
    <a :href="`/school/${entry.key}`">{{ entry.label }}</a>（{{ entry.count }} 篇）
  </li>
</ul>
