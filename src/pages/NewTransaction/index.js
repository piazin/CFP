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
import AwesomeAlert from "react-native-awesome-alerts";
import {AuthContext} from "../../contexts/auth";

export default function New(){

    const navigation = useNavigation();
    
    const [valueBalance, setValueBalance] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState('receita');

    const {user: usuario} = useContext(AuthContext);

    const [showAlertHide, setShowAlertHide] = useState(false);
    const [showAlertSave, setShowAlertSave] = useState(false);

    function handleTransactions(){
        Keyboard.dismiss();
        if(isNaN(parseFloat(valueBalance)) || type == null || description == ""){
            setShowAlertHide(true);
            return;
        }

        setShowAlertSave(true);
    }

    async function saveTransactions(){
        let uid = usuario.uid;
        let key = await firebase.database().ref('history').child(uid).push().key;

        await firebase.database().ref('history').child(uid).child(key).set({
            type: type,
            value: parseFloat(valueBalance),
            description: description,
            date: format(new Date(), 'dd/MM/yyyy')
        })

        let user = firebase.database().ref('users').child(uid);
        await user.once('value').then((snapshot)=>{
            let saldo = parseFloat(snapshot.val().saldo);

            type === 'despesa' ? saldo -= parseFloat(valueBalance) : saldo += parseFloat(valueBalance);

            user.child('saldo').set(saldo);
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
                    placeholderTextColor="#000"
                />
                <View>
                    <Icon name="create-outline" size={30} color="#000" style={styles.iconDescription}/>
                    <TextInput
                        value={description}
                        onChangeText={(text)=> setDescription(text)}
                        style={[styles.inputValue, styles.inputDescription]}
                        placeholder="descrição"
                        placeholderTextColor="#000"
                        maxLength={20}
                    />

                </View>

                <Picker
                style={[styles.picker, {color: type == 'despesa' ? "#922626" : "#009F40"}]}
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

                <AwesomeAlert
                    show={showAlertSave}
                    showProgress={false}
                    title="Confirmar movimentação"
                    message={`${type} no valor de R$ ${valueBalance}`}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="Não, cancelar"
                    confirmText="Sim, salvar"
                    cancelButtonColor="#922626"
                    confirmButtonColor="#009F40"
                    onCancelPressed={() => {
                        setShowAlertSave(false);
                    }}
                    onConfirmPressed={() => {
                        saveTransactions();
                        setShowAlertSave(false);
                    }}
                />


                <AwesomeAlert
                    show={showAlertHide}
                    showProgress={false}
                    title="Atenção"
                    message="Preencha todos os campos"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    confirmText="Ok"
                    confirmButtonColor="#DD6B55"
                    onConfirmPressed={() => {
                        setShowAlertHide(false);
                    }}
                />


            </SafeAreaView>
        </View>
        </TouchableWithoutFeedback>
    );
}