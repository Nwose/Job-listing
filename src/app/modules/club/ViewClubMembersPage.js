import React, {Component} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {apiAction} from "../../helpers/apiConnection";
import {api} from "../../config/apiList";
import ViewUsersPage from "../users/ViewUsersPage";



class ViewClubMembersPage extends Component {

    state = {
        data: []
    };

    componentDidMount() {

        apiAction(api.club.all_club_members, this.init_data);

    }


    init_data = (res) => {
        //merge club name with user object
        let user_data = res.data.data.map((element, index) => {
            let club_name = {club_name: element.club.name};
            return {...element.user, ...club_name}
        });

        this.setState({
            data: user_data
        }, () => console.log(this.state.data))
    };

    render() {


        return (
            <div>
                <ViewUsersPage users={this.state.data} table_title = "All Club Affiliates"/>
            </div>
        );
    }
}

export default ViewClubMembersPage;
