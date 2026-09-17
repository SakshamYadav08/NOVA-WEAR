# NOVA / WEAR — Premium Dark Fashion E-Commerce

A complete frontend upgrade of the supplied **Cloth-Shopping-Site** project. The original product/category imagery and core clothing-store concept are preserved, while the UI, responsiveness, information architecture and client-side functionality have been rebuilt with **HTML5, CSS3 and Vanilla JavaScript**.

## Highlights

- Premium dark fashion UI with a restrained gold accent
- Responsive desktop, tablet and mobile layouts
- Mobile navigation, accessible focus states and reduced-motion support
- Central product dataset in `js/products.js`
- Dynamic shop search, category filters, price filters and sorting
- Product detail gallery, size/color/quantity selection and related products
- Persistent cart and wishlist using `localStorage`
- Dynamic subtotal, discount, shipping and grand total calculations
- Demo coupons: `WELCOME10`, `SAVE20`, `FASHION15`
- Frontend checkout with browser validation
- Demo order generation and persistent order history
- Demo register/login/logout flow using `localStorage`
- Reusable toast notifications and polished empty states
- About and contact pages
- No framework, npm, backend, database or build step required

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Inter)
- Font Awesome CDN icons
- Browser localStorage/sessionStorage

## Folder structure

```text
Clothing-Ecommerce-Final/
├── index.html
├── shop.html
├── product.html
├── cart.html
├── wishlist.html
├── checkout.html
├── orders.html
├── login.html
├── register.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── products.js
│   ├── app.js
│   ├── shop.js
│   ├── product.js
│   ├── cart.js
│   ├── wishlist.js
│   ├── checkout.js
│   ├── auth.js
│   └── orders.js
└── original project assets/
    └── supplied JPG/PNG assets at project root
```

## Run in VS Code

### Simplest
1. Extract `Clothing-Ecommerce-Final.zip`.
2. Open the extracted folder in VS Code.
3. Open `index.html` in a browser.

### Recommended
Install the **Live Server** extension in VS Code, right-click `index.html`, and choose **Open with Live Server**.

No `npm install`, Node.js, backend, database or environment variables are required.

## localStorage behavior

The browser stores:
- `nova_cart` — cart lines and selected variants
- `nova_wishlist` — product IDs in wishlist
- `nova_coupon` — current demo coupon
- `nova_user` — demo account
- `nova_orders` — placed demo orders

Clear browser site data/localStorage to reset the demo.

## Demo limitations

- Authentication is local-only and is **not secure**. Passwords are stored in localStorage solely to demonstrate frontend state.
- Checkout and payments are simulated. No real card, UPI or COD transaction is processed.
- Coupon codes are demo discounts only.
- Product inventory, shipping and order statuses are not connected to a backend.
- Google Fonts and Font Awesome are loaded from CDNs when internet access is available; the core layout and product assets remain local.

## Future improvements

- REST/GraphQL product API
- Real authentication with hashed passwords
- Server-side cart and order management
- Payment gateway integration
- Product inventory and admin dashboard
- Reviews backed by a database
- Real image CDN/optimization
- Search analytics and personalized recommendations

## Author

**Saksham**  
Frontend e-commerce project — upgraded from the supplied Cloth-Shopping-Site source.

## License

Educational / portfolio demonstration project.
