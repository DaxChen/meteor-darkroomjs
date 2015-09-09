Package.describe({
  name: 'clipo:darkroomjs',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Meteor wrapper for DarkroomJS: Extensible image editing tool',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/clipo-info/meteor-darkroomjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('ryanswapp:fabricjs@0.1.1');
  api.addFiles('client/darkroomjs.min.js', ['client']);
  api.addFiles('client/darkroomjs.min.css', ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('clipo:darkroomjs');
  api.addFiles('test/client/darkroomjs-tests.js');
});
