'use restrict';

export function getBooleanFromLocalStorage(key) {
  if (!window.localStorage) return false;
  return (window.localStorage.getItem(key) === '0')? false: true;
}

export function getNumberFromLocalStorage(key, _default) {
  if (!window.localStorage) return _default;
  return (window.localStorage.getItem(key) !== null)? window.localStorage.getItem(key) : _default;
}

export function getJsonFromLocalStorage(key, _default) {
  _default = (typeof _default !== undefined) ? _default : {};
  if (!window.localStorage) return _default;
  return (window.localStorage.getItem(key) !== null)? JSON.parse(window.localStorage.getItem(key)) : _default;
}

export function setBooleanToLocalStorage(key, val) {
  if (!window.localStorage) return false;
  window.localStorage.setItem(key, ((val !== false)? '1': '0'));
}

export function setValueToLocalStorage(key, val) {
  if (!window.localStorage) return false;
  window.localStorage.setItem(key, String(val));
}

export function setJsonToLocalStorage(key, obj) {
  if (!window.localStorage) return false;
  window.localStorage.setItem(key, JSON.stringify(obj));
}
