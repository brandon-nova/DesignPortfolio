import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: (() => {
    // If a custom domain is configured (GitHub Pages), the site is served from '/'
    if (existsSync('public/CNAME') || existsSync('CNAME')) return '/'

    const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
    if (!repo) return '/'
    if (repo.endsWith('.github.io')) return '/'
    return `/${repo}/`
  })(),
})
