export default async function({ $axios, store, redirect }) {
  $axios.baseURL = "http://localhost:8089/api/";
  await $axios.onError(async error => {
    if (error.response.status === 400) {
      store.dispatch("validation/setErrors", error.response.data.errors);
    }
    if (error.response.status === 404 || error.response.status === 401) {
      //   const isLogged = await $axios.get("account/authenticated");
      //   if (!isLogged) {
      //     return redirect("login");
      //   }
      store.dispatch("validation/setErrors", error.response.data.errors);
    }
    if (error.response.status === 403) {
      store.dispatch(
        "validation/setErrors",
        "Bạn không đủ thẩm quyền thực hiện chức năng này"
      );
    }
    if (error.response.status === 422) {
      store.dispatch("validation/setErrors", error.response.data.errors);
    }
    if (error.response.status === 403) {
      store.dispatch(
        "validation/setErrors",
        "Bạn không được phép truy xuất nội dung"
      );
    }
    if (error.response.status === 400) {
      store.dispatch("validation/setErrors", "Không tìm thấy dữ liệu");
    }
    return Promise.reject(error);
  });

  $axios.onRequest(() => {
    store.dispatch("validation/clearErrors");
  });
}
