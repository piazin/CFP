import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Login from "../pages/login";
import Registration from "../pages/registration";

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthStack.Screen
                name="Login"
                component={Login}
            />

            <AuthStack.Screen
                name="Registration"
                component={Registration}
            />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;