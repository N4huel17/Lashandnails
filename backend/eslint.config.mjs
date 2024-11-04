// .eslintrc.js
const globals = require('globals');
const pluginJs = require('@eslint/js');
const pluginReact = require('eslint-plugin-react');

module.exports = [
  { 
    files: ['**/*.{js,mjs,cjs,jsx}'], 
    languageOptions: { 
      globals: {
        ...globals.node,  
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];