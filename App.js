import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "react-native";

import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";

console.disableYellowBox=true;

export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
        <StatusBar backgroundColor="#131313" barStyle="light-content"/>
      </AuthProvider>
    </NavigationContainer>
  );
}