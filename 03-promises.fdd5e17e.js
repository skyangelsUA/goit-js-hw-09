!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i=document.querySelector(".form");function a(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r&&o({position:e,delay:n}),t({position:e,delay:n})}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();var n={delay:Number(i.elements.delay.value),step:Number(i.elements.step.value),amount:Number(i.elements.amount.value)};console.log(n),function(e){for(var n=e.delay,o=e.step,t=e.amount,i=1;i<=t;i+=1)console.log(n,o,t,i),a(i,n).then((function(e){var n=e.position,o=e.delay;r.Notify.success("Виконаний проміс ".concat(n," за ").concat(o,"мілісекунд"))})),n+=o}(n),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.fdd5e17e.js.map
