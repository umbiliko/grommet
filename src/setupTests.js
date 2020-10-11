import 'jsdom-global/register'; //at the top of file , even  , before importing react

global.console.warn = message => {
  throw message;
};
global.console.error = message => {
  throw message;
};

/*
"modulePathIgnorePatterns": [
  "<rootDir>/dist/"
],
"testPathIgnorePatterns": [
  "<rootDir>[/\\\\](dist|node_modules)[/\\\\]",
  "components/(.*)/__tests__/(.*)/(.*).js"
]
*/
