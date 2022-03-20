import { defineMDSveXConfig as defineConfig } from 'mdsvex'

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },
  layout: {
    docs: './src/components/layouts/Docs.svelte'
  },

  remarkPlugins: [],
  rehypePlugins: []
})

export default config
