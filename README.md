# Shoppy Globe E-Commerce Application

# Project Description
->This is an E-Commerce Application built using React(vite).
->This allows users to browse for the products,we can add products to cart and see the whole details of the product and we can plae the order.

# How to run the project
-> First clone the project;
-> Install node modules using "npm install";
-> Run the projct using "npm run dev".

# Features added
->Added search box using redux.
->Added home, cart and checkout in header.
-> Displayed all the products using dummy API with useEffect.
-> Added a button for view , to see the details of the product.
-> Added add to cart button,to add the product to the using slice with store.
->We can increse,decrease and remove products in the cart.
-> Added checkout to place the order with some details from the user.
-> Displayed error message for the unknown routes.

# Technologies used
-> React
-> React-redux
-> react-toolkit
-> Hooks
->Javascript
->CSS
->HTML

# Project Structure

src/
 ├── components/
 │   ├── Header.jsx
 │   ├── ProductItem.jsx
 │   ├── CartItem.jsx
 ├── pages/
 │   ├── ProductList.jsx
 │   ├── ProductDetail.jsx
 │   ├── Cart.jsx
 │   ├── Checkout.jsx
 │   ├── NotFound.jsx
 ├── redux/
 │   ├── store.js
 │   ├── cartSlice.js
 │   ├── searchSlice.js
 ├── hooks/
 │   ├── useFetchProducts.js
 ├── App.jsx
 ├── main.jsx
 ├── App.css
 ├── router.jsx
 
 # GitHub Link
 https://github.com/HarshavardhanReddy00/Shoppy-Globe-Application

 # Author
 Harshavardhan Reddy