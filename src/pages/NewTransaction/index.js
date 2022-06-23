import React, {useState, useContext} from "react";
import {
View,
Text,
SafeAreaView,
TouchableOpacity,
TextInput,
TouchableWithoutFeedback,
Keyboard,
Alert
} from "react-native";
import firebase from "../../services/firebaseConnection";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native"
import Icon from "react-native-vector-icons/Ionicons";
import {Picker} from "@react-native-picker/picker";
import {format} from "date-fns";
import {AuthContext} from "../../contexts/auth";

export default function New(){

    const navigation = useNavigation();
    
    const [valueBalance, setValueBalance] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState('receita');

    const {user: usuario} = useContext(AuthContext);

    function handleTransactions(){
        Keyboard.dismiss();
        if(isNaN(parseFloat(valueBalance)) || type == null || description == ""){
            alert('Preencha todos os campos');
            return;
        }

        Alert.alert(
            'Deseja confirmar?',
            `
                tipo: ${type}
                valor: ${valueBalance} 
                descrição: ${description}
            `,
            [
                {
                    text: "Cancelar",
                    style: 'cancel'
                },
                {
                    text: "Confirmar",
                    onPress: ()=> saveTransactions()
                }
            ]
        )
    }

    async function saveTransactions(){
        let uid = usuario.uid;
        let key = await firebase.database().ref('history').child(uid).push().key;

        await firebase.database().ref('history').child(uid).child(key).set({
            type: type,
            value: parseFloat(valueBalance),
            description: description,
            date: format(new Date(), 'dd/MM/yy')
        })

        let user = firebase.database().ref('users').child(uid);
        await user.once('value').then((snapshot)=>{
            let saldo = parseFloat(snapshot.val().saldo);

            type === 'despesa' ? saldo -= parseFloat(valueBalance) : saldo += parseFloat(valueBalance);

            user.child('saldo').set(saldo);

            console.log(saldo);
        });

        Keyboard.dismiss();
        setValueBalance("");
        setDescription("");
        navigation.navigate('Home');
    }

    return(
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={()=> navigation.goBack()}
                >
                    <Icon name="arrow-back-circle" color="#000" size={35}/>
                </TouchableOpacity>
                <Text style={styles.textHeader}>Nova Trasação</Text>
            </View>

            <SafeAreaView
                style={styles.containerInputs}
            >
                <TextInput
                    value={valueBalance}
                    onChangeText={(text)=> setValueBalance(text)}
                    style={styles.inputValue}
                    placeholder="R$: 0,00"
                    keyboardType="numeric"
                    returnKeyType="next"
                    onSubmitEditing={()=> Keyboard.dismiss()}
                />

                <TextInput
                    value={description}
                    onChangeText={(text)=> setDescription(text)}
                    style={[styles.inputValue, styles.inputDescription]}
                    placeholder="descrição"
                />

                <Picker
                style={{width: 300}}
                selectedValue={type}
                onValueChange={(itemValue, itemIndex) =>
                    setType(itemValue)
                }>
                    <Picker.Item label="Receita" value="receita" />
                    <Picker.Item label="Despesa" value="despesa" />
                </Picker>

                <TouchableOpacity
                    style={styles.btnSave}
                    onPress={handleTransactions}
                >
                    <Text style={styles.textBtnSave}>Salvar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
        </TouchableWithoutFeedback>
    );
}