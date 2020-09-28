import React, {Component} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {apiAction} from "../../helpers/apiConnection";
import {api} from "../../config/apiList";
import ViewUsersPage from "../users/ViewUsersPage";



class ViewClubMembersPage extends Component {

    state = {
        data: [],
        loader: false,
    };

    componentDidMount() {

        //display loader
        this.setState({ loader: true });

        apiAction(api.club.all_club_members, this.init_data);

    }


    init_data = (res) => {
        if (!res.data.data == "") {

            //merge club name with user object
            let user_data = res.data.data.map((element, index) => {
                let club_name = {club_name: element.club.name};
                return {...element.user, ...club_name}
            });

            this.setState({
                data: user_data,
                loader: false,
            }, () => console.log(this.state.data))
        }
    };

    render() {


        return (
            <div>
                <ViewUsersPage
                    users={this.state.data}
                    loader = {this.state.loader}
                    table_title = "All Club Affiliates"/>
            </div>
        );
    }
}

export default ViewClubMembersPage;
