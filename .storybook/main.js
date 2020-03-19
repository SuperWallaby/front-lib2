module.exports = {
  stories: ["../src/**/*.stories.(tsx|mdx)"],
  preset: ["@storybook/preset-typescript", "@storybook/addon-docs"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-docs"
  ]
};
