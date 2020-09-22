import React, {Suspense} from "react";
import {Redirect, Switch} from "react-router-dom";
import {LayoutSplashScreen, ContentRoute} from "../_metronic/layout";
import AffiliatePage from "./modules/referral/AffiliatePage";
// import ClientPage from "./modules/clients/ClientPage";

import {routeList} from "./config/routeList";


import ViewAffiliatePage from "./modules/referral/ViewAffiliatePage";
import RegisterAffiliatePage from "./modules/referral/RegisterAffiliatePage";

import AddClientPage from "./modules/clients/AddClientPage";
import ViewClientPage from "./modules/clients/ViewClientPage";


import {DashboardPage} from "./pages/DashboardPage";

export default function BasePage() {
    return (
        <Suspense fallback={<LayoutSplashScreen/>}>
            <Switch>
                {
                    /* Redirect from root URL to /dashboard. */
                    <Redirect exact from="/" to="/dashboard"/>
                }
                <ContentRoute path="/dashboard" component={DashboardPage}/>
                <ContentRoute path={routeList.referrals.view} component={AffiliatePage}/>
                <ContentRoute path={routeList.referrals.view} component={ViewAffiliatePage}/>
                <ContentRoute path={routeList.referrals.add} component={RegisterAffiliatePage}/>

                <ContentRoute path={routeList.clients.view} component={ViewClientPage}/>
                <ContentRoute path={routeList.clients.add} component={AddClientPage}/>
                {/* <ContentRoute component={ClientPage} /> */}
                <Redirect to="error/error-v1"/>
            </Switch>
        </Suspense>
    );
}
