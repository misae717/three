// Assumes THREE is loaded globally via a <script> tag

let allOriginalTestsPassed = true;
const originalTestResults = [];

function assertOriginal(condition, message) {
    if (!condition) {
        allOriginalTestsPassed = false;
        originalTestResults.push(`FAIL (Original): ${message}`);
        console.error(`Test FAILED (Original): ${message}`);
    } else {
        originalTestResults.push(`PASS (Original): ${message}`);
        console.log(`Test PASSED (Original): ${message}`);
    }
}

// Wait for the window to load to ensure THREE is available
window.onload = () => {
    console.log('--- Running Tests for Original three.js ---');

    // Test 1: Check if THREE object is global and has REVISION
    assertOriginal(typeof THREE !== 'undefined', 'THREE object should be global.');
    assertOriginal(typeof THREE.REVISION !== 'undefined', 'THREE.REVISION should exist.');
    if (THREE.REVISION) {
        assertOriginal(THREE.REVISION === '70', `THREE.REVISION should be '70', but got '${THREE.REVISION}'.`);
    }

    // Test 2: Instantiate Vector3
    let vec;
    try {
        vec = new THREE.Vector3(1, 2, 3);
        assertOriginal(vec.x === 1 && vec.y === 2 && vec.z === 3, 'THREE.Vector3 constructor and properties.');
        assertOriginal(typeof vec.length === 'function', 'THREE.Vector3 should have a length method.');
        if (vec.length) {
            assertOriginal(Math.abs(vec.length() - Math.sqrt(1*1 + 2*2 + 3*3)) < 0.00001, 'THREE.Vector3 length calculation.');
        }
    } catch (e) {
        assertOriginal(false, `Error instantiating or using THREE.Vector3: ${e.message}`);
    }

    // Test 3: Instantiate Color
    let color;
    try {
        color = new THREE.Color(0xff0000);
        assertOriginal(color.r === 1 && color.g === 0 && color.b === 0, 'THREE.Color constructor and properties.');
        assertOriginal(typeof color.getHexString === 'function', 'THREE.Color should have a getHexString method.');
        if (color.getHexString) {
            assertOriginal(color.getHexString() === 'ff0000', `THREE.Color getHexString() check. Expected ff0000, got ${color.getHexString()}`);
        }
    } catch (e) {
        assertOriginal(false, `Error instantiating or using THREE.Color: ${e.message}`);
    }

    // Test 4: Check for a few more key components
    assertOriginal(typeof THREE.Scene === 'function', 'THREE.Scene should be a function (constructor).');
    assertOriginal(typeof THREE.PerspectiveCamera === 'function', 'THREE.PerspectiveCamera should be a function (constructor).');
    assertOriginal(typeof THREE.WebGLRenderer === 'function', 'THREE.WebGLRenderer should be a function (constructor).');
    assertOriginal(typeof THREE.Mesh === 'function', 'THREE.Mesh should be a function (constructor).');

    // Test 5: Constants availability
    assertOriginal(THREE.MOUSE.LEFT === 0, 'THREE.MOUSE.LEFT constant.');
    assertOriginal(THREE.PCFShadowMap === 1, 'THREE.PCFShadowMap constant.');
    assertOriginal(THREE.RepeatWrapping === 1000, 'THREE.RepeatWrapping constant.');

    console.log('\n--- Original Test Summary ---');
    originalTestResults.forEach(result => {
        if (result.startsWith('FAIL')) {
            console.error(result);
        } else {
            console.log(result);
        }
    });

    if (allOriginalTestsPassed) {
        console.log('\nALL ORIGINAL TESTS PASSED SUCCESSFULLY!');
    } else {
        console.error('\nSOME ORIGINAL TESTS FAILED.');
    }
};
