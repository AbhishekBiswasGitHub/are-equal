function areEqual(...t){for(let e=0;e<t.length-1;e++)if(!any(t[e],t[e+1]))return!1;return!0}function any(t,e){if(typeof t!=typeof e)return!1;switch(typeof t){case"function":return!!fnc(t,e);case"object":return t?void 0===t.length?!!obj(t,e):!!arr(t,e):"object"==typeof e&&!e;case"undefined":return void 0===e;default:return"number"==typeof t&&isNaN(t)?!!isNaN(e):!!rest(t,e)}}function fnc(t,e){if("function"==typeof t&&"function"==typeof e)return t.toString()===e.toString()}function obj(t,e){if(t&&e&&"object"==typeof t&&"object"==typeof e&&void 0===t.length&&void 0===e.length&&Object.keys(t).length===Object.keys(e).length){for(let n in t)if(!any(t[n],e[n]))return!1;return!0}}function arr(t,e){if(!t||!e||"object"!=typeof t||"object"!=typeof e||void 0===t.length||void 0===e.length)return;if(t.length!==e.length)return!1;const n=separateArray(t),r=separateArray(e);return n[0].length===r[0].length&&n[1].length===r[1].length&&(!(n[1].length||!restArray(n[0],r[0]))||!(!restArray(n[0],r[0])||!objectArray(n[1],r[1])))}function separateArray(t){const e=[...t],n=[];for(let t=e.length-1;t>=0;t--)if("object"==typeof e[t]&&e[t]){const r=e.splice(t,1)[0];let o=!0;for(let t=0;t<n.length;t+=2)if(any(r,n[t])){n[t+1]+=1,o=!1;break}o&&n.push(r,1)}return e.sort(),[e,n]}function restArray(t,e){if(t.length===e.length){for(let n=0;n<t.length;n++)if(!any(t[n],e[n]))return!1;return!0}return!1}function objectArray(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n+=2){let r=!1;for(let o=0;o<e.length;o+=2)if(any(t[n],e[o])&&t[n+1]===e[o+1]){r=!0;break}if(!r)return!1}return!0}function rest(t,e){return t===e}export default areEqual;