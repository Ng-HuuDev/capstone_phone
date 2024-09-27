// render array product tu api
function renderProduct(productArr) {
  let contentHtml = "";
  productArr.forEach(function (item) {
    let trString = `
      <tr>
          <td>${item.id} </td>
          <td>${item.name} </td>
          <td>${item.price} </td>
          <td><img src="${item.img}" alt="" width="100px" /> </td>
          <td>${item.desc} </td>
          <td>${item.type} </td>
          <td>
          <button onclick='deleteProduct(${item.id})' class="btn btn-success"> Xoa </button>
          <button  onclick='editProduct(${item.id})' class="btn btn-danger"> Sua </button>
          </td>
      </tr>
      `;
    contentHtml += trString;
  });
  document.getElementById("tblDanhSachSP").innerHTML = contentHtml;
}

// Thong bao: CRUD
function showMessage(message) {
  Toastify({
    text: message,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#00b09b)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

// get dataForm

const getDataForm = () => {
  const name = document.getElementById("TenSP").value;
  const price = document.getElementById("GiaSP").value;
  const img = document.getElementById("HinhSP").value;
  const desc = document.getElementById("MotaSP").value;
  const type = document.getElementById("loaiSP").value;
  // tao object
  const payLoad = {
    name: name,
    price: price,
    img: img,
    desc: desc,
    type: type,
  };
  return payLoad;
};

// show dataform
function hienThiThongTin(product) {
  document.getElementById("TenSP").value = product.name;
  document.getElementById("GiaSP").value = product.price;
  document.getElementById("HinhSP").value = product.img;
  document.getElementById("MotaSP").value = product.desc;
  document.getElementById("loaiSP").value = product.type;
}

// Sắp xếp sp giá từ thấp đến cao hoac tu cao den thap

const filterCart = [];
const getDataApi = (data) => {
  filterCart.length = 0;
  for (let i = 0; i < data.length; i++) {
    filterCart.push(data[i]);
  }
};
const handleFilterPrice = () => {
  const inputTypePrice = document.getElementById("myPrice");
  const valuePrice = inputTypePrice.value;

  if (valuePrice === "highToLow") {
    filterCart.sort((a, b) => b.price - a.price);
    const newCart = [...filterCart];

    renderProduct(newCart);
  } else if (valuePrice === "lowToHigh") {
    filterCart.sort((a, b) => a.price - b.price);
    renderProduct(filterCart);
  }
};
