# Testing Guide - Mayank Enterprises E-commerce Platform

## Prerequisites
1. MongoDB must be running on `localhost:27017`
2. Node.js installed

## Setup Steps

### 1. Backend Setup
```bash
cd server
npm install
npm run data:import  # Seeds database with products and test users
npm run dev          # Starts backend on port 5000
```

### 2. Frontend Setup (New Terminal)
```bash
cd client
npm install
npm run dev          # Starts frontend on port 5173
```

## Test Credentials
After running the seeder, you can use these test accounts:

**Admin Account:**
- Email: `admin@example.com`
- Password: `password123`

**Regular User:**
- Email: `john@example.com`
- Password: `password123`

## Testing Flow

### 1. Registration & Login
1. Open `http://localhost:5173`
2. Click "Login" in navbar
3. Click "Register" link
4. Create a new account with:
   - Name: Your Name
   - Email: test@test.com
   - Password: test123
   - Confirm Password: test123
5. You should be automatically logged in and redirected to home

### 2. Browse Products
1. Click "Products" in navbar
2. You should see 5 products with images:
   - Castrol Activ 1L
   - Motul 7100 4T
   - Shell Helix Ultra
   - MRF Nylogrip Zapper
   - Motul C2 Chain Lube
3. Click on any product to view details

### 3. Add to Cart
1. On product detail page, select quantity (1-10)
2. Click "Add to Cart"
3. You'll be redirected to cart page
4. Verify item appears with correct quantity and price

### 4. Checkout Process
1. From cart, click "Proceed to Checkout"
2. If not logged in, you'll be redirected to login
3. **Shipping Address:**
   - Enter any test address
   - Example: "123 Main St", "Mumbai", "400001", "India"
   - Click "Continue"
4. **Payment Method:**
   - Select one of: UPI, Card, or COD
   - Click "Continue to Place Order"
5. **Place Order:**
   - Review order summary
   - For UPI/Card: Click OK on payment simulation popup
   - For COD: Order is placed directly
   - Click "Place Order"

### 5. View Order History
1. After order placement, you're redirected to Profile
2. See your order in "My Orders" table
3. Check order details: ID, Date, Total, Payment Status, Delivery Status

## Common Issues & Solutions

### Issue: "Cannot connect to database"
**Solution:** Ensure MongoDB is running:
```bash
# Windows
mongod

# Or if installed as service
net start MongoDB
```

### Issue: "Network Error" or "404" on API calls
**Solution:** 
1. Check backend is running on port 5000
2. Check frontend axios config points to `http://localhost:5000`
3. Restart both servers

### Issue: "User already exists" during registration
**Solution:** Use a different email or login with existing credentials

### Issue: No products showing
**Solution:** Run the seeder again:
```bash
cd server
npm run data:import
```

### Issue: Cart not persisting
**Solution:** Check browser localStorage - cart is stored there

## API Endpoints to Test

### Products
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get single product

### Users
- POST `/api/users` - Register
- POST `/api/users/login` - Login
- GET `/api/users/profile` - Get profile (requires auth)

### Orders
- POST `/api/orders` - Create order (requires auth)
- GET `/api/orders/myorders` - Get user orders (requires auth)
- GET `/api/orders/:id` - Get order by ID (requires auth)

### Contact
- POST `/api/contact` - Submit contact form

## Expected Behavior

✅ **Registration:** Creates user, returns JWT token, auto-login
✅ **Login:** Validates credentials, returns JWT token
✅ **Cart:** Persists in localStorage, updates in real-time
✅ **Checkout:** 3-step process (Shipping → Payment → Review)
✅ **Payment:** Simulated for UPI/Card, instant for COD
✅ **Orders:** Saved to database with user reference
✅ **Profile:** Shows user info and order history

## Notes
- All passwords are hashed using bcrypt
- JWT tokens expire in 30 days
- Images are loaded from external URLs (Amazon CDN)
- Payment is simulated - no real transactions occur
