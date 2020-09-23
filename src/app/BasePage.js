import React, {Suspense} from "react";
import {Redirect, Switch} from "react-router-dom";
import {LayoutSplashScreen, ContentRoute} from "../_metronic/layout";

import {routeList} from "./config/routeList";


import ViewAffiliatePage from "./modules/referral/ViewAffiliatePage";
import RegisterAffiliatePage from "./modules/referral/RegisterAffiliatePage";

import ViewClubMembersPage from "./modules/club/ViewClubMembersPage";
import ViewClubsPage from "./modules/club/ViewClubsPage";

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

                {/*affiliates*/}
                <ContentRoute path={routeList.referrals.view} component={ViewAffiliatePage}/>
                <ContentRoute path={routeList.referrals.add} component={RegisterAffiliatePage}/>

                {/*clubs*/}
                <ContentRoute path={routeList.club.view_club_members} component={ViewClubMembersPage}/>
                <ContentRoute path={routeList.club.view_clubs} component={ViewClubsPage}/>

                {/*clients*/}
                <ContentRoute path={routeList.clients.view} component={ViewClientPage}/>


                <Redirect to="error/error-v1"/>
            </Switch>
        </Suspense>
    );
}
