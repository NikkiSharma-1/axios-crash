<%- include('../includes/head.ejs') %>
    <link rel="stylesheet" href="/css/product.css">
    </head>

    <body>
        <%- include('../includes/navigation.ejs') %>

            <main>
                <% if (prods.length > 0) { %>
                    <div class="grid">
                        <% for (let product of prods) { %>
                            <article class="card product-item">
                                <header class="card__header">
                                    <h1 class="product__title">
                                        <%= product.title %>
                                    </h1>
                                </header>
                                <div class="card__image">
                                    <img src="<%= product.imageUrl %>" alt="<%= product.title %>">
                                </div>
                                <div class="card__content">
                                    <h2 class="product__price">$
                                        <%= product.price %>
                                    </h2>
                                    <p class="product__description">
                                        <%= product.description %>
                                    </p>
                                </div>
                                <div class="card__actions">
								<a href="/products/<%= product.id %>" class="btn">Details</a>                                    
								<form action="/add-to-cart" method="POST">
                                        <button class="btn">Add to Cart</button>
                                    </form>
                                </div>
                            </article>
                            <% } %>
                    </div>
                    <% } else { %>
                        <h1>No Products Found!</h1>
                        <% } %>
            </main>
            <%- include('../includes/end.ejs') %>