import React, {useState, useContext} from "react";
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import {useNavigation} from "@react-navigation/native";
import styles from "./styles";
//imports//

export default function Login(){

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [btnEyesPassword, setBtnEyesPassword] = useState(true);
    const [sourceBtnEyes, setSourceBtnEyes] = useState('eye');

    function setSecureText(){
        if(btnEyesPassword == true){
            setBtnEyesPassword(false);
            setSourceBtnEyes('eye-off-sharp');
        } else {
            setBtnEyesPassword(true);
            setSourceBtnEyes('eye');
        }

    }

    return(
      <SafeAreaView style={styles.container}>
    
        <Text style={styles.textLogin}> Login </Text>

        <Text style={styles.subTextLogin}>acesse sua conta</Text>

        <View style={styles.boxInputs}>
            <TextInput
                onChangeText={(text)=> setEmail(text)}
                value={email}
                placeholder="Email"
                placeholderTextColor="#000"
                style={styles.inputEmailAndPassword}
                underlineColorAndroid="transparent"
                keyboardType="email-address"
                autoComplete="email"
            />
            
            <View>
                <TextInput
                    onChangeText={(text)=> setPassword(text)}
                    value={password}
                    placeholder="Senha"
                    placeholderTextColor="#000"
                    style={styles.inputEmailAndPassword}
                    underlineColorAndroid="transparent"
                    secureTextEntry={btnEyesPassword}
                />

                <TouchableOpacity 
                    style={styles.eyesPassword}
                    onPress={setSecureText}
                >
                    <Icon name={sourceBtnEyes} color="#222" size={30} />
                </TouchableOpacity>
            </View>

            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </View>

        <TouchableOpacity
           style={styles.btnLogIn}
        >
            <Text style={styles.textLogIn}>Entrar</Text>
          </TouchableOpacity>

        <View style={styles.boxButtons}>

          <Text style={styles.textHelp}>Não tem uma conta?</Text>

          <TouchableOpacity
            onPress={()=> navigation.navigate('Registration')}
          >
              <Text style={styles.textCreateAccount}>criar conta</Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    );
  }