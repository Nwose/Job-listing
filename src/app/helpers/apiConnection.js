import axios from "axios";



export const reduxGetAddApiAction = (dispatch, api, action_type) => {
    //make async call to api
    // console.log(api);
    axios({
        method: api.method,
        url: api.url,
        headers: api.headers,
        data: api.data,
    }).then(res => {
        dispatch({
            type: action_type,
            payload: res.data.data
        });
    }).catch(function (error) {
        console.log(error);
    });
};

export const reduxDeleteApiAction = (dispatch, api, action_type, id) => {
    //make async call to api

    axios({
        method: api.method,
        url: api.url,
        headers: api.headers,
        data: api.data,
    }).then(res => {
        dispatch({
            type: action_type,
            payload: id
        });
    });
};

export const apiAction = (api, callback) => {
    console.log(api);
    axios({
        method: api.method,
        url: api.url,
        headers: api.headers,
        data: api.data,
    }).then(res => {
        callback(res);
    });
};