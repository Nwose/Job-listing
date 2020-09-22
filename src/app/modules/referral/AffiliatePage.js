import React from "react";
import {Switch} from "react-router-dom";
import ViewAffiliatePage from "./ViewAffiliatePage";
import RegisterAffiliatePage from "./RegisterAffiliatePage";
import {ContentRoute} from "../../../_metronic/layout";
import {routeList} from "../../config/routeList";

export default function AffiliatePage() {
    return (
        <Switch>
            <ContentRoute
                path={routeList.referrals.view}
                component={ViewAffiliatePage}
            />
            <ContentRoute
                path={routeList.referrals.add}
                component={RegisterAffiliatePage}
            />

        </Switch>
    );
}
