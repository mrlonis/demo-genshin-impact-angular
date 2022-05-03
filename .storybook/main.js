module.exports = {
  stories: [
    //'../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      // options: {
      //   docs: false,
      // },
    },
  ],
  framework: '@storybook/angular',
  core: {
    builder: 'webpack5',
  },
  features: {
    babelModeV7: true,
  },
  angularOptions: {
    enableIvy: true,
  },
};
