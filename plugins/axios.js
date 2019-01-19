export default function({
    $axios,
    store,
    redirect
}) {
    $axios.baseURL = "http://localhost:8089/api/";
    $axios.onError(error => {
        if (error.response.status === 400) {
            store.dispatch("validation/setErrors", error.response.data.errors);
        }
        if (error.response.status === 404 || error.response.status === 401) {
            redirect('login')
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