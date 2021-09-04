module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  ignorePatterns: ['**/utils/*.js'],
  rules: {
    'no-console': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'quote-props': ['error', 'consistent'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'no-unused-vars': 'off',
  },
}
