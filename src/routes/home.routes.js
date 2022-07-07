import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from "../pages/Home";
import New from "../pages/NewTransaction";

const HomeStack = createNativeStackNavigator();

function HomeRoutes(){
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <HomeStack.Screen
                name="Home"
                component={Home}
            />

            <HomeStack.Screen
                name="New"
                component={New}
            />
        </HomeStack.Navigator>
    )
        
}

export default HomeRoutes;