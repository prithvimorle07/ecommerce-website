document.addEventListener('DOMContentLoaded', function() {
    // Sample product data
   // Sample product data
const products = [
// Electronics
{
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "electronics"
},
{
    id: 2,
    name: "Smart Watch",
    description: "Feature-packed smartwatch with fitness tracking",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "electronics"
},
{
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with great sound quality",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "electronics"
},
{
    id: 4,
    name: "4K Smart TV",
    description: "55-inch 4K Ultra HD Smart TV with HDR",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "electronics"
},
{
    id: 5,
    name: "Gaming Laptop",
    description: "High-performance gaming laptop with RTX graphics",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "electronics"
},

// Clothing
{
    id: 6,
    name: "Cotton T-Shirt",
    description: "Comfortable 100% cotton t-shirt in various colors",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "clothing"
},
{
    id: 7,
    name: "Denim Jeans",
    description: "Classic fit denim jeans for everyday wear",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "clothing"
},
{
    id: 8,
    name: "Running Shoes",
    description: "Lightweight running shoes with cushioned soles",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "clothing"
},
{
    id: 9,
    name: "Winter Jacket",
    description: "Warm waterproof winter jacket with insulation",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "clothing"
},
{
    id: 10,
    name: "Formal Suit",
    description: "Premium wool suit for business occasions",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "clothing"
},

// Home
{
    id: 11,
    name: "Ceramic Coffee Mug",
    description: "Beautiful handcrafted ceramic coffee mug",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "home"
},
{
    id: 12,
    name: "Throw Pillow",
    description: "Soft decorative throw pillow for your living space",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "home"
},
{
    id: 13,
    name: "Desk Lamp",
    description: "Adjustable LED desk lamp with multiple brightness levels",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "home"
},
{
    id: 14,
    name: "Air Fryer",
    description: "Digital air fryer with multiple cooking functions",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "home"
},
{
    id: 15,
    name: "Vacuum Cleaner",
    description: "Cordless stick vacuum with powerful suction",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1591348122449-02525d70379b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "home"
},

// New Category: Books
{
    id: 16,
    name: "Bestselling Novel",
    description: "Latest bestselling fiction novel",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "books"
},
{
    id: 17,
    name: "Cookbook",
    description: "Collection of gourmet recipes",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "books"
},

// New Category: Sports
{
    id: 18,
    name: "Yoga Mat",
    description: "Non-slip premium yoga mat",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sports"
},
{
    id: 19,
    name: "Dumbbell Set",
    description: "Adjustable dumbbell set for home workouts",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sports"
}
];

    // DOM Elements
    const productGrid = document.getElementById('product-grid');
    const cartIcon = document.querySelector('.cart-icon');
    const cartCount = document.querySelector('.cart-count');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const closeCart = document.querySelector('.close-cart');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckout = document.querySelector('.close-checkout');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const checkoutForm = document.getElementById('checkout-form');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsletterForm = document.getElementById('newsletter-form');

    // Cart state
    let cart = [];

    // Initialize the app
    function init() {
        renderProducts(products);
        setupEventListeners();
        loadCart();
    }

    // Render products to the page
    function renderProducts(productsToRender) {
        productGrid.innerHTML = '';
        
        if (productsToRender.length === 0) {
            productGrid.innerHTML = '<p class="no-products">No products found in this category.</p>';
            return;
        }
        
        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.category = product.category;
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;
            
            productGrid.appendChild(productCard);
        });
        
        // Add event listeners to the new "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    // Setup event listeners
    function setupEventListeners() {
        // Cart icon click
        cartIcon.addEventListener('click', () => {
            cartModal.style.display = 'flex';
            renderCartItems();
        });
        
        // Close cart modal
        closeCart.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
        
        // Close cart modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.style.display = 'none';
            }
        });
        
        // Checkout button click
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            cartModal.style.display = 'none';
            checkoutModal.style.display = 'flex';
        });
        
        // Close checkout modal
        closeCheckout.addEventListener('click', () => {
            checkoutModal.style.display = 'none';
        });
        
        // Close checkout modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === checkoutModal) {
                checkoutModal.style.display = 'none';
            }
        });
        
        // Filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const category = button.dataset.category;
                filterProducts(category);
            });
        });
        
        // Newsletter form submission
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('input[type="email"]');
                if (emailInput) {
                    const email = emailInput.value;
                    alert(`Thank you for subscribing with ${email}!`);
                    newsletterForm.reset();
                }
            });
        }
        
        // Checkout form submission
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            processOrder();
        });
    }

    // Filter products by category
    function filterProducts(category) {
        if (category === 'all') {
            renderProducts(products);
            return;
        }
        
        const filteredProducts = products.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }

    // Add to cart function
    function addToCart(e) {
        const productId = parseInt(e.currentTarget.dataset.id);
        const product = products.find(p => p.id === productId);
        
        if (!product) return;
        
        // Check if product is already in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCart();
        showAddToCartFeedback();
    }

    // Update cart UI and localStorage
    function updateCart() {
        saveCart();
        updateCartCount();
    }

    // Update cart count in header
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Load cart from localStorage
    function loadCart() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                cart = JSON.parse(savedCart);
                updateCartCount();
            } catch (e) {
                console.error('Error parsing cart data:', e);
                cart = [];
            }
        }
    }

    // Render cart items in modal
    function renderCartItems() {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            cartTotal.textContent = '$0.00';
            return;
        }
        
        cartItems.innerHTML = '';
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
                <button class="remove-item" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            
            cartItems.appendChild(cartItem);
        });
        
        // Calculate total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', updateQuantity);
        });
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }

    // Update item quantity in cart
    function updateQuantity(e) {
        const productId = parseInt(e.currentTarget.dataset.id);
        const itemIndex = cart.findIndex(item => item.id === productId);
        
        if (itemIndex === -1) return;
        
        if (e.currentTarget.classList.contains('plus')) {
            cart[itemIndex].quantity += 1;
        } else if (e.currentTarget.classList.contains('minus')) {
            if (cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity -= 1;
            } else {
                // Remove item if quantity reaches 0
                cart = cart.filter(item => item.id !== productId);
            }
        }
        
        updateCart();
        renderCartItems();
    }

    // Remove item from cart
    function removeItem(e) {
        const productId = parseInt(e.currentTarget.dataset.id);
        cart = cart.filter(item => item.id !== productId);
        
        updateCart();
        renderCartItems();
    }

    // Show feedback when adding to cart
    function showAddToCartFeedback() {
        const feedback = document.createElement('div');
        feedback.className = 'add-to-cart-feedback';
        feedback.textContent = 'Item added to cart!';
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            feedback.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 2000);
    }

    // Process order
    function processOrder() {
        const nameInput = document.getElementById('name');
        if (!nameInput) return;
        
        const name = nameInput.value;
        alert(`Thank you for your order, ${name}! Your items will be shipped soon.`);
        
        // Clear cart
        cart = [];
        updateCart();
        renderCartItems();
        
        // Close checkout modal
        checkoutModal.style.display = 'none';
        
        // Reset form
        checkoutForm.reset();
    }

    // Initialize the app
    init();
});