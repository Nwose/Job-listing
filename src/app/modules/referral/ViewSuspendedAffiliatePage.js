import React, {Component} from "react";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {apiAction} from "../../helpers/apiConnection";
import {api} from "../../config/apiList";
import ViewUsersPage from "../users/ViewUsersPage";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ViewAffiliatePage extends Component {

    state = {
        data: [],
        loader: false,

    };

    componentDidMount() {
        //display loader
        this.setState({ loader: true });

        apiAction(api.affiliates.suspended_affiliates, this.init_data);

    }


    //notifications
    notify = (msg, type) => {
        toast[type](msg)
    };
    dismiss = () => toast.dismiss();


    init_data = (res) => {

        if (!res.data.data == "") {

            //merge club name with user object
            let user_data = res.data.data.map((element, index) => {
                let club_name = {club_name: element.clubs[0].name};
                return {...element, ...club_name}
            });
            this.setState({
                data: user_data,
                loader: false,
            }, () => console.log(this.state.data))
        }

        //dismiss notification
        this.dismiss();

    };
    update_status = (api_url, status, user_id) => {
        this.setState({
            ...this.state,
            status,
            user_id
        });
        console.log(api_url);
        apiAction(api_url, this.show_updated_status);
    };

    show_updated_status = (res) => {
        let updated_status = this.state.data.map((element) => {
            if (element.id == this.state.user_id) {

                element.status = this.state.status;
                //update row status

            }
            return element;

        });

        console.log(this.state);
        console.log(updated_status);

        this.setState({
            data: updated_status
        }, () => console.log(this.state))
    };

    render() {

        let loading_notification = (notify) => {
            return (
                <div>
                    <ToastContainer
                        position="top-center"
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        autoClose={false}
                    />
                </div>
            );
        };

        return (
            <div>
                {/*{loading_notification(this.notify)}*/}

                <ViewUsersPage
                    users={this.state.data}
                    loader = {this.state.loader}
                    update_status={this.update_status}
                    table_title="Suspended Affiliates"/>
            </div>
        );
    }
}

export default ViewAffiliatePage;
