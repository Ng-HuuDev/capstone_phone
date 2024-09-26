const BASE_URL = "https://66d6822e006bfbe2e64d9b6a.mockapi.io/shopphone";

const fetchProducts = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  })
<<<<<<< HEAD
    .then(function (res) {
      // console.log("🚀 ~ res:", res);
      renderProduct(res.data);
      handleGetData(res.data);
=======
    .then(({ data }) => {
      renderProduct(data);
      handleGetData(data);
>>>>>>> 13037d2da3d7725ae400cea520b272f43d3720e7
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
