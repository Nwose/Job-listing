import React, {Component} from "react";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {apiAction} from "../../helpers/apiConnection";
import {api} from "../../config/apiList";
import ViewUsersPage from "../users/ViewUsersPage";


class ViewAffiliatePage extends Component {

    state = {
        data: []
    };

    componentDidMount() {

        apiAction(api.affiliates.active_affiliates, this.init_data);

    }


    init_data = (res) => {
        console.log(res.data.data);
        //merge club name with user object

        if(!res.data.data == ""){
            let user_data = res.data.data.map((element, index) => {
                let club_name = {club_name: element.clubs[0].name};
                return {...element, ...club_name}
            });
            this.setState({
                data: user_data
            }, () => console.log(this.state.data))
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
        }, ()=> console.log(this.state))
    };

    render() {


        return (
            <div>
                <ViewUsersPage users={this.state.data} update_status={this.update_status}
                               table_title="Active Affiliates"/>
            </div>
        );
    }
}

export default ViewAffiliatePage;
