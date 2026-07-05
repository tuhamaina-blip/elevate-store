# Elevate Store

A premium React e-commerce application. Elevate Store allows users to browse a curated selection of luxury products, view detailed product pages, manage a shopping cart, and complete a secure checkout flow. The app features user authentication, protected routes, real-time cart tracking, and a clean responsive design.


## Features

- Browse and search a curated collection of premium products
- Filter products by category
- View detailed product pages with Overview, Reviews, and Specifications tabs
- Add and remove items from the cart with quantity tracking
- Protected checkout page — only accessible to logged-in users
- User registration and login with form validation
- Persistent auth state using localStorage
- Order confirmation page after successful checkout
- Responsive design across all screen sizes

## Tech Stack

- React
- Vite
- React Router 
- Tailwind CSS 
- shadcn/ui
- Lucide React
- Context API

## Project Structure
src/
├── components/
│   ├── ui/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   └── ProtectedRoute.jsx
├── context/
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── pages/
├── lib/
├── App.jsx
└── main.jsx

## Getting Started

```bash
git clone https://github.com/tuhamaina-blip/elevate-store.git
cd elevate-store
npm install
npm run dev
```