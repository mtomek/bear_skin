var styleVariables = require('../../../../theme-settings.json');

module.exports = {
  "--c-primary": styleVariables.colorList['c-primary'],
  "--c-secondary": styleVariables.colorList['c-secondary'],
  "--c-tertiary": styleVariables.colorList['c-tertiary'],
  "--border-color-primary": styleVariables.colorList['border-color-primary'],
  "--border-color-secondary": styleVariables.colorList['border-color-secondary'],
  "--border-color-error": styleVariables.colorList['border-color-error'],

  "--sans": styleVariables.fontList['f-sans'],
  "--serif": styleVariables.fontList['f-serif'],

  "--site-max-width": styleVariables.layout['site-max-width']
};