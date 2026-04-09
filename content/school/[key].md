---
type: page
---

# {{ $params.val }}

<script setup lang="ts">
import { useData } from "vitepress";

import { posts } from "@/collections";

const { params } = useData();
const filteredPosts = posts.filter(
  (post) => post.metadata.school === params.value.key,
);
</script>

<p>共 {{ filteredPosts.length }} 篇。</p>

<PostList :posts="filteredPosts" />
