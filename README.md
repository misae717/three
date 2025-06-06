# THREE.js ES6 Module Refactoring

This repository contains the THREE.js library, with an added ES6 module version.

## Overview

The original `three.js` file has been refactored to an ES6 module, available as `three.module.js`. This change allows for easier integration into modern JavaScript projects that use ES6 modules (e.g., projects built with Webpack, Rollup, or native browser ES6 module support).

The core functionality, API, and implementation details of the THREE.js library (Revision 70) remain **unchanged**. This refactoring solely focuses on the module format.

## Files

-   `three.js`: The original THREE.js library file, suitable for traditional script includes or CommonJS environments.
-   `three.min.js`: The minified version of the original `three.js`.
-   `three.module.js`: The ES6 module version of THREE.js.
-   `package.json`: Basic package information.
-   `test.html` & `test-runner.js`: Files for testing `three.module.js`.
-   `test-original.html` & `test-runner-original.js`: Files for testing the original `three.js`.

## Usage

### Using the ES6 Module (`three.module.js`)

You can import the `THREE` object from `three.module.js` in your JavaScript files:

```javascript
// Option 1: Import all exports as THREE (since THREE is the default export)
import THREE from './three.module.js';

// Option 2: Import all as a namespace (also works for default exports)
// import * as THREE from './three.module.js';

// You can then use THREE.js components as usual:
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer(); // Requires a canvas
// ... and so on
```

Remember to serve `three.module.js` along with your project files and ensure your environment is set up to handle ES6 modules (e.g., using `<script type="module" src="your-app.js">` in HTML, or a bundler).

### Using the Original Script (`three.js`)

For environments that do not use ES6 modules, you can still include `three.js` or `three.min.js` using a `<script>` tag, which will make the `THREE` object available globally:

```html
<script src="three.js"></script>
<script>
    const scene = new THREE.Scene();
    // ...
</script>
```

Or, if in a CommonJS environment (like older Node.js versions without ES6 module support):

```javascript
const THREE = require('./three.js');
const scene = new THREE.Scene();
// ...
```

## Testing

Basic functionality tests have been provided to help verify the integrity of both the original and the refactored module version.

To run the tests:

1.  **For `three.module.js` (ES6 Module Version):**
    *   Open the `test.html` file in a modern web browser that supports ES6 modules.
    *   Open the browser's developer console to see the test results.

2.  **For `three.js` (Original Global Script Version):**
    *   Open the `test-original.html` file in a web browser.
    *   Open the browser's developer console to see the test results.

The tests perform checks on:
*   The availability of the `THREE` object and its `REVISION` property.
*   Instantiation and basic property/method validation for `THREE.Vector3` and `THREE.Color`.
*   The presence of other key THREE.js components like `Scene`, `PerspectiveCamera`, `WebGLRenderer`, and `Mesh`.
*   The correctness of some predefined constants.

Both test suites should report all tests passing and display similar output values in the console, indicating that the refactored module maintains functional consistency with the original script.

## Functionality

This refactoring aims to provide an ES6 module interface without altering the underlying implementation or features of the THREE.js library (Revision 70). All classes, methods, properties, and constants available in the original `THREE` object should be available and work identically in the `THREE` object exported by `three.module.js`.
