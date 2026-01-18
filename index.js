import{a as d,S as p,i as a}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="ТУТ_ТВОЙ_API_KEY",g="https://pixabay.com/api/";async function h(o){return(await d.get(g,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${i}</p>
          <p><b>Comments</b> ${f}</p>
          <p><b>Downloads</b> ${m}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function v(){l.innerHTML=""}function w(){u.classList.add("is-visible")}function S(){u.classList.remove("is-visible")}const c=document.querySelector(".form"),P=c.elements["search-text"];c.addEventListener("submit",o=>{o.preventDefault();const r=P.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search term!"});return}v(),w(),h(r).then(s=>{if(!s.hits.length){a.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(s.hits)}).catch(()=>{a.error({message:"Something went wrong. Try again later!"})}).finally(()=>{S(),c.reset()})});
//# sourceMappingURL=index.js.map
