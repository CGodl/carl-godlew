/**
 * Compatibility shim for midori-bg.
 * Older three.js exposed `{ WEBGL: { isWebGLAvailable } }` from
 * `three/examples/jsm/WebGL`. Modern three only exports a default class
 * with `isWebGL2Available` under `capabilities/WebGL.js`.
 */

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

function isWebGL2Available() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
  } catch {
    return false;
  }
}

export const WEBGL = {
  isWebGLAvailable,
  isWebGL2Available,
};

export default WEBGL;
