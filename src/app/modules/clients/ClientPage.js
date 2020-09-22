import React from "react";
import {Switch} from "react-router-dom";
import ViewClientPage from "./ViewClientPage";
import AddClientPage from "./AddClientPage";
import {ContentRoute} from "../../../_metronic/layout";
import {routeList} from "../../config/routeList";

export default function ClientPage() {
    return (
        <Switch>
            <ContentRoute
                path={routeList.clients.view}
                component={ViewClientPage}
            />
            <ContentRoute
                path={routeList.clients.add}
                component={AddClientPage}
            />

        </Switch>
    );
}
