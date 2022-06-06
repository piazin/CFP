//imports//
import React, {useState} from "react";
import {
  View, 
  Text, 
  TouchableOpacity,  
  Image, 
} from "react-native";
//import {useNavigation} from "@react-navigation/native";
import styles from "./styles";
//imports//

export default function InitHome() {

  //const navigation = useNavigation();

  //go new user register
  /*function navigateToRegistration(){ 
    navigation.navigate('Registration');
  }*/

    return(
      <View style={styles.container}>
        <Text style={styles.textCFP}> CFP </Text>

        <Image
          source={require('../../images/landing/manageMoney.png')}
          style={styles.imgManageMoney}
        />
        
        <View style={styles.boxButtons}>

          <TouchableOpacity 
            style={styles.btnCreateLogin}
            //onPress={navigateToRegistration}  
          >
            <Text style={styles.textCreateLogin}>Nova Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
           style={styles.btnCreateLogin}
           //onPress={()=> navigation.navigate('Login')}
           >
            <Text style={styles.textCreateLogin}>Login</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }

