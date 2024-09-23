const renderProduct = (productList) => {
  const renderEl = document.querySelector(".card-list");
  let html = "";
  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];
    html += `
      <div class="card">
      <div class="card-top">
          <i class="fa-brands fa-apple"></i>
          <span>In Stock</span>
      </div>
      <div class="card-image">
          <img class="product-image"
              src="${product.img}" alt="">
      </div>
      <div class="card-detail">
          <h3 class="card-name">${product.name}</h3>
          <p class="card-price">${product.price}$</p>
      </div>
      <div class="card-action">
          <button onClick = "handleAddProduct(${product.id})">Add</button>
      </div>
  </div>
      `;
  }
  renderEl.innerHTML = html;
};
