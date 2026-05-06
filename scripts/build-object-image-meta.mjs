import fs from 'node:fs/promises'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import objectsData from '../data/json/objects.json' with { type: 'json' }
import objectsExtraData from '../data/json/objects-extra.json' with { type: 'json' }

const projectRoot = process.cwd()
const sourceDir = path.join(projectRoot, 'assets/object-photo-sources')
const imageDir = path.join(projectRoot, 'public/images/objects')
const outputPath = path.join(projectRoot, 'data/json/object-image-meta.json')
const tempDir = path.join(projectRoot, 'tmp/object-image-meta')
const sourceExtensions = ['.jpg', '.jpeg', '.png', '.webp']

const objectMap = new Map(
  [...objectsData, ...objectsExtraData].map((item) => [item.id, item])
)

function buildAlt(locale, name, description) {
  if (locale === 'zh') {
    return `一张清晰的${name}照片。${description}`
  }

  if (locale === 'ja') {
    return `${name}の鮮明な写真。${description}`
  }

  const article = /^[aeiou]/i.test(name) ? 'an' : 'a'
  return `A clear photo of ${article} ${name.toLowerCase()}. ${description}`
}

async function main() {
  await fs.mkdir(tempDir, { recursive: true })
  await fs.mkdir(imageDir, { recursive: true })
  const files = (await fs.readdir(sourceDir)).filter((file) =>
    sourceExtensions.includes(path.extname(file).toLowerCase())
  )
  const filesById = new Map()

  for (const file of files) {
    const extension = path.extname(file)
    const id = path.basename(file, extension)
    const current = filesById.get(id)

    if (!current) {
      filesById.set(id, file)
      continue
    }

    if (sourceExtensions.indexOf(extension.toLowerCase()) < sourceExtensions.indexOf(path.extname(current).toLowerCase())) {
      filesById.set(id, file)
    }
  }

  if (filesById.size === 0) {
    throw new Error(
      'No source images found in assets/object-photo-sources. Run scripts/fetch-wikimedia-images.mjs or add source photos first.'
    )
  }

  const manifest = {}

  for (const file of filesById.values()) {
    const id = path.basename(file, path.extname(file))
    const item = objectMap.get(id)

    if (!item) {
      continue
    }

    const inputPath = path.join(sourceDir, file)
    const webpPath = path.join(imageDir, `${id}.webp`)
    const blurPath = path.join(tempDir, `${id}-blur.jpg`)

    execFileSync('cwebp', ['-quiet', '-q', '72', inputPath, '-o', webpPath])
    execFileSync('/usr/bin/sips', ['-Z', '24', inputPath, '--out', blurPath], { stdio: 'ignore' })

    const blurBuffer = await fs.readFile(blurPath)
    manifest[id] = {
      image: `/images/objects/${id}.webp`,
      blurDataUrl: `data:image/jpeg;base64,${blurBuffer.toString('base64')}`,
      alt: {
        en: buildAlt('en', item.i18n.en.name, item.i18n.en.description),
        zh: buildAlt('zh', item.i18n.zh.name, item.i18n.zh.description),
        ja: buildAlt('ja', item.i18n.ja.name, item.i18n.ja.description),
      },
    }
  }

  await fs.writeFile(outputPath, `${JSON.stringify(manifest, null, 2)}\n`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
