# 仓库与发布流程

这篇页面用最简单的话说明这个仓库是怎么工作的。

## 两个部分

- `main` 是源码分支
- `gh-pages` 是已发布的网站分支

你平时要改的是 `main` 里的 Markdown 文件，不是 `gh-pages` 里的 HTML 文件。

## 网站是怎么生成的

1. 你编辑 `content/` 里的 `.md` 文件
2. 仓库把 Markdown 处理成网页内容
3. 构建后生成静态 HTML 和资源文件
4. 部署到 `gh-pages`

所以，Markdown 是“源文件”，`gh-pages` 是“网站成品”。

## 你应该改哪里

- 首页：`content/index.md`
- 说明文档：`content/docs/*.md`
- 新帖子：`content/post/<帖子名>/index.md`
- 帖子图片：放在同一个帖子文件夹里

如果你要更新一篇帖子，就直接修改那篇帖子的 `.md` 文件。

## 怎么上传帖子

如果你想新增或更新投稿，通常这样做：

1. 找到帖子目录，比如 `content/post/<帖子名>/`
2. 编辑里面的 `index.md`
3. 保存图片或附件到同一目录
4. 检查 frontmatter 里的 `type`、`date`、`department` 等信息
5. 提交到 `main`
6. 让 GitHub Actions 构建并发布到 `gh-pages`

注意：

- 这里是 `content/post/`，不是 `content/posts/`
- 当前网站没有保留历史帖子，但以后仍然可以继续新增帖子

## 如果你不想本地构建

你也可以只推送 `main`，然后让 GitHub Actions 自动完成构建和部署。

但如果你想提前检查页面效果，建议先在本地跑一次构建再提交。
