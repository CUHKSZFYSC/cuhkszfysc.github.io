# 元数据

飞跃手册使用 Markdown 文件开头的 [YAML](https://yaml.org) frontmatter 来为经验分享贴子添加元数据。您需要在Markdown文件的开头使用`---`来分割元数据，其大致格式如下：

```markdown
---
type: grad
author: 徐阳升
year: 14
degree: master
school: hss
date: 2023-02-19
---

# 标题

...
```

## 必须字段

> [!NOTE]
>
> 目前 `title` 从第一级标题中自动提取，因此并非所需字段，但日后可能移动到 frontmatter 中。

- `author`：作者的姓名。
- `date`：帖子合并的时间，遵守 `YYYY-MM-DD` 格式。
- `school`：作者所属的学校/学院，详见 [`school`](#school)。
- `type`：帖子的类型，可选值如下：
  - `grad`: 个人申请总结。
  - `abroad`: 海外交流项目，包括暑研、暑校等。
  - `job`: 求职就业经验分享。
  - `recruit`: 招生信息。
  - `experience`: 其他专项经验分享，如英语学习、备考、其他的学习经验等。

> [!NOTE]
>
> 在内容根目录下，且没有 `type` 字段的，被视作特殊页面，如 `/join`、`/updates` 等。

## 按类型必须字段

除所有帖子都必须包含的字段外，不同类型的帖子有特定的字段要求。可通过点击链接跳转到文档的对应位置查看。

- `grad` - 申请经验
  - [`degree`](#degree)
  - [`region`](#region)
  - [`program`](#program)
  - [`year`](#year)
- `abroad` - 海外交流
  - [`region`](#region)
- `job` - 就业经验
  - [`employer`](#employer)
  - [`year`](#year)
- `recruit` - 招生信息
  - [`region`](#region)
- `experience` - 其他专项经验分享

## 所有可用字段

这里展示其余所有可用的字段及选项。根据分享类型，需要填入不同的字段组合。

### `degree`

录取的学位，可选值为 `master` 和 `doctor`。

### `school`

作者所属的学院代码，对应 `src/metadata.ts` 中的 `school` 选项。若帖子填写了该字段，`/updates` 页面会在类型标签后额外显示一个学校标签。可选值如下：

```yaml
sds: 数据科学学院
sai: 人工智能学院
hss: 人文社科学院
sse: 理工学院
mus: 音乐学院
sme: 经管学院
med: 医学院
```

### `employer`

就业经验所涉及的雇主名称。

### `program`

申请的项目/专业，不包括学位。例如，项目全称为 `PhD in Computer Science and Engineering`，则项目为 `Computer Science and Engineering`。

### `region`

经验分享适用的 [ISO 3166 标准](https://countrycode.org)地区代码。可以是单个地区或多个地区。

```yaml
region: us # 单个地区
region: [us, ca] # 多个地区
```

### `year`

投稿者的年级，格式为 `YY`。例如，如果您是2019届毕业生，则写`year: 19`。
