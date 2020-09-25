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
    club: {
        all_club_members: {
            url: baseUrl + "admin/club/members",
            method: "get",
            data: "",
            headers: admin_headers,
        },
    },
    affiliates: {
        all_affiliates: {
            url: baseUrl + "admin/users",
            method: "get",
            data: "",
            headers: admin_headers,
        },
        active_affiliates: {
            url: baseUrl + "admin/users/active",
            method: "get",
            data: "",
            headers: admin_headers,
        },
        suspended_affiliates: {
            url: baseUrl + "admin/users/suspended",
            method: "get",
            data: "",
            headers: admin_headers,
        },
        verified_affiliates: {
            url: baseUrl + "admin/users/verified",
            method: "get",
            data: "",
            headers: admin_headers,
        },
    },
    affiliates_action_options: {

        view_affiliate: {
            url: baseUrl + "admin/user/", //user_id to be added
            method: "get",
            data: "",
            headers: admin_headers,
        },suspend_affiliate: {
            url: baseUrl + "admin/user/suspend",
            method: "get",
            data: "",
            headers: admin_headers,
        },
        unsuspend_affiliate: {
            url: baseUrl + "admin/user/unsuspend",
            method: "get",
            data: "",
            headers: admin_headers,
        },

        verify_affiliate: {
            url: baseUrl + "admin/user/verify",
            method: "get",
            data: "",
            headers: admin_headers,
        },
        unverify_affiliate: {
            url: baseUrl + "admin/user/unverify",
            method: "get",
            data: "",
            headers: admin_headers,
        },
    }
});
