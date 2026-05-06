import fs from 'node:fs/promises'
import path from 'node:path'

const imageDir = path.join(process.cwd(), 'public/images/objects')

const records = [
  ['animal-elephant', 'Elephant'],
  ['animal-fox', 'Fox'],
  ['animal-penguin', 'Penguin'],
  ['animal-octopus', 'Octopus'],
  ['animal-butterfly', 'Butterfly'],
  ['house-lamp', 'Desk_lamp'],
  ['house-kettle', 'Kettle'],
  ['house-clock', 'Alarm_clock'],
  ['house-broom', 'Broom'],
  ['house-key', 'Key_(lock)'],
  ['food-apple', 'Apple'],
  ['food-ramen', 'Ramen'],
  ['food-taco', 'Taco'],
  ['food-birthday-cake', 'Birthday_cake'],
  ['food-popcorn', 'Popcorn'],
  ['nature-rainbow', 'Rainbow'],
  ['nature-pinecone', 'Pine_cone'],
  ['nature-shell', 'Seashell'],
  ['nature-mushroom', 'Mushroom'],
  ['nature-cloud', 'Cloud'],
  ['funny-rubber-duck', 'Rubber_duck'],
  ['funny-disco-ball', 'Disco_ball'],
  ['funny-toothbrush-mustache', 'Toothbrush_moustache'],
  ['funny-banana-phone', 'Banana'],
  ['funny-tiny-crown', 'Crown_(headgear)'],
]

const userAgent = 'RandomObjectGenerator/1.0 (https://randomobject.co)'

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': userAgent,
      accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`)
  }

  return response.json()
}

async function fetchBuffer(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': userAgent,
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`)
  }

  const contentType = response.headers.get('content-type') || ''
  const arrayBuffer = await response.arrayBuffer()
  return {
    contentType,
    buffer: Buffer.from(arrayBuffer),
  }
}

async function resolveImageUrl(title) {
  const encodedTitle = encodeURIComponent(title)
  const summary = await fetchJson(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodedTitle}`)

  if (summary.originalimage?.source) {
    return summary.originalimage.source
  }

  if (summary.thumbnail?.source) {
    return summary.thumbnail.source
  }

  const query = await fetchJson(
    `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=original&titles=${encodedTitle}`
  )

  const pages = query.query?.pages ? Object.values(query.query.pages) : []
  const page = pages.find((entry) => entry.original?.source)
  if (page?.original?.source) {
    return page.original.source
  }

  throw new Error(`No image found for ${title}`)
}

async function saveImage(id, sourceUrl) {
  const { contentType, buffer } = await fetchBuffer(sourceUrl)
  const extension =
    contentType.includes('png') ? 'png' : contentType.includes('webp') ? 'webp' : 'jpg'
  const outputPath = path.join(imageDir, `${id}.${extension}`)
  await fs.writeFile(outputPath, buffer)
  return `/images/objects/${id}.${extension}`
}

async function main() {
  await fs.mkdir(imageDir, { recursive: true })

  const results = {}

  for (const [id, title] of records) {
    try {
      const imageUrl = await resolveImageUrl(title)
      const localPath = await saveImage(id, imageUrl)
      results[id] = localPath
      console.log(`ok ${id} -> ${localPath}`)
    } catch (error) {
      console.error(`fail ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  console.log(JSON.stringify(results, null, 2))
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
