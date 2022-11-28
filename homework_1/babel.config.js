const presets = [
  [
    '@babel/preset-env',
    {
      targets: { browsers: ['>5% in KR', 'last 2 chrome versions'] },
      useBuiltIns: 'usage',
      corejs: '3.6.4',
    },
  ],
  '@babel/preset-typescript',
];

module.exports = { presets };
