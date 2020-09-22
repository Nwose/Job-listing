const admin_headers = {
    // 'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Type': 'multipart/form-data',
    // 'Authorization': token,


};

// let baseUrl = "https://farmkonnect-backend.herokuapp.com/";
let baseUrl = "http://127.0.0.1:9900/";


export const api = Object.freeze({

    auth: {
        signup: {
            url: baseUrl + "user/register",
            method: "post",
            data: "",
            headers: admin_headers,
        },
        login: {
            url: baseUrl + "login",
            method: "post",
            data: "",
            headers: admin_headers,
        },
        compare_result: {
            url: baseUrl + "compare_result",
            method: "post",
            data: "",
            headers: admin_headers,
        }
    },
    proof_of_existence: {
        document_type: {
            url: baseUrl + "user/document/types",
            method: "get",
            data: "",
            headers: admin_headers,
        },
    }
});
