module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    require.resolve('@spedue/storybook-preset'),
    require.resolve('storybook-addon-color-mode/register')
  ],
}
