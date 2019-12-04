module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'CozyHoliday',
      externals: {
        react: 'React',
      },
    },
  },
};
