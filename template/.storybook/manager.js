import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const themeConfig = create({
  base: 'light',
  brandTitle: ''
})

addons.setConfig({
  theme: themeConfig
})
