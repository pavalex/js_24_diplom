(()=>{"use strict";(()=>{document.querySelector(".button-services");const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay");document.querySelectorAll(".fancyboxModal").forEach((o=>{o.addEventListener("click",(o=>{o.preventDefault();const l=window.innerWidth;e.style.display="block",t.style.display="block",l>768&&(({timing:e,draw:t,duration:o})=>{let l,n=performance.now();requestAnimationFrame((function r(c){let a=(c-n)/o;a>1&&(a=1);let i=e(a);t(i),a<1?l=requestAnimationFrame(r):cancelAnimationFrame(l)}))})({duration:500,timing:e=>e,draw(o){e.style.opacity=o,t.style.opacity=o}})}))})),document.addEventListener("click",(o=>{(o.target.closest(".modal-close")||o.target.closest(".modal-overlay"))&&(e.style.display="none",t.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".top-menu a"),t=document.querySelector(".header-wrapper"),o=document.querySelector(".up"),l=document.querySelector(".services-section"),n=t.offsetHeight,r=l.offsetTop;for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}));window.addEventListener("scroll",(()=>{let e=window.scrollY;o.style.display=e>=r-n?"block":"none"})),o.addEventListener("click",(()=>{window.scrollTo({behavior:"smooth",left:0,top:0})}))})()})();