import React, {useContext, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableNativeFeedback, Keyboard, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import styles from './style';

import firebase from "../../services/firebaseConnection";

import {AuthContext} from "../../contexts/auth";

export default function ProfileInfo() {

  const Navigation = useNavigation();
  const {user, forgotPassword} = useContext(AuthContext);

  const [name, setName]= useState('');
  const [email, setEmail] = useState('');

  const userFirebase = firebase.auth().currentUser;

  async function updateUserName(){

    if(name.length > 3){
      await userFirebase.updateProfile({
        displayName: name
      }).then(()=>{
        alert('nome atualizado');
      }).catch((err)=>{
        console.log(err.code);
      });
    } else {
      alert('nome muito curto');
    }
  }

  async function updadeUserEmail(){
    if(email.length > 5){
      await userFirebase.updateEmail(email).then(()=>{
        console.log('email atualizado');
      }).catch((err)=>{
        console.log(err.code);
      });
    } else {
      alert('email invalido');
    }
  }

 return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{marginVertical: 10}}
    >
        <View style={styles.container}>
          
          <TouchableOpacity
            style={styles.arrowBack}
            onPress={()=> Navigation.goBack()}
          >
            <Icon name='arrow-back' size={30} color="#000"/>
          </TouchableOpacity>

          <Text style={styles.textTitle}>Basic info</Text>
          
          <TouchableNativeFeedback
          onPress={()=> Keyboard.dismiss()}
          >
          <View style={styles.boxInputs}>
          <Text style={[styles.textLabel]}>Nome</Text>
          <TextInput
            value={name}
            onChangeText={(value)=> setName(value)}
            placeholder={user.name}
            style={styles.inputs}
          />

          <TouchableOpacity
            style={styles.btnDefault}
            onPress={()=>updateUserName()}
          >
            <Text style={styles.textBtn}>Save</Text>
          </TouchableOpacity>

          <Text style={[styles.textLabel]}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(value)=> setEmail(value)}
            placeholder={user.email}
            style={styles.inputs}
          />

          <Text style={styles.textHelp}>Para atualizar suas informaçoes voce deve {'\n'}ter feito login recentemente.</Text>
          <TouchableOpacity
            style={styles.btnDefault}
            onPress={()=>updadeUserEmail()}
          >
            <Text style={styles.textBtn}>Save</Text>
          </TouchableOpacity>
          
        </View>
        </TouchableNativeFeedback>

        <View style={styles.boxOthers}>
          <Text style={[styles.textLabel, styles.textTitle]}>Outras opçoes</Text>

          <Text style={styles.textLabel}>Enviar um email para redefinir sua senha</Text>
          <TouchableOpacity
            onPress={()=>forgotPassword(user.email)}
            style={[styles.btnDefault, styles.btnSendPassword]}
          >
            <Text style={styles.textBtn}>Send Email</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </ScrollView>
   
  );
}