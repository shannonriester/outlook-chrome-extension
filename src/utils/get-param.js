/**
 * @desc getParam() gets a param value from location.search
 *
 * @param {String} name - key of param to find
 * @param {String} optSearch - optional search string to search in (default: location.search)
 *
 * @return {String} param value
 */

export default function getParam(name, optSearch = window.location.search) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(optSearch);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
