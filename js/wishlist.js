
document.addEventListener("DOMContentLoaded",()=>{
 const root=document.querySelector("#wishlist-root");if(!root)return;
 const items=Store.wishlist().map(getProduct).filter(Boolean);
 if(!items.length){root.innerHTML=`<div class="empty"><i class="fa-regular fa-heart"></i><h2>Nothing saved yet</h2><p>Tap the heart on a product to build your edit.</p><a class="btn btn-primary" href="shop.html">Explore pieces</a></div>`;return}
 root.innerHTML=`<div class="product-grid">${items.map(productCard).join("")}</div>`;bindProductActions(root);
});
