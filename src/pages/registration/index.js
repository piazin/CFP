//imports//
import React, {useState, useContext} from "react";
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Image, 
    Linking,
    KeyboardAvoidingView
} from "react-native";
import {AuthContext} from "../../contexts/auth";
import Icon from "react-native-vector-icons/Ionicons"
import {useNavigation} from "@react-navigation/native";
import styles from "./styles";
//imports//

export default function Registration(){
    
    const navigation = useNavigation();

    const { signUp } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleRegister(){
        signUp(email, password, name);
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
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : ""}
        enabled
      >
        <TouchableOpacity
            onPress={()=> navigation.goBack()}
            style={styles.arrowPrev}
        >
            <Icon name="arrow-back" color="#000" size={40}/> 
        </TouchableOpacity>
        <Text style={styles.textLogin}> Criar sua conta </Text>

        <View style={styles.boxInputs}>
            <TextInput
                onChangeText={(value)=> setName(value)}
                value={name}
                placeholder="Nome"
                placeholderTextColor="#000"
                style={styles.inputNameAndEmail}
                underlineColorAndroid="transparent"
            />

            <TextInput
                onChangeText={(value)=> setEmail(value)}
                value={email}
                placeholder="Email"
                placeholderTextColor="#000"
                style={styles.inputNameAndEmail}
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
                    style={styles.inputPassword}
                    underlineColorAndroid="transparent"
                    secureTextEntry={btnEyesPassword}
                />

                <TouchableOpacity 
                    style={styles.eyesPassword}
                    onPress={setSecureText}
                >
                    <Icon name={sourceBtnEyes} color="#000" size={30}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.textTerms}>
                Ao se increver, você concorda com nossos {'\n'}
                <Text 
                onPress={()=> Linking.openURL('https://github.com/piazin')}
                style={{color: "blue"}}>Termos de Privacidade.</Text>
            </Text>
        </View>

        

        <View style={styles.boxButtons}>
            <TouchableOpacity
                style={styles.btnLogIn}
                onPress={handleRegister}
            >
                <Text style={styles.textLogIn}>Criar Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnloginGoogle}
            >

                <Image
                    source={require('../../images/register/google.png')}
                    style={styles.logoGoogle}
                />

                <Text style={styles.textLoginGoogle}>Continue with Google</Text>

            </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    );
}
