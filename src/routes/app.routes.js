import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";

const AppTabs = createBottomTabNavigator();

function AppRoutes(){
    return(
        <AppTabs.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <AppTabs.Screen
                name="Home"
                component={Home}
            />

        </AppTabs.Navigator>
    );
}

export default AppRoutes;