const sidebarLinks = document.querySelectorAll('.sidebar a');
const contentArea = document.getElementById('content-area');
const contentMap = {
    'dashboard': `
        <div class="container mt-5">
            <!-- Profile Section -->
            <div class="row">
            <div class="col-md-6 col-sm-12 mb-4">
                <div class="card h-100">
                <div class="card-body text-center">
                    <img class='user-profile' src="{{ profile.profile.url }}" alt="Profile Picture">
                    <h5 class="card-title">{{ profile.user.first_name }}</h5>
                    <p class="text-muted">Customer</p>
                    <a href="{% url 'edit_address' %}">edit profile</a>
                </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 mb-4">
                <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">Billing Address</h5>
                    <p class="mb-1">{{ profile.user.first_name }} {{ profile.user.last_name }}</p>
                    <p class="mb-1">{{ profile.phone }}</p>
                    <p class="mb-1">{{ profile.province }}</p>
                    <p class="mb-1">{{ profile.street }} {{ profile.municipality }} {{ profile.province }} {{ profile.postal_code }}</p>
                    <p class="mb-1">{{ profile.user.username }}</p>
                    <a href="{% url 'edit_address' %}">edit profile</a>
                </div>
                </div>
            </div>
            </div>

            <!-- Order History Section -->
            <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                <h5 class="card-title mb-0">Recent Order History</h5>
                <a href="#" class="btn btn-link">View All</a>
                </div>
                <div class="table-responsive">
                <table class="table table-bordered">
                    <thead class="table-light">
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>#738</td>
                        <td>8 Sep, 2020</td>
                        <td>₱135.00 (5 Products)</td>
                        <td><a href="#" class="btn btn-link">Processing</a></td>
                    </tr>
                    <tr>
                        <td>#703</td>
                        <td>24 May, 2020</td>
                        <td>₱25.00 (1 Product)</td>
                        <td><a href="#" class="btn btn-link">On The Way</a></td>
                    </tr>
                    <tr>
                        <td>#130</td>
                        <td>22 Oct, 2020</td>
                        <td>₱250.00 (4 Products)</td>
                        <td><a href="#" class="btn btn-link">Delivered</a></td>
                    </tr>
                    <tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    `,
    'order-history': `
        <h2>Order History</h2>
        <p>Here is a summary of your recent orders.</p>
        <table class="table">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#738</td>
                    <td>8 Sep, 2020</td>
                    <td>₱135.00</td>
                    <td>Processing</td>
                </tr>
                <tr>
                    <td>#703</td>
                    <td>24 May, 2020</td>
                    <td>₱25.00</td>
                    <td>On the Way</td>
                </tr>
            </tbody>
        </table>
    `,
    'wishlist': `
        <h2>Wishlist</h2>
        <p>Here are the items you have saved in your wishlist.</p>
    `,
    'shopping-cart': `
        <h2>Shopping Cart</h2>
        <p>Here are the items currently in your shopping cart.</p>        
    `,
    'settings': `
        <h2>Settings</h2>
        <p>Here you can manage your account settings and preferences.</p>
    `,
    'notifications': `
        <h2>Notifications</h2>
        <p>Here are your recent notifications.</p>
    `,
    'logout': `
        <h2>Log-out</h2>
        <p>You have successfully logged out. See you next time!</p>
    `
};

sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        const section = link.getAttribute('data-section');
        contentArea.innerHTML = contentMap[section];
    });
});