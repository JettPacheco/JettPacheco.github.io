import { defineConfig } from 'astro/config'
import { env } from 'node:process'

export default defineConfig({
  base: env.GITHUB_PAGES_BASE || '/',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
})
