module.exports = {
  actions: [
    {
      type: 'add',
      // Copy and transform all files in `template` folder into output directory
      files: '**'
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore'
      }
    }
  ],

  async completed() {}
}
