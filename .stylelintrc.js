module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    'stylelint-config-rational-order',
    'stylelint-config-prettier-scss'
  ],
  rules: {
    'selector-class-pattern': null,
    'no-descending-specificity': null
  }
}
