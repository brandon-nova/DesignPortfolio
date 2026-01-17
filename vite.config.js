import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: (() => {
    const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
    if (!repo) return '/'
    if (repo.endsWith('.github.io')) return '/'
    return `/${repo}/`
  })(),
})
