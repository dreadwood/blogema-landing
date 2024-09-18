// @ts-check
import { defineConfig } from 'astro/config'
import svgSprite from 'astro-svg-sprite'

// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: 'where',
  integrations: [
    svgSprite({
      mode: 'verbose',
      include: ['./src/assets/icons'],
      emitFile: {
        compress: 'standard',
        path: 'assets'
      }
    })
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['mixed-decls']
        }
      }
    }
  }
})
