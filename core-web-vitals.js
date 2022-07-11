module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
      },
    ],
  },
};
