import React, {Component} from "react";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {Link} from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import {apiAction} from "../../helpers/apiConnection";
// import {api} from "../../config/apiList";


class ViewClientPage extends Component {

    state = {
        data: [
            {name: "jerry jayce", phone: "08181750775", status: "1", passport: "/assets/images/users/jayce.png"}
        ]
    };

    componentDidMount() {

        // apiAction(api.student.comparison_history, this.init_data);

    }

    init_data = (res) => {
        console.log(res);
        this.setState({
            data: res.data.data,
        }, () => console.log(this.state.data))
    };

    render() {


        let button_action = function (cell, row, rowIndex) {
            return (
                <Link to="/compare_existing" className="btn btn-outline btn-rounded button text-center">
                    Compare
                </Link>
            )
        };
        let table_image = function (cell, row, rowIndex) {
            let passport_image =  row.passport ? row.passport : "assets/images/user_placeholder.png";
            return (
                <div>
                    <div className="row">
                        <div className="col-3">
                            <div className="avatar avatar-image">
                                <img src={passport_image} alt=""/>
                            </div>
                        </div>
                        <div className="col-9 pt-2">
                            <div>
                                <span> {row.name}</span>
                            </div>
                        </div>
                    </div>
                </div>

            )
        };

        const columns = [
            {
                dataField: 'name',
                text: 'Name',
                align: 'center',
                formatter: table_image,
                sort: true,
                headerAlign: 'center'
            }, {
                dataField: 'phone',
                text: 'Phone',
                align: 'center',
                sort: true,
                headerAlign: 'center'
            }, {
                dataField: 'status',
                text: 'Status',
                align: 'center',
                sort: true,
                headerAlign: 'center'
            }, {
                dataField: '',
                text: 'Action',
                align: 'center',
                formatter: button_action,
                headerAlign: 'center'
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

                                {/*    code here*/}
                                <BootstrapTable
                                    keyField='id'
                                    data={this.state.data}
                                    columns={columns}
                                    defaultSorted={defaultSorted}
                                    pagination={paginationFactory()}
                                    headerClasses="header-class"

                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewClientPage;
