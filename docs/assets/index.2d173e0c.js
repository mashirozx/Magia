import{R as e,_ as t,a}from"./vendor.0f4aac64.js";const l=({changeChapter:t})=>e.createElement("div",{className:"chapter-open"},e.createElement("div",{className:"chapter-open__bg"},e.createElement("div",{className:"chapter-open__bg-group1"},e.createElement("span",null),e.createElement("span",null)),e.createElement("div",{className:"chapter-open__bg-group2"},e.createElement("span",null),e.createElement("span",null))),e.createElement("div",{className:"chapter-open__lines"},e.createElement("div",{className:"chapter-open__line-top"}),e.createElement("div",{className:"chapter-open__line-bottom"})),e.createElement("div",{className:"chapter-open__center-ball"},e.createElement("span",null),e.createElement("span",null)),e.createElement("div",{className:"chapter-open__title"},e.createElement("div",{className:"chapter-open__title-item-box"},e.createElement("div",{className:"chapter-open__title-item"},e.createElement("span",{className:"title-mo"})),e.createElement("div",{className:"chapter-open__title-item"},e.createElement("span",{className:"title-nv"}),e.createElement("span",{className:"title-fa"}))),e.createElement("div",{className:"chapter-open__title-wrap"},e.createElement("div",{className:"chapter-open__title-wrap-item"}),e.createElement("div",{className:"chapter-open__title-wrap-item"}),e.createElement("div",{className:"chapter-open__title-wrap-item"}),e.createElement("div",{className:"chapter-open__title-wrap-item"}))),e.createElement("div",{className:"chapter-open__switch"},e.createElement("div",{className:"chapter-open__switch-balls"},e.createElement("span",null),e.createElement("span",null)),e.createElement("div",{className:"chapter-open__switch-balls"},e.createElement("span",null),e.createElement("span",null)),e.createElement("div",{className:"chapter-open__switch-balls"},e.createElement("span",null),e.createElement("span",null)),e.createElement("div",{className:"chapter-open__switch-balls"},e.createElement("span",null),e.createElement("span",null)),e.createElement("div",{className:"chapter-open__switch-rotate",onAnimationEnd:()=>{t()}}))),n=({changeChapter:a})=>{const[l,n]=t.exports.useState(0),c=t=>e.createElement("div",{key:`chapter1__word-group-${t}`,className:`chapter1__word-group chapter1__word-group-${t}`},e.createElement("span",{onAnimationEnd:e=>{var t;(null==(t=null==e?void 0:e.animationName)?void 0:t.includes("hidden"))&&l+1<=5&&n(l+1)}}),e.createElement("span",null),e.createElement("span",null),e.createElement("span",null),e.createElement("span",null),e.createElement("span",null),e.createElement("span",null),e.createElement("span",null));return e.createElement("div",{className:`chapter1 chapter1-color-${l}`},(()=>{const e=[];for(let t=1;t<=5;t++)e.push(c(t));return e})())},c=({changeChapter:t})=>e.createElement("div",{className:"chapter2"}),r=({changeChapter:t})=>e.createElement("div",{className:"chapter3"}),s=({})=>e.createElement("div",{className:"chapter-home"});function m(){const[a,m]=t.exports.useState(0),p=()=>{m(a+1<=4?a+1:4)};return e.createElement("div",{className:"magia"},0===a&&e.createElement(l,{changeChapter:p}),1===a&&e.createElement(n,{changeChapter:p}),2===a&&e.createElement(c,{changeChapter:p}),3===a&&e.createElement(r,{changeChapter:p}),4===a&&e.createElement(s,null))}a.render(e.createElement(e.StrictMode,null,e.createElement(m,null)),document.getElementById("root"));
