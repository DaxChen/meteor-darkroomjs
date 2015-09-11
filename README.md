# meteor-darkroomjs
Meteor wrapper for DarkroomJS: Extensible image editing tool

[Atmosphere link](https://atmospherejs.com/clipo/darkroomjs)

Original GitHub Repo: [DarkroomJS](https://github.com/MattKetmo/darkroomjs)

## Installation

```
meteor add clipo:darkroomjs
```

## Example

```html
<img src="/some-image.png" id="target" />
```

```javascript
Template.TEMPLATENAME.rendered = function() {
  // the first argument can be a DOM element or a query selector
  new Darkroom('#target', {
		// Size options for the canvas
    minWidth: 100,
    minHeight: 100,
    maxWidth: 600,
    maxHeight: 500,
    ratio: 4/3, // fix the canvas ratio, comment this line to use the image's ratio
    backgroundColor: '#000',

    // Plugins options
    plugins: {
			history: true, // enable undo/redo?
      save: true, // enable save?
      crop: { // options for crop
        quickCropKey: 67, //key "c"
        minHeight: 50,
        minWidth: 50,
        ratio: 1 // fix ratio for cropping
      }
    },

    // This is called after initialization
    initialize: function() {
      var cropPlugin = this.plugins['crop'];

      // Active crop selection
      cropPlugin.requireFocus();

      // set default selection
      cropPlugin.selectZone(x1, y1, x2, y2);

      // Add custom listener
      this.addEventListener('core:transformation', function() { /* ... */ });
    }
  });
};
```

## Docs

[DarkroomJS](https://github.com/MattKetmo/darkroomjs)
