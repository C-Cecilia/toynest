# 🧸 ToyNest

An e-commerce web app for children's toys — browse products, manage your cart, and explore the store.

---

## ✨ Features

- **Homepage** — Hero banner, category cards, product highlights, newsletter signup, Instagram wall
- **Catalog** — Full product listing with filter tabs (All / Wooden Toys / Stuffed Animals)
- **Product Detail** — Quantity selector, Add to Cart, product specs table
- **Cart** — Modal popup with live subtotal + full cart page with table view
- **Delivery** — Shipping info and packaging details
- **About** — Store introduction with parallax background effect
- **Contacts** — Google Maps, contact form, social links
- **Admin Dashboard** — Paginated product table; add / edit / delete with form validation

---

## 🛠 Tech Stack

| | |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| State | React Context API |
| Styling | CSS files + CSS variables |

---

## 📁 Project Structure

```
src/
├── styles/         # CSS files & design tokens
├── constants/      # Image paths, nav links, static config
├── context/        # ProductContext, CartContext
├── components/     # Reusable UI components & page sections
├── pages/          # One file per route
├── router/         # Centralised route config
├── App.jsx
└── main.jsx

public/
└── imgs/           # Static assets (icons, product images, backgrounds)
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repo
git clone https://github.com/your-username/toynest.git
cd toynest

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📄 Pages & Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/catalog` | Catalog |
| `/detail/:id` | Product Detail |
| `/cart` | Cart |
| `/delivery` | Delivery |
| `/about` | About |
| `/contacts` | Contacts |
| `/admin` | Admin Dashboard |

---

## 🗂 Admin

- The first 16 products are **default data** and cannot be edited or deleted
- Products added via Admin are immediately reflected across all frontend pages
- New product IDs auto-increment from the current maximum

---

## 📦 Image Assets

Place your images under `public/imgs/`:

```
public/
└── imgs/
    ├── icon/          # SVG icons
    ├── home-bg.jpg
    ├── plush-toy.png
    └── ...
```

All paths are managed in `src/constants/index.js`.
