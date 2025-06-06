import * as THREE_ES6 from './three.module.js';

let allTestsPassed = true;
const testResults = [];

function assert(condition, message) {
    if (!condition) {
        allTestsPassed = false;
        testResults.push(`FAIL: ${message}`);
        console.error(`Test FAILED: ${message}`);
    } else {
        testResults.push(`PASS: ${message}`);
        console.log(`Test PASSED: ${message}`);
    }
}

// Test 1: Check if THREE object is imported and has REVISION
assert(typeof THREE_ES6 !== 'undefined', 'THREE_ES6 object should be imported.');
assert(typeof THREE_ES6.REVISION !== 'undefined', 'THREE_ES6.REVISION should exist.');
if (THREE_ES6.REVISION) {
    assert(THREE_ES6.REVISION === '70', `THREE_ES6.REVISION should be '70', but got '${THREE_ES6.REVISION}'.`);
}

// Test 2: Instantiate Vector3
let vec;
try {
    vec = new THREE_ES6.Vector3(1, 2, 3);
    assert(vec.x === 1 && vec.y === 2 && vec.z === 3, 'THREE_ES6.Vector3 constructor and properties.');
    assert(typeof vec.length === 'function', 'THREE_ES6.Vector3 should have a length method.');
    if (vec.length) {
        assert(Math.abs(vec.length() - Math.sqrt(1*1 + 2*2 + 3*3)) < 0.00001, 'THREE_ES6.Vector3 length calculation.');
    }
} catch (e) {
    assert(false, `Error instantiating or using THREE_ES6.Vector3: ${e.message}`);
}

// Test 3: Instantiate Color
let color;
try {
    color = new THREE_ES6.Color(0xff0000);
    assert(color.r === 1 && color.g === 0 && color.b === 0, 'THREE_ES6.Color constructor and properties.');
    assert(typeof color.getHexString === 'function', 'THREE_ES6.Color should have a getHexString method.');
    if (color.getHexString) {
        assert(color.getHexString() === 'ff0000', `THREE_ES6.Color getHexString() check. Expected ff0000, got ${color.getHexString()}`);
    }
} catch (e) {
    assert(false, `Error instantiating or using THREE_ES6.Color: ${e.message}`);
}

// Test 4: Check for a few more key components
assert(typeof THREE_ES6.Scene === 'function', 'THREE_ES6.Scene should be a function (constructor).');
assert(typeof THREE_ES6.PerspectiveCamera === 'function', 'THREE_ES6.PerspectiveCamera should be a function (constructor).');
assert(typeof THREE_ES6.WebGLRenderer === 'function', 'THREE_ES6.WebGLRenderer should be a function (constructor).');
assert(typeof THREE_ES6.Mesh === 'function', 'THREE_ES6.Mesh should be a function (constructor).');

// Test 5: Constants availability
assert(THREE_ES6.MOUSE.LEFT === 0, 'THREE_ES6.MOUSE.LEFT constant.');
assert(THREE_ES6.PCFShadowMap === 1, 'THREE_ES6.PCFShadowMap constant.');
assert(THREE_ES6.RepeatWrapping === 1000, 'THREE_ES6.RepeatWrapping constant.');

console.log('\n--- Test Summary ---');
testResults.forEach(result => {
    if (result.startsWith('FAIL')) {
        console.error(result);
    } else {
        console.log(result);
    }
});

if (allTestsPassed) {
    console.log('\nALL BASIC TESTS PASSED SUCCESSFULLY!');
} else {
    console.error('\nSOME BASIC TESTS FAILED.');
}
// You can open test.html in a browser to see these logs.
// For automated checking, we'd need a proper test runner, but this script provides visual feedback in the console.
