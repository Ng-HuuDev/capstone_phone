const BASE_URL = "https://66d6822e006bfbe2e64d9b6a.mockapi.io/shopphone";

const fetchProducts = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then(({ data }) => {
      renderProductList(data);
      handleGetData(data);
    })
    .catch((error) => {
      console.log("🚀error---->", error);
    });
};
fetchProducts();

const fetchProductId = (productId) => {
  axios({
    url: `${BASE_URL}/${productId}`,
    method: "GET",
  })
    .then(({ data }) => {
      handleProductInCart(data);
    })
    .catch((error) => {
      console.log("🚀error---->", error);
    });
};
// function fetchProducts() {
//   axios({
//     url: BASE_URL,
//     method: "GET",
//   })
//     .then(function (res) {
//       // console.log("🚀 ~ res:", res);
//       renderProduct(res.data);
//     })
//     .catch(function (err) {
//       console.log("🚀 ~ updateProduct ~ err:", err);
//     });
// }
// fetchProducts();
