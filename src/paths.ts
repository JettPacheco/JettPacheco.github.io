import type { ImageId } from './projects'

export function sitePath(path = '') {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`
}

export function imagePath(image: ImageId, variant: 'original' | 'thumbnail' = 'original') {
  const folder = variant === 'thumbnail' ? 'images/thumbnails' : 'images'
  return sitePath(`${folder}/${image}.webp`)
}
