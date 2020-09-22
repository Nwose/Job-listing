import React from "react";
import {apiAction} from "./apiConnection";


export const populate_options = ((options, name, text_as_value = "") => {
    if (Array.isArray(options)) {
        return options.map(element => {

            let id = element.id;

            if (text_as_value !== "") {
                id = element[text_as_value];
            }
            return (
                <option value={id} key={element.id}>
                    {element[name]}
                </option>
            )
        })
    }
});

export const generic_submit = ((call_back_fn, form_name, api) => {


    let form = document.getElementById(form_name);

    let formData = new FormData(form);

    let editedApi = {...api};
    editedApi.data = formData;

    apiAction(editedApi, call_back_fn);

});


//function returns form field as an object...name as key and input field content as value
//this function does not return file input field, handle that separately

export const getFormFields = (form => {
    let formFields = {};
    for (let i = 0; i < form.length; i++) {
        formFields[form[i].name] = form[i].value;
    }
    return formFields;
});

export const myOnClick = (e => {
    return 0;
    // e.preventDefault();
});