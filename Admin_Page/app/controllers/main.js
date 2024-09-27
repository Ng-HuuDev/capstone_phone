const BASE_URL = "https://66d6822e006bfbe2e64d9b6a.mockapi.io/shopphone";

var editedId = null;
// GOI API lay danh sach san pham
function fetchProduct() {
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then(function (res) {
      renderProduct(res.data);
      getDataApi(res.data);
    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
}
fetchProduct();

// xoa sp
function deleteProduct(id) {
  axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      console.log("🚀 ~ xoa thanh cong", res);
      fetchProduct();
      showMessage("Xóa Thành Công");
    })
    .catch(function (err) {
      console.log("🚀 ~ deleteProduct ~ err:", err);
    });
}

// them sp - "POST"

// lay thong tin tu form
function addNewProduct() {
  const isValid = validateForm();
  if (isValid) {
    const payload = getDataForm();
    // method
    axios({
      url: BASE_URL,
      method: "POST",
      data: payload,
    })
      .then(function (res) {
        console.log("🚀 ~ res:", res);
        // tat modal s zau khi them thanh cong
        // lay data moi nhat sau khi them
        showMessage("Thêm sản phẩm thành công");
        fetchProduct();
        $("#myModal").modal("hide");
      })
      .catch(function (err) {});
  }
}

// sua sp: lay chi tiet - "PUT"

function editProduct(id) {
  // console.log(id);
  // chuan bi cho viec update san pham => gan id vao bien editedId
  editedId = id;
  // dua vao id, goi api lay chi tiet san pham
  axios({
    url: `${BASE_URL}/${id}`,
    method: "PUT",
  })
    .then(function (res) {
      // console.log("🚀 ~ res:", res.data);
      // hien modal
      $("#myModal").modal("show");
      // gan du lieu lay tu server vao form
      hienThiThongTin(res.data);
      // khong cho user sua ten san pham
      document.getElementById("TenSP").disabled = true;
    })
    .catch(function (err) {
      console.log("🚀 ~ editProduct ~ err:", err);
    });
}

// cap nhat

function updateProduct() {
  var product = addNewProduct();
  axios({
    url: `${BASE_URL}/product/${editProduct}`,
    method: "PUT",
    data: product,
  })
    .then(function (res) {
      // console.log("🚀 ~ res:", res);
      // tat modal
      $("#myModal").modal("hide");

      // goi lai api moi nhat tu server
      showMessage("Cập Nhật Thành Công");
      fetchProduct();
    })
    .catch(function (err) {
      console.log("🚀 ~ updateProduct ~ err:", err);
    });
}
