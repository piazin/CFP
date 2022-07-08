import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from "../pages/Home";
import New from "../pages/NewTransaction";
import Wallet from "../pages/Wallet";

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

            <HomeStack.Screen
                name="Wallet"
                component={Wallet}
            />
        </HomeStack.Navigator>
    )
        
}

export default HomeRoutes;