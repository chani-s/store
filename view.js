const getProduct = (product) => {
    return `
    <div class = "product">
    <h2>${product.title}</h2>
    <p>${product.price}</p>
    <img src="${product.image}" alt="${product.title}">
    </div>`;
}

const renderProducts = (products) => {
    let productsStr = ``;
    for (const product of products) {
        productsStr += getProduct(product);
    }
    document.getElementById("prod-area").innerHTML = productsStr;
}