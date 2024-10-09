

const getProduct = (product) => {
    return `
    <div class = "product">
    <p class="ptitle">${product.title}</p>
    <img src="${product.image}" alt="${product.title}">
    <p class="price"> ₪${product.price}</p>
    </div>`;
}

const renderProducts = (products) => {
    let productsStr = ``;
    for (const product of products) {
        productsStr += getProduct(product);
    }
    document.getElementById("prod-area").innerHTML = productsStr;
}