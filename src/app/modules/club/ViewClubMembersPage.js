import React, {Component} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';

import paginationFactory from 'react-bootstrap-table2-paginator';
import {apiAction} from "../../helpers/apiConnection";
import {api} from "../../config/apiList";


class ViewClubMembersPage extends Component {

    state = {
        data: [],
        club: []
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

    app_status(cell, row) {

        console.log(row.status);
        let status_word = "";
        let badge_status = "";

        if (row.status == 0) {
            status_word = "Inactive";
            badge_status = "inactive";
        } else if (row.status == 1) {
            status_word = "Active";
            badge_status = "active";

        } else if (row.status == 1) {
            status_word = "Verified";
            badge_status = "verified";

        }
        return (
            <div className="btn btn-outline btn-rounded button btn-block">
                <span className={"badge badge-dot m-r-10 " + badge_status}> </span>
                {status_word}

            </div>

        )
    }

    table_image = function (cell, row, rowIndex) {
        // let passport_image = "assets/images/user_placeholder.png";
        let passport_image = row.passport ? row.passport : "assets/images/user_placeholder.png";
        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        <div className="avatar avatar-image">
                            <img src={passport_image} className="rounded-circle table_image" alt=""/>
                        </div>
                    </div>
                    <div className="col-9 pt-2">
                        <div>
                            <span className="mr-2"> {row.name} </span>
                        </div>
                    </div>
                </div>
            </div>

        )
    };

    button_action = function (cell, row, rowIndex) {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Action
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Suspend</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Activate</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Verify</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    };


    render() {



        const columns = [
            {
                dataField: 'name',
                text: 'Name',
                align: 'center',
                formatter: this.table_image,
                headerAlign: 'center',
            }, {
                dataField: 'club_name',
                text: 'Club',
                align: 'center',
                sort: true,
                headerAlign: 'center'
            }, {
                dataField: 'phone',
                text: 'Phone',
                align: 'center',
                sort: true,
                headerAlign: 'center'
            }, {
                dataField: 'email',
                text: 'Email',
                align: 'center',
                sort: true,
                headerAlign: 'center'
            }, {
                dataField: 'status',
                text: 'Status',
                align: 'center',
                formatter: this.app_status,
                sort: true,
                headerAlign: 'center'
            }, {
                dataField: 'passport',
                text: 'Action',
                align: 'center',
                formatter: this.button_action,
                headerAlign: 'center',
                isDummyField: true
            }];

        const defaultSorted = [{
            dataField: 'name',
            order: 'desc'
        }];
        return (
            <div className="page-container mt-3">
                <div className="main-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="row">
                                    <div className="col-lg-12 text-center mt-3 mb-3">
                                        <Link to="/">
                                            <span className="h5 text-black-50">Registered Referrals</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <BootstrapTable
                                            keyField='id'
                                            data={this.state.data}
                                            columns={columns}
                                            striped
                                            classes="table table-head-custom table-vertical-center overflow-hidden"
                                            defaultSorted={defaultSorted}
                                            pagination={paginationFactory()}
                                            bordered={false}
                                            search
                                            wrapperClasses="table-responsive"

                                        />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewClubMembersPage;
