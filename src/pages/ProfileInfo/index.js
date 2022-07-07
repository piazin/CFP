import React, {useContext, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableNativeFeedback, Keyboard, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import AwesomeAlert from 'react-native-awesome-alerts';
import {useNavigation} from "@react-navigation/native";
import styles from './style';

import firebase from "../../services/firebaseConnection";

import {AuthContext} from "../../contexts/auth";

export default function ProfileInfo() {

  const Navigation = useNavigation();
  const {user, forgotPassword} = useContext(AuthContext);

  const [name, setName]= useState('');
  const [email, setEmail] = useState('');

  const [showAlertName, setShowAlertName] = useState(false);
  const [showAlerEmail, setShowAlertEmail] = useState(false);

  const userFirebase = firebase.auth().currentUser;

  async function updateUserName(){

    if(name.length > 3){
      await userFirebase.updateProfile({
        displayName: name
      }).then(async ()=>{

        await firebase.database().ref('users').child(user.uid).update({
          name: name
        })
        .then(()=>{
          console.log('sucessy');
          setShowAlertName(true);
          setName('');
        }).catch((err)=>{
          console.log(err);
        });

      }).catch((err)=>{
        console.log(err);
      });
    } else {
      alert('nome muito curto');
    }
  }

  async function updadeUserEmail(){
    if(email.length > 5){
      await userFirebase.updateEmail(email).then(()=>{
        console.log('email atualizado');
        setShowAlertEmail(true);
      }).catch((err)=>{
        if(err.code == 'auth/requires-recent-login'){
          alert('você deve fazer login novamente.');
        }
      });
    } else {
      alert('email invalido');
    }
  }

 return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff"}}
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
            placeholderTextColor="#000"
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
            placeholderTextColor="#000"
            style={styles.inputs}
          />

          <Text style={styles.textHelp}>Para atualizar suas informações, você deve {'\n'}ter feito login recentemente.</Text>
          <TouchableOpacity
            style={styles.btnDefault}
            onPress={()=>setShowAlertEmail(true)}
          >
            <Text style={styles.textBtn}>Save</Text>
          </TouchableOpacity>
          
        </View>
        </TouchableNativeFeedback>

        <View style={styles.boxOthers}>
          <Text style={[styles.textLabel, styles.textTitle]}>Outras opções</Text>

          <Text style={styles.textLabel}>Enviar um email para redefinir sua senha</Text>
          <TouchableOpacity
            onPress={()=>forgotPassword(user.email)}
            style={[styles.btnDefault, styles.btnSendPassword]}
          >
            <Text style={styles.textBtn}>Send Email</Text>
          </TouchableOpacity>
          
        </View>
      </View>
      
      <AwesomeAlert
        show={showAlertName}
        showProgress={false}
        title="Nome atualizado!"
        message="Na proxima vez que fizer login seu nome será atualizado."
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor="#009F40"
        onConfirmPressed={() => {
            setShowAlertName(false);
        }}
      />

      <AwesomeAlert
        show={showAlerEmail}
        showProgress={false}
        title="Atualizar email!"
        message={`Este email está correto: ${email} ?`}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={true}
        showCancelButton={true}
        showConfirmButton={true}
        confirmText="Ok"
        cancelText='Cancelar'
        confirmButtonColor="#009F40"
        cancelButtonColor="#922626"
        onCancelPressed={()=>{
          setShowAlertEmail(false);
        }}
        onConfirmPressed={() => {
            updadeUserEmail()
            setShowAlertEmail(false);
        }}
      />
      
    </ScrollView>
   
  );
}