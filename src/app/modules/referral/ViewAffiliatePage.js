import React, {Component} from "react";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {apiAction} from "../../helpers/apiConnection";
import {api} from "../../config/apiList";
import ViewUsersPage from "../users/ViewUsersPage";



class ViewAffiliatePage extends Component {

    state = {
        data: [],
        loader: false,
    };
    componentDidMount() {

        //display loader
        this.setState({ loader: true });

        apiAction(api.affiliates.all_affiliates, this.init_data);
    }

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
            }, () => console.log(this.state))
        }

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

        return (
            <div>

                <ViewUsersPage
                    users={this.state.data}
                    loader = {this.state.loader}
                    update_status={this.update_status}
                    table_title="All Affiliates"/>
            </div>
        );
    }
}

export default ViewAffiliatePage;
