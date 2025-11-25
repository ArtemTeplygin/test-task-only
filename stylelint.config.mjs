const stylelintConfig = {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],

  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],

  rules: { 'selector-class-pattern': null },

  ignoreFiles: ['node_modules/**', 'build/**', 'dist/**', 'coverage/**'],
}

export default stylelintConfig
