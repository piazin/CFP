import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Profile from '../pages/Profile';
import ProfileInfo from '../pages/ProfileInfo';

const ProfileStack = createNativeStackNavigator();

function ProfileRoutes() {
 return (
    <ProfileStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <ProfileStack.Screen 
            name='ProfileHome'
            component={Profile}
        />

        <ProfileStack.Screen
            name='UpdateUser'
            component={ProfileInfo}
        />

    </ProfileStack.Navigator>
  );
}

export default ProfileRoutes;