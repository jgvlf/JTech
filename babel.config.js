module.exports = function(api) {
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin', {
        relativeSourceLocation: true,
    },
  ]
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
