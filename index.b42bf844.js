var iceCountRefs=document.querySelectorAll(".ice-count"),checkBoxesRef=document.querySelector(".check-box-wrapper");iceCountRefs.forEach((function(e){return e.disabled=!0})),checkBoxesRef.addEventListener("click",(function(e){var c=document.querySelector(".ice-count-".concat(e.target.name));if(e.target.classList.contains("custom-checkbox__input")){if(e.target.checked)return void(c.disabled=!1);c.disabled=!0}}));
//# sourceMappingURL=index.b42bf844.js.map