// render ra man hình
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

// phone filter
const filterPhone = []; // tạo mảng chứa sp muốn lọc
const handleGetData = (data) => {
  // duyệt mảng
  for (let i = 0; i < data.length; i++) {
    filterPhone.push(data[i]);
  }
};

const handleFilterProduct = () => {
  const selectedEl = document.getElementById("mySelect");
  let valueSelected = selectedEl.value;

  if (valueSelected === "Samsung") {
    // console.log("filterPhone---->", filterPhone);
    const filterSamsung = filterPhone.filter((item) => {
      return item.type === "Samsung";
    });
    renderProduct(filterSamsung);
  }

  if (valueSelected === "Iphone") {
    const filterIphone = filterPhone.filter((item) => {
      return item.type === "Iphone";
    });
    renderProduct(filterIphone);
  }

  if (valueSelected === "--") {
    renderProduct(filterPhone);
  }
};
