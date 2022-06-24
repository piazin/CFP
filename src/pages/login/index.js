import React, {useState, useContext} from "react";
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    SafeAreaView,
    ActivityIndicator,
    TouchableNativeFeedback,
    Keyboard
} from "react-native";
import {AuthContext} from "../../contexts/auth";
import Icon from "react-native-vector-icons/Ionicons"
import {useNavigation} from "@react-navigation/native";
import styles from "./styles";
//imports//

export default function Login(){

    const navigation = useNavigation();

    const { signIn, loadingAuth, forgotPassword, errorLogin } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [err, setErr] = useState(0);

    function headleLogin(){
        if(email == '' || password == ''){
            alert('Preencha todos os campos');
            setErr(1);
            return;
        }
        signIn(email, password);
        setErr(0);
        Keyboard.dismiss();
    }

    function headlePassword(){
        if(email == ''){
            alert('Preencha o campo email');
            setErr(1);
            return;
        } 

        forgotPassword(email);
        setErr(0);
        Keyboard.dismiss();
    }

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
      <TouchableNativeFeedback
        onPress={()=> Keyboard.dismiss()}
      >
      <SafeAreaView style={styles.container}>
    
        <Text style={styles.textLogin}> Login </Text>

        <Text style={styles.subTextLogin}>acesse sua conta</Text>

        {
            errorLogin != '' ? (
                <View style={styles.error}>
                    <Text style={styles.textError}>{errorLogin}</Text>
                </View>
            ) : (
                <View style={{display: "none"}}>
                    
                </View>
            )
        }

        <View style={styles.boxInputs}>
            <TextInput
                onChangeText={(value)=> setEmail(value)}
                value={email}
                placeholder="Email"
                placeholderTextColor="#000"
                style={[styles.inputEmailAndPassword, {borderWidth: err}]}
                underlineColorAndroid="transparent"
                keyboardType="email-address"
                autoComplete="email"
            />
            
            <View>
                <TextInput
                    onChangeText={(value)=> setPassword(value)}
                    value={password}
                    placeholder="Senha"
                    placeholderTextColor="#000"
                    style={[styles.inputEmailAndPassword, {borderWidth: err}]}
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
            <TouchableOpacity
                onPress={headlePassword}
            >
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>
            
        </View>

        <TouchableOpacity
           style={styles.btnLogIn}
           onPress={headleLogin}
        >
           
            {
                loadingAuth ? (
                    <ActivityIndicator size={20} color="#fff"/>
                )
                :
                (
                    <Text style={styles.textLogIn}>Entrar</Text>
                )
            }
            
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
      </TouchableNativeFeedback>
    );
  }