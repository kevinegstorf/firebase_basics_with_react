module.exports = {
    extends: ['airbnb', 'prettier'],
    plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    },
    env: {
      browser: true,
      es6: true,
      node: true,
    },
  };