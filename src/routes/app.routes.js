import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "../pages/Home";
import New from "../pages/NewTransaction";

import ProfileRoutes from "./profile.routes";

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
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopWidth: 0
                }
            }}
        >
            <AppTabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) =>{
                        return <Icon name="home" color={color} size={size}/>
                    }
                }}
            />

            <AppTabs.Screen
                name="NewTransactions"
                component={New}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Icon name="add" color={color} size={size}/>
                    },
                    tabBarIconStyle:{
                        display: 'none'
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