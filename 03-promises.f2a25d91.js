var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const l=document.querySelector(".form");function i(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r&&o({position:e,delay:t}),n({position:e,delay:t})}),t)}))}l.addEventListener("submit",(function(e){e.preventDefault();const t={delay:Number(l.elements.delay.value),step:Number(l.elements.step.value),amount:Number(l.elements.amount.value)};console.log(t),function({delay:e,step:t,amount:o}){for(let n=1;n<=o;n+=1)console.log(e,t,o,n),i(n,e).then((({position:e,delay:t})=>{r.Notify.success(`Виконаний проміс ${e} за ${t} мс`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`Завалений проміс ${e} за ${t}мс`)})),e+=t}(t),e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.f2a25d91.js.map