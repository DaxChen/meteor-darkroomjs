Package.describe({
  name: 'clipo:darkroomjs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor wrapper for DarkroomJS: Extensible image editing tool (https://github.com/MattKetmo/darkroomjs)',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('darkroomjs.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('clipo:darkroomjs');
  api.addFiles('darkroomjs-tests.js');
});
