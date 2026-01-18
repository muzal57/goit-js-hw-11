import{a as p,S as f,i as c}from"./assets/vendor-MgecxatS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="49874649-8c00636039374d469a712b585",d="https://pixabay.com/api/";function g(r){const s={params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}};return p.get(d,s).then(i=>i.data)}const h=document.querySelector(".gallery"),a=document.querySelector(".loader");let y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(r){const s=r.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:n,comments:l,downloads:u})=>`
    <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${i}" alt="${e}" />
    <div class="info">
      <p class="info-item"><b>Likes</b> <span>${t}</span></p>
      <p class="info-item"><b>Views</b> <span>${n}</span></p>
      <p class="info-item"><b>Comments</b> <span>${l}</span></p>
      <p class="info-item"><b>Downloads</b> <span>${u}</span></p>
    </div>
  </a>
</li>`).join("");h.innerHTML=s,y.refresh()}function L(){a&&a.classList.remove("is-hidden")}function S(){a&&a.classList.add("is-hidden")}function q(){const r=document.querySelector(".gallery");r&&(r.innerHTML="")}const P=document.querySelector(".form");P.addEventListener("submit",$);function $(r){r.preventDefault();const s=r.currentTarget,i=s.elements["search-text"].value.trim();if(i===""){c.error({message:"Please enter a search query!",position:"topRight"});return}q(),L(),g(i).then(o=>{if(o.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(o=>{c.error({message:`Something went wrong: ${o.message}`,position:"topRight"})}).finally(()=>{S(),s.reset()})}
//# sourceMappingURL=index.js.map
