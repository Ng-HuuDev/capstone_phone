const BASE_URL = "https://66d6822e006bfbe2e64d9b6a.mockapi.io/shopphone";

const fetchProducts = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then(({ data }) => {
      renderProduct(data);
      handleGetData(data);
    })
    .catch((error) => {
      console.log("🚀error---->", error);
    });
};
fetchProducts();

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
