
document.addEventListener("DOMContentLoaded",()=>{
 const grid=document.querySelector("#shop-grid");if(!grid)return;
 const params=new URLSearchParams(location.search);const state={q:params.get("search")||"",category:params.get("category")||"",sort:"popular",min:0,max:5000};
 const q=document.querySelector("#shop-search");if(q)q.value=state.q;
 const catChecks=[...document.querySelectorAll("[data-category-filter]")];catChecks.forEach(c=>c.checked=c.value===state.category);
 function apply(){
   state.q=q?.value.trim().toLowerCase()||"";
   state.category=catChecks.find(c=>c.checked)?.value||"";
   state.sort=document.querySelector("#sort")?.value||"popular";
   state.min=Number(document.querySelector("#min-price")?.value||0);state.max=Number(document.querySelector("#max-price")?.value||5000);
   let items=PRODUCTS.filter(p=>(!state.category||p.category===state.category||p.subCategory===state.category)&&(!state.q||`${p.name} ${p.category} ${p.subCategory} ${p.description}`.toLowerCase().includes(state.q))&&p.price>=state.min&&p.price<=state.max);
   if(state.sort==="low")items.sort((a,b)=>a.price-b.price);if(state.sort==="high")items.sort((a,b)=>b.price-a.price);if(state.sort==="new")items.sort((a,b)=>b.newest-a.newest);if(state.sort==="popular")items.sort((a,b)=>b.popularity-a.popularity);
   document.querySelector("#results-count").textContent=`${items.length} ${items.length===1?"piece":"pieces"} found`;renderGrid(grid,items);renderWishlistButtons();
 }
 document.querySelector("#filter-form")?.addEventListener("submit",e=>{e.preventDefault();apply()});q?.addEventListener("input",apply);document.querySelector("#sort")?.addEventListener("change",apply);catChecks.forEach(c=>c.addEventListener("change",()=>{catChecks.forEach(x=>{if(x!==c)x.checked=false});apply()}));document.querySelector("#clear-filters")?.addEventListener("click",()=>{q.value="";catChecks.forEach(c=>c.checked=false);document.querySelector("#min-price").value=0;document.querySelector("#max-price").value=5000;apply()});apply();
});
