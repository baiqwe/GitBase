import fs from 'node:fs/promises'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

const projectRoot = process.cwd()
const imageDir = path.join(projectRoot, 'public/images/objects')
const outputPath = path.join(projectRoot, 'data/json/object-image-meta.json')
const tempDir = path.join(projectRoot, 'tmp/object-image-meta')

async function main() {
  await fs.mkdir(tempDir, { recursive: true })
  const files = (await fs.readdir(imageDir)).filter((file) => file.endsWith('.jpg'))
  const manifest = {}

  for (const file of files) {
    const id = path.basename(file, '.jpg')
    const inputPath = path.join(imageDir, file)
    const webpPath = path.join(imageDir, `${id}.webp`)
    const blurPath = path.join(tempDir, `${id}-blur.jpg`)

    execFileSync('cwebp', ['-quiet', '-q', '72', inputPath, '-o', webpPath])
    execFileSync('/usr/bin/sips', ['-Z', '24', inputPath, '--out', blurPath], { stdio: 'ignore' })

    const blurBuffer = await fs.readFile(blurPath)
    manifest[id] = {
      image: `/images/objects/${id}.webp`,
      blurDataUrl: `data:image/jpeg;base64,${blurBuffer.toString('base64')}`,
    }
  }

  await fs.writeFile(outputPath, `${JSON.stringify(manifest, null, 2)}\n`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
