import fs from 'node:fs/promises'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

const projectRoot = process.cwd()
const imageDir = path.join(projectRoot, 'public/images/objects')
const bucket = process.env.R2_BUCKET || 'randomobject-images'
const prefix = (process.env.R2_PREFIX || 'images/objects').replace(/^\/|\/$/g, '')
const dryRun = process.env.DRY_RUN === '1'
const local = process.env.R2_LOCAL === '1'

async function main() {
  const files = (await fs.readdir(imageDir))
    .filter((file) => file.endsWith('.webp'))
    .sort()

  if (files.length === 0) {
    throw new Error(`No .webp files found in ${imageDir}`)
  }

  for (const file of files) {
    const source = path.join(imageDir, file)
    const key = `${prefix}/${file}`
    const args = [
      'r2',
      'object',
      'put',
      `${bucket}/${key}`,
      '--file',
      source,
      '--content-type',
      'image/webp',
      ...(local ? [] : ['--remote']),
    ]

    if (dryRun) {
      console.log(`wrangler ${args.join(' ')}`)
      continue
    }

    execFileSync('wrangler', args, { stdio: 'inherit' })
  }

  console.log(`${dryRun ? 'Checked' : 'Uploaded'} ${files.length} object images to R2 bucket "${bucket}" under "${prefix}/".`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
