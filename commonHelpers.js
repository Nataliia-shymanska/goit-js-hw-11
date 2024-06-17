import{i as c,S as l}from"./assets/vendor-0fc460d7.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),searchButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list")};function m(o){const a=o.hits.map(t=>`<li class="images-list-item">
  <a class="img-link" href=${t.largeImageURL} onclick="event.preventDefault()"><img class="img" src=${t.webformatURL} alt=${t.tags}></img></a>
   <ul class="img-dscr">
      <li class="img-data">
        <p class="img-data-title">Likes</p>
        <p class="img-data-numbers">${t.likes}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Views</p>
        <p class="img-data-numbers">${t.views}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Comments</p>
        <p class="img-data-numbers">${t.comments}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Downloads</p>
        <p class="img-data-numbers">${t.downloads}</p>
      </li>
    </ul>
</li>`).join(`
`);u.imageList.innerHTML=a}document.querySelector(".search-form"),document.querySelector(".search-input"),document.querySelector(".search-btn"),document.querySelector(".images-list");function d(o){const a="https://pixabay.com",t="/api/",s=new URLSearchParams({key:"44319460-4af2fb7eeaa8b0840083a4a49",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:30}),e=`${a}${t}?${s}`;return console.log(e),fetch(e).then(r=>{if(r.ok)return r.json();throw new Error(r.status)})}const i={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),searchButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list"),loader:document.querySelector(".loader")};i.loader.style.display="none";i.imageSearchForm.addEventListener("submit",o=>{o.preventDefault();const a=o.target.elements.userData.value.trim();if(a==="")return i.imageList.innerHTML="",c.info({message:"You need to enter a search request!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});i.loader.style.display="block",d(a).then(t=>{if(t.hits.length===0)return i.imageList.innerHTML="",c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"322px",backgroundColor:"#EF4040",messageColor:"#fafafb",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});m(t),new l(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh()}).catch(t=>{console.error("Error fetching images:",t),c.error({message:"Failed to fetch images. Please try again later.",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"})}).finally(()=>{i.loader.style.display="none"}),o.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
