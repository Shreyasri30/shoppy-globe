# Shoppy Globe

A small e-commerce frontend built with **React + Vite**, using the
[DummyJSON](https://dummyjson.com/products) API.  
Users can browse products, search, view details, add items to cart, adjust
quantities, and complete a simple checkout flow.

Repository: <https://github.com/Shreyasri30/shoppy-globe>

---

## 1. Features

### Core User Flows

- **Product Listing Page**
  - Fetches products from DummyJSON API.
  - Displays product image, title, rating and price.
  - Includes a search bar to filter products by product title.
  - Each card has:
    - **View details** button (navigates to full product details page).
    - **Add to cart** button (adds item to cart using Redux state).

- **Product Details Page**
  - Route: `/products/:productId`
  - Shows:
    - Product image
    - Title
    - Description
    - Category
    - Rating
    - Price
  - Includes **Add to cart** button.
  - Includes **Back to products** link.

- **Cart Page**
  - Route: `/cart`
  - Shows list of cart items with:
    - Image, title, unit price
    - Quantity controls (**+ / −** buttons)
    - Line subtotal (price × quantity)
    - **Remove** button for each item
  - Shows **Order Summary** on the right:
    - Subtotal
    - Delivery charge
    - Grand total
  - Header cart indicator shows **Cart (N)**, where `N` is the total number of
    items in the cart.
  - Includes:
    - **Continue shopping** link (back to products)
    - **Proceed to Checkout** button
    - **Clear cart** button

- **Checkout Page**
  - Route: `/checkout`
  - Simple checkout form:
    - Full name
    - Email address
    - Delivery address
  - Order summary panel:
    - Items count
    - Subtotal
    - Delivery charge
    - Grand total
  - **Place Order** button:
    - Validates required form fields (basic required checks).
    - On success, shows a “order placed successfully” style confirmation
      message and clears the cart state.

### State Management

- Uses **Redux Toolkit** for global cart state:
  - Slice file: `src/store/cartSlice.js`
  - Store setup: `src/store/store.js`
- State fields:
  - `items` – array of cart line items (`{ id, title, price, thumbnail, quantity, ... }`)
  - `searchText` – used for product search in the listing page
- Reducers:
  - `addToCart`
  - `incrementQuantity`
  - `decrementQuantity`
  - `removeFromCart`
  - `clearCart`
  - `setSearchText`

### Routing & Navigation

- Uses **React Router** (`createBrowserRouter`) for navigation.
- Route configuration in `src/router.jsx`:
  - `/` → `HomePage`
  - `/products/:productId` → `ProductDetail`
  - `/cart` → `CartPage`
  - `/checkout` → `CheckoutPage`
  - `*` → `NotFound` (fallback 404 page)

### Data Fetching, Loading & Error Handling

- Custom hook `useProducts` in `src/hooks/useProducts.js`:
  - Fetches products from DummyJSON on initial render.
  - Exposes:
    - `products`
    - `loading`
    - `error`
  - Shows a loading state on the listing page until data is ready.
  - If there is an API error, shows a friendly error message.

- Product detail page:
  - Fetches the single product by `id`.
  - Shows a simple loading state while fetching.
  - If the product is not found, shows “Product not found”.

### UI / Styling

- Clean, light theme inspired by modern e-commerce sites.
- Separate styling files:
  - `src/App.css`
  - `src/index.css`
  - `src/components/Header.css`
- Layout:
  - Fixed header with project name, search bar and cart link.
  - Main product grid with responsive cards.
  - Dedicated Cart and Checkout layouts with card-style sections.
- No UI libraries used – pure CSS so that React fundamentals remain the focus.

---

## 2. Tech Stack

- **React 18** (with Vite)
- **React Router DOM**
- **Redux Toolkit** + **React-Redux**
- **Axios** for HTTP requests
- **DummyJSON** product API
- Plain **CSS** for styling

---

## 3. Project Structure

```bash
shoppy-globe/
├─ public/
│  └─ index.html
└─ src/
   ├─ components/
   │  ├─ CartItem.jsx
   │  ├─ Checkout.jsx
   │  ├─ Header.css
   │  ├─ Header.jsx
   │  ├─ NotFound.jsx
   │  ├─ ProductDetail.jsx
   │  ├─ ProductItem.jsx
   │  └─ ProductList.jsx
   ├─ hooks/
   │  └─ useProducts.js
   ├─ pages/
   │  ├─ CartPage.jsx
   │  ├─ CheckoutPage.jsx
   │  └─ HomePage.jsx
   ├─ store/
   │  ├─ cartSlice.js
   │  └─ store.js
   ├─ App.css
   ├─ App.jsx
   ├─ index.css
   ├─ main.jsx
   └─ router.jsx
