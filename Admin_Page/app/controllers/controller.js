const renderProductList = (productList) => {
  const containerEl = document.getElementById("tblDanhSachSP");
  containerEl.innerHTML = "";
  let html = "";
  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];
    html += `
      <tr>
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>
      <img width="80px" height="80px" src="${product.img}"/>
      </td>
      <td>${product.desc}</td>
      <td>${product.type}</td>
      <td>
      <button class="btn btn-primary" onClick="deleteProduct('${product.id}')">Xóa</button>
      <button class="btn btn-danger" onClick="editProduct(${product.id})">Sửa</button>
      </td>
      
      </tr>
      `;
  }
  containerEl.innerHTML = html;
};

const getDataForm = () => {
  const nameEl = document.getElementById("TenSP").value;
  const priceEl = document.getElementById("GiaSP").value;
  const imageEl = document.getElementById("HinhSP").value;
  const descEl = document.getElementById("MotaSP").value;
  const typeEl = document.getElementById("loaiSP").value;

  const payload = {
    name: nameEl,
    price: priceEl,
    img: imageEl,
    desc: descEl,
    type: typeEl,
  };
  return payload;
};

const filterCart = [];
const getDataApi = (data) => {
  filterCart.length = 0;
  for (let i = 0; i < data.length; i++) {
    filterCart.push(data[i]);
  }
};

const searchProduct = () => {
  const inputSearchEl = document.querySelector(".inputSearch").value;
  const valueSearch = inputSearchEl.toLowerCase();
  const newData = filterCart.filter((item) => {
    return item.name.toLowerCase().includes(valueSearch);
  });
  renderProductList(newData);
};

const handleFilterPrice = () => {
  const inputTypePrice = document.getElementById("myPrice");
  const valuePrice = inputTypePrice.value;

  if (valuePrice === "highToLow") {
    filterCart.sort((a, b) => b.price - a.price);
    const newCart = [...filterCart];

    renderProductList(newCart);
  } else if (valuePrice === "lowToHigh") {
    filterCart.sort((a, b) => a.price - b.price);
    renderProductList(filterCart);
  }
};
