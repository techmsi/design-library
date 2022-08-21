module.exports = {
  source: ['global/*.tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables',
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
        },
      ],
    },
  },
};
