#MERN AMAZONA


1. Intro
2. Install Tools
3. Create React App
4. Create Git Repository
5. List Products
    1. create products array
    2. add product images
    3. render products
    4. style products
6. Add routing
    1. npm i react-router-dom
    2. create route for home screen
    3. create router for product screen
7. Create Node.JS Server
    1. run npm init in root folder
    2. Update package.json set type: module
    3. Add .js to imports
    4. npm install express
    5. create server.js
    6. add start command as node backend/server.js
    7.require express
    8. create route for / return backend is ready.
    9. move products.js from frontend to backend
    10. create route for /api/products
    11. return products
    12. run npm start
8. Fetch Products From Backend
    1. set proxy in package.json
    2. npm install axios 
    3. use state hook 
    5. use reducer hook
9. Manage State by Reducer Hook
    1. define reducer
    2. update fetch data
    3. get state from useReducer
10. Add bootstrap UI Framework
    1. npm install react-bootstrap bootstrap
    2. update App.js
11. Create Product and Rating Component
    1. create Rating component
    2. create Product component
    3. Use Rating component in Product component
12. Create Product Details Screen
    1. fetch product from backend
    2. create 3 columns for image, info, and action
13. Create Loading and Message Component
    1. create loading component
    2. use spinner component
    3. create utils.js to define getError function
14. Implement Add to Cart
    1. Create React Context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler
15. Complete Add to Cart
    1. check exist item in the cart
    2. check count in stock in backend
16. Create Cart Screen
    1. create 2 columns
    2. display items list
    3. create action column
17. Complete Cart Screen
    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout
18. Create Signin Screen
    1. create sign in form
    2. add email and password
    3. add signin button
19. Connect To MongoDB Database
    1. create atlas mongodb database
    2. npm install mongoose
    3. connect to mongodb database
20. Seed Sample Data
    1. create Product model
    2. create User model
    3. create seed route
    4. use route in server.js
    5. seed sample product
21. Seed Sample Users
    1. create user model
    2. seed sample users
    3. create user routes
22. Create Signin Backend API
    1. Create signin API
    2. npm install jsonwebtoken
    3. define generateToken
23. Complete Signin Screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header
24. Create Shippping Screen
    1. create form inputs
    2. handle save shipping address
    3. add chechout wizard bar
25. Create Sign Up Screen
    1. create input forms
    2. handle submit
    3. create backend api
26. Implement Select Payment Method Screen
    1. create input forms
    2. handle submit
27. Create Place Order Screen
    1. show cart items, payment and address
    2. handle place order action
    3. create order create api 
28. Implement Place Order Action
    1. handle place order action
    2. create order create api
29. Create Order Screen
    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 columns
30. Pay Order By PayPal
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. user usePayPalScriptReducer in Order Screen
    6. implement loadPayPalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend
31. Display Order History
     1. create order screen
     2. create order history api
     3. use api in the frontend
32. Create Profile Screen
     1. get user info from context
     2. show user information
     3. create user update api
33. Publish To Heroku
    1. create and config node project
    2. serve build folder in frontend folder
    3. create heroku account
34. Add Sidebar and Search Box
     1. add sidebar
     2. add search box
35. Create Search Screen
     1. show filters
     2. create api for searching products
     3. display results
36. Create Admin Menu
    1. define protected route component 
    2. define admin route component
    3. add menu for admin in header
37. Create Dashboard Screen
    1. create dashboard ui
    2. implement backend api
    3. connect ui to backend
38. Manage Products
    1. create products list ui
    2. implement backend api
    3. fetch data
39. Create Product
     1. create products button
     2. implement backend api
     3. handle on click
40. Create Edit Product
     1. create edit button
     2. create edit product ui
     3. dispaly product info in the input boxes
41. Implement Update Product
     1. create edit product backend api
     2. handle update click
42. Upload Product Image
     1. create cloudinary account
     2. use the api key in env file
     3. handle upload file
     4. implement backend api to upload
43. Delete Product
     1. show delete button
     2. implement backend api
     3. handle on click
44. List Orders
     1. create order list screen
     2. implement backen api
     3. fetch and display orders
45. Deliver Order
     1. add deliver button
     2. handle click action
     3. implement backen api for deliver
46. Delete Order
     1. add delete button
     2. handle click action
     3. implement backen api for delete
47. List Users
     1. create user list screen
     2. implement backen api
     3. fetch and display users
 48. Edit User
     1. create edit button
     2. create edit product ui
     3. dispaly product info in the input boxes
     4. implement backend api
     5. handle edit click
49. Delete User
     1. add delete button
     2. handle click action
     3. implement backen api for delete