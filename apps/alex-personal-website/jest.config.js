module.exports = {
  name: 'alex-personal-website',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/alex-personal-website',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
