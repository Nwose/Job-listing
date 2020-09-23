import React, {Component} from "react";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {apiAction} from "../../helpers/apiConnection";
import {api} from "../../config/apiList";
import {generic_submit} from "../../helpers/genericFunctions";
// import {Link} from "react-router-dom";
import {populate_options} from "../../helpers/genericFunctions";
// import {FormattedMessage} from "react-intl";

class RegisterAffiliatePage extends Component {
    state = {
        document_types: [],
    };


    componentDidMount() {
        //get document types for form options
        let document_type_api = {...api.proof_of_existence.document_type};
        apiAction(document_type_api, this.init_document_options);
    }

    init_document_options = (res) => {
        this.setState({
            document_types: [...res.data.data]
        })
    };

    render() {
        let handleSubmit = (e) => {
            e.preventDefault();
            generic_submit(redirect, "register_affiliate", api.auth.signup);
        };

        let redirect = (res) => {
            console.log(res);
            if (res.status === 201) {
                this.props.history.push("/register/affiliate");
            }
        };


        return (

            <div className="page-container mt-3">
                <div className="main-content">
                    <div className="row justify-content-md-center">
                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-body">


                                    <div className="text-center mb-10 mb-lg-20">
                                        <h3 className="font-size-h1">
                                            Register Affiliate
                                        </h3>
                                        <p className="text-muted font-weight-bold">
                                            Enter Affiliate Detail
                                        </p>
                                    </div>


                                    <form id="register_affiliate" onSubmit={handleSubmit} encType="multipart/form-data">
                                        <div className="form-group">
                                            <label className="font-weight-semibold"
                                                   htmlFor="userName">Name:</label>
                                            <input type="text"
                                                   className="form-control form-control-solid h-auto py-5 px-6"
                                                   id="userName"
                                                   name="name"
                                                   placeholder="Username"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-semibold"
                                                   htmlFor="email">Email:</label>
                                            <input type="email"
                                                   className="form-control form-control-solid h-auto py-5 px-6"
                                                   id="email"
                                                   name="email" placeholder="Example@gmail.com"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-semibold"
                                                   htmlFor="email">Phone:</label>
                                            <input type="text"
                                                   className="form-control form-control-solid h-auto py-5 px-6"
                                                   id="phone"
                                                   name="phone" placeholder="Enter Phone number"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-semibold"
                                                   htmlFor="password">Password:</label>
                                            <input type="password"
                                                   className="form-control form-control-solid h-auto py-5 px-6"
                                                   id="password"
                                                   name="password" placeholder="Password"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-semibold"
                                                   htmlFor="confirmPassword">
                                                Confirm Password:
                                            </label>
                                            <input type="password"
                                                   className="form-control form-control-solid h-auto py-5 px-6"
                                                   id="confirmPassword"
                                                   placeholder="Confirm Password"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-semibold"
                                                   htmlFor="confirmPassword">Proof Of Existence:</label>
                                            <input type="file"
                                                   className="form-control form-control-solid h-auto py-5 px-6"
                                                   id="proof_of_existence"
                                                   placeholder="Confirm Password" name="proof_of_existence"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cat_id">Document Type:</label>
                                            <select className="form-control form-control-solid h-auto py-5 px-6"
                                                    name="document_type" required>
                                                {populate_options(this.state.document_types, "name")}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cat_id">Address:</label>
                                            <textarea className="form-control" id="cat_id" name="address"
                                                      placeholder="Enter Address" required>
                                            </textarea>
                                        </div>
                                        <div className="form-group">
                                            <div className="text-center p-t-15">
                                                <button className="btn btn-rounded btn-dark">Register
                                                    Affiliate
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default RegisterAffiliatePage;
