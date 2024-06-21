"use strict";document.addEventListener("DOMContentLoaded",function(){document.querySelector("body");var i=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:500;return void 0===e.attributes.style||"none"===e.style.display?function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:500;e.style.removeProperty("display");var r=window.getComputedStyle(e).display;"none"===r&&(r="block"),e.style.display=r;var i=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.boxSizing="border-box",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=i+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(function(){e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")},t)}(e,t):function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:500;e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.boxSizing="border-box",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(function(){e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")},t)}(e,t)},t=window.matchMedia("(max-width: 991px)"),r=document.querySelectorAll(".has-sub > a"),n=function(e){e.matches?r.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),e.target.classList.toggle("active");var t=r.nextElementSibling;i(t,500)})}):r.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault()})})};t.addEventListener("change",function(e){e.matches?(window.location.reload(),n(e)):(t.removeEventListener("change",function(e){n(e)}),window.location.reload())}),n(t);var e=document.querySelector(".hero-slider");e&&new Swiper(e,{slidesPerView:1,navigation:{nextEl:".hero-slider__next",prevEl:".hero-slider__prev"}});var o=document.querySelector(".feedback-slider");o&&new Swiper(o,{slidesPerView:1,navigation:{nextEl:".feedback-slider__next",prevEl:".feedback-slider__prev"}});var l=document.querySelector(".feedback-slider-2");l&&new Swiper(l,{slidesPerView:1,navigation:{nextEl:".feedback-slider-2__next",prevEl:".feedback-slider-2__prev"}});var s=document.querySelector(".feedback-slider-3");s&&new Swiper(s,{slidesPerView:1,centeredSlides:!0,centeredSlidesBounds:!0,spaceBetween:16,breakpoints:{992:{slidesPerView:2}},navigation:{nextEl:".feedback-slider-3__next",prevEl:".feedback-slider-3__prev"}});var a=document.querySelector(".footer-slider");a&&new Swiper(a,{slidesPerView:1,autoplay:!0,spaceBetween:16,speed:1e3,loop:!0,breakpoints:{576:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4}}});var d=document.querySelector(".category-slider");d&&new Swiper(d,{spaceBetween:16,loop:!0,breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4},1400:{slidesPerView:5,spaceBetween:24}},navigation:{nextEl:".category-slider-next",prevEl:".category-slider-prev"}});var p=document.querySelector(".deal-slider-1");p&&new Swiper(p,{slidesPerView:1,loop:!0,navigation:{nextEl:".deal-slider__next",prevEl:".deal-slider__prev"},pagination:{el:".deal-slider__pagination",type:"bullets"},breakpoints:{576:{slidesPerView:2,spaceBetween:8},1920:{slidesPerView:3,spaceBetween:16}}});var c=document.querySelector(".deal-slider-2");c&&new Swiper(c,{slidesPerView:1,loop:!0,navigation:{nextEl:".deal-slider__next",prevEl:".deal-slider__prev"},pagination:{el:".deal-slider__pagination",type:"bullets"},breakpoints:{576:{slidesPerView:2,spaceBetween:8},1920:{slidesPerView:3,spaceBetween:16}}});var y=new Swiper(".details-slider-thumb",{spaceBetween:10,slidesPerView:3,freeMode:!0,watchSlidesProgress:!0,breakpoints:{576:{spaceBetween:16,direction:"vertical",effect:"slide"}}});new Swiper(".details-slider-main",{spaceBetween:10,thumbs:{swiper:y}});var v=document.querySelectorAll(".is-cart-increment"),w=document.querySelectorAll(".is-cart-decrement");v&&v.forEach(function(t){t.addEventListener("click",function(){var e=t.previousElementSibling;e.value=parseInt(e.value)+1})}),w&&w.forEach(function(t){t.addEventListener("click",function(){var e=t.nextElementSibling;e.value=Math.max(parseInt(e.value)-1,0)})});var u=document.querySelector(".related-slider");u&&new Swiper(u,{slidesPerView:1,loop:!0,navigation:{nextEl:".related-slider__next",prevEl:".related-slider__prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:8},992:{slidesPerView:3,spaceBetween:16}}})});var preloader=document.querySelector(".preloader");window.addEventListener("load",function(){preloader&&(preloader.style.display="none")});