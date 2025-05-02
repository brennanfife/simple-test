// random.js

/**
 * Shuffle an array in-place using Fisher–Yates.
 * @param {any[]} arr
 * @returns {any[]}
 */
export function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Pick a random element from one or more arrays or values.
 * @param  {...any} items
 * @returns {any}
 */
export function pickRandom(...items) {
  const flat = items.flat();
  return flat[Math.floor(Math.random() * flat.length)];
}

/**
 * Generate a random hex color string.
 * @returns {string}
 */
export function randomColor() {
  const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
  return `#${hex}`;
}

/**
 * Debounce: delays invoking fn until after wait ms have elapsed since last call.
 * @param {Function} fn
 * @param {number} wait
 * @returns {Function}
 */
export function debounce(fn, wait = 300) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  };
}

/**
 * Throttle: ensures fn is invoked at most once every wait ms.
 * @param {Function} fn
 * @param {number} wait
 * @returns {Function}
 */
export function throttle(fn, wait = 300) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn.apply(this, args);
    }
  };
}

// Example usage:
// import { shuffleArray, pickRandom, randomColor, debounce, throttle } from './random.js';
//
// console.log(shuffleArray([1,2,3,4]));            // e.g. [3,1,4,2]
// console.log(pickRandom('🍎','🍌','🍇'));           // e.g. "🍇"
// console.log(randomColor());                      // e.g. "#4af3b1"
//
// window.addEventListener('resize', debounce(() => {
//   console.log('Resized!');
// }, 200));
//
// document.addEventListener('scroll', throttle(() => {
//   console.log('Scrolling…');
// }, 100));
