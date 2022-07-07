import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import ProfileRoutes from "./profile.routes";
import HomeRoutes from "./home.routes";

const AppTabs = createBottomTabNavigator();

function AppRoutes(){
    return(
        <AppTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#FF7A00",
                tabBarInactiveTintColor: "#C46F20",
                tabBarStyle:{
                    backgroundColor: "#222",
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopWidth: 0
                }
            }}
        >
            <AppTabs.Screen
                name="HomeRoutes"
                component={HomeRoutes}
                options={{
                    tabBarIcon: ({color, size}) =>{
                        return <Icon name="home" color={color} size={size}/>
                    }
                }}
            />


            <AppTabs.Screen
                name="Profile"
                component={ProfileRoutes}
                options={{
                    tabBarIcon: ({color, size})=>{
                        return <Icon name="settings" color={color} size={size}/>
                    }
                }}
            />

        </AppTabs.Navigator>
    );
}

export default AppRoutes;