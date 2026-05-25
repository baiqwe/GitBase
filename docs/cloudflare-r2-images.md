# Cloudflare R2 图片接入说明

本站的对象图片支持从 Cloudflare R2/CDN 加载，同时保留本地 fallback。这样做可以避免图片请求压到 Next/OpenNext Worker，也避免依赖 Next.js 动态图片优化。

## 目标结构

- 本地开发：继续使用 `/public/images/objects/*.webp`
- 生产环境：使用 R2 自定义域名，例如 `https://cdn.randomobject.co/images/objects/*.webp`
- JSON 数据：继续保留 `/images/objects/object-id.webp` 相对路径，不需要批量改数据

## Cloudflare 配置

1. 创建 R2 bucket，建议名称：

```bash
randomobject-images
```

2. 在 R2 bucket 中绑定自定义域名，建议：

```text
cdn.randomobject.co
```

3. 确保 R2 自定义域名可以公开访问对象。

4. 在 Cloudflare Worker 项目环境变量中增加：

```text
NEXT_PUBLIC_OBJECT_IMAGE_BASE_URL=https://cdn.randomobject.co
```

配置后，代码会把对象图片从：

```text
/images/objects/animal-fox.webp
```

解析为：

```text
https://cdn.randomobject.co/images/objects/animal-fox.webp
```

## 上传图片到 R2

默认上传本地已有的 `.webp` 图片：

```bash
npm run images:r2:upload
```

默认参数：

```text
R2_BUCKET=randomobject-images
R2_PREFIX=images/objects
```

如果你的 bucket 或目录不同：

```bash
R2_BUCKET=your-bucket R2_PREFIX=images/objects npm run images:r2:upload
```

如果只想检查将要执行的命令：

```bash
DRY_RUN=1 npm run images:r2:upload
```

## SEO 与性能检查点

- 图片使用 `.webp`，不上传原始 `.jpg` 或 `.png` 到生产路径。
- `object-image-meta.json` 继续保留多语言 alt 和 blurDataUrl。
- Next.js 已配置 `images.unoptimized = true`，让浏览器直接请求 R2/CDN 图片。
- 生产环境部署后，抽查图片 URL 是否为 `cdn.randomobject.co/images/objects/...`。
- 在 Cloudflare Cache Rules 中给 `cdn.randomobject.co/images/*` 设置长缓存，例如 30 天到 1 年。
- 不要把还没审核过的错配图片批量挂到对象上，宁可先用 emoji fallback。

