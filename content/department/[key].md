---
type: page
---

# {{ $params.val }}

<script setup>
import { useData } from "vitepress";

import { posts } from "@/collections";

const { params } = useData();
const filteredPosts = posts.filter(
  (post) => post.metadata.department === params.value.key,
);
</script>

<p>共 {{ filteredPosts.length }} 篇。</p>

<PostList :posts="filteredPosts" />
