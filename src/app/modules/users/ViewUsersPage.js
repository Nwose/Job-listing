import React, {Component} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';

import paginationFactory from 'react-bootstrap-table2-paginator';
import {api} from "../../config/apiList";
import { InPageLoader } from "../../../_metronic/layout/components/loader/inPageLoader";



class ViewUsersPage extends Component {

    constructor(props) {

        super(props);
        console.log(props);

    }


    app_status = (cell, row) => {

        console.log("i read");

        let status_word = "";
        let badge_status = "";

        if (row.status == 0) {
            status_word = "Not Activated";
            badge_status = "inactive";
        } else if (row.status == 1) {
            status_word = "Active";
            badge_status = "active1";

        } else if (row.status == 2) {
            status_word = "Verified";
            badge_status = "verified";

        } else if (row.status == 3) {
            status_word = "Suspended";
            badge_status = "suspended";

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

    button_action = (cell, row, rowIndex) => {


        let my_action = (api_dir, status) => {
            let axios_header = {...api_dir};
            axios_header.url = axios_header.url + row.id;

            this.props.update_status(axios_header, status, row.id);
        };






        let options = [];
        //inactive
        if (row.status == 0) {
            options.push(
                {action: () => my_action(api.affiliates_action_options.view_affiliate, ""), word: " View"}
            )
        } else if (row.status == 1) {
            options.push(
                {action: () => my_action(api.affiliates_action_options.view_affiliate, ""), word: " View"},
                {action: () => my_action(api.affiliates_action_options.view_affiliate, 3), word: " Suspend"},
                {action: () => my_action(api.affiliates_action_options.view_affiliate, 2), word: " Verify"},
            )
        } else if (row.status == 2) {
            options.push(
                {action: () => my_action(api.affiliates_action_options.view_affiliate, ""), word: " View"},
                {action: () => my_action(api.affiliates_action_options.view_affiliate, 3), word: " Suspend"},
                {action: () => my_action(api.affiliates_action_options.view_affiliate, 1), word: " Unverify"},
            )
        } else if (row.status == 3) {
            options.push(
                {action: () => my_action(api.affiliates_action_options.view_affiliate, ""), word: " View"},
                {action: () => my_action(api.affiliates_action_options.view_affiliate, 1), word: " Unsuspend"},
            )
        }

        return (
            <div className="action_options">
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Action
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            options.map((element) => {
                                return (
                                    <Dropdown.Item onClick={element.action}>{element.word}</Dropdown.Item>
                                )
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    };


    render() {

        console.log(this.props.users);

        const columns = [
            {
                dataField: 'name',
                text: 'Name',
                sort: true,
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

        const { loader } = this.props;

        return (
            <div className="page-container mt-3">
                <div className="main-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="row">
                                    <div className="col-lg-12 text-center mt-3 mb-3">
                                        <Link to="/">
                                            <span className="h5 text-black-50">{this.props.table_title}</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <InPageLoader loader={loader} />

                                        <BootstrapTable
                                            keyField='id'
                                            data={this.props.users}
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

export default ViewUsersPage;
