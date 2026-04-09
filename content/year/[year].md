---
type: page
---

# 20{{ $params.year }} 级

<script setup>
import { useData } from "vitepress";

import { posts } from "../../src/collections";

const { params } = useData();
const filteredPosts = posts.filter(
  (post) => post.metadata.year === params.value.year,
);
</script>

<p>共 {{ filteredPosts.length }} 篇。</p>

<PostList :posts="filteredPosts" />
