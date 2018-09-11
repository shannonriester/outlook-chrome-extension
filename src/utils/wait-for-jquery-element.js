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
export default function waitForJqueryElement(selector, callback, interval = 50, counter = 0) {
  const $elements = $(selector);
  console.log('$elements: ', $elements);
  // If element found, call callback.
  if ($elements.length) return callback($elements);

  // If element not found by 2s after dom ready, exit.
  if (document.readyState === 'complete' && counter < 15000) {
    counter = counter + interval;
  } else {
    return;
  }

  // Else, try again
  const next = waitForElement.bind(null, selector, callback, interval);
  return setTimeout(next, interval);
}
