import 'babel-polyfill';
import { jsdom } from 'jsdom';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
global.window.localStorage = global.window.sessionStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
  removeItem(key) {
    this[key] = undefined;
  },
};
