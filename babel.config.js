module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          entensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@components': './src/components',
            '@context': './src/context',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@services': './src/services',
            '@screens': './src/screens',
            '@models': './src/models',
            '@styles': './src/styles',
            '@utils': './src/utils',
            '@tests': './src/tests',
          },
        },
      ],
    ],
  }
}
