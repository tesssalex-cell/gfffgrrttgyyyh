import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detect repo name for GitHub Pages project sites: https://username.github.io/<repo>/
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : ''
const isUserSite = repo && /\.github\.io$/i.test(repo) // username.github.io repo
// If it's a project site, set base to /<repo>/ ; otherwise '/'
const base = isUserSite ? '/' : (repo ? `/${repo}/` : '/')

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
