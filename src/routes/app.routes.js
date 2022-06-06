import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import InitHome from "../pages/InitHome";

const AppStack = createNativeStackNavigator();

function AppRoutes(){
    return(
        <AppStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <AppStack.Screen
                name="InitHome"
                component={InitHome}
            />
        </AppStack.Navigator>
    );
}

export default AppRoutes;