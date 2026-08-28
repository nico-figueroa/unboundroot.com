import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/'
});

global.window = dom.window;
global.document = dom.window.document;
global.localStorage = dom.window.localStorage;
global.FormData = dom.window.FormData;
global.HTMLElement = dom.window.HTMLElement;
global.Node = dom.window.Node;
