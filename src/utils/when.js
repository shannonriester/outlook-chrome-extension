/**
 * @callback whenCallback
 *
 * @param {HTMLElement} element - The element polled for
 */

/**
 * Polls for an element until dom ready
 * and executes a callback when the element(s) is/are found
 * Note: Runs at least once even if dom ready
 *
 * @param {string} selector - The element selector to poll for
 * @param {whenCallback} callback - Callback when element found
 * @param {number} [interval=50] - Polling interval in milliseconds
 *
 * @example
 *
 *    when('.target-class', targetElement => {
 *      // Do something with targetElement
 *    });
 */
export default function when(selector, callback, interval = 50) {
  const elements = document.querySelectorAll(selector);

  // If element found, call callback
  if (elements.length) return callback(elements);

  // If element not found by dom ready, exit
  if (document.readyState === 'complete') return;

  // Else, try again
  const next = when.bind(null, selector, callback, interval);
  return setTimeout(next, interval);
}
