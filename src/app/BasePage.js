import React, {Suspense} from "react";
import {Redirect, Switch} from "react-router-dom";
import {LayoutSplashScreen, ContentRoute} from "../_metronic/layout";

import {routeList} from "./config/routeList";


import ViewAffiliatePage from "./modules/referral/ViewAffiliatePage";
import ViewActiveAffiliatePage from "./modules/referral/ViewActiveAffiliatePage";
import ViewSuspendedAffiliatePage from "./modules/referral/ViewSuspendedAffiliatePage";
import ViewVerifiedAffiliatePage from "./modules/referral/ViewVerifiedAffiliatePage";


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
                <ContentRoute path={routeList.referrals.view_active} component={ViewActiveAffiliatePage}/>
                <ContentRoute path={routeList.referrals.view_suspended} component={ViewSuspendedAffiliatePage}/>
                <ContentRoute path={routeList.referrals.view_verified} component={ViewVerifiedAffiliatePage}/>


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
