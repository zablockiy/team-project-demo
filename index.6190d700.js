var anchors=document.querySelectorAll('a[href*="#"]'),mobileMenuRef=document.querySelector("[data-menu]"),menuBtnRef=document.querySelector("[data-menu-button]"),_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_loop=function(r,t){var e=t.value;e.addEventListener("click",(function(r){r.preventDefault();var t=e.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"}),"mobile-menu is-open"===mobileMenuRef.classList.value&&(mobileMenuRef.classList.toggle("is-open"),menuBtnRef.classList.toggle("is-open"))}))},_iterator=anchors[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0)_loop(_iterator,_step)}catch(r){_didIteratorError=!0,_iteratorError=r}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}
//# sourceMappingURL=index.6190d700.js.map
