import React, {useState, useContext} from "react";
import {
View,
Text,
SafeAreaView,
TouchableOpacity,
TextInput,
TouchableWithoutFeedback,
Keyboard,
} from "react-native";
import firebase from "../../services/firebaseConnection";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native"
import Icon from "react-native-vector-icons/Ionicons";
import {Picker} from "@react-native-picker/picker";
import {format, getMonth} from "date-fns";
import AwesomeAlert from "react-native-awesome-alerts";
import {AuthContext} from "../../contexts/auth";
import {RadioButton} from "react-native-paper";

export default function New(){

    const navigation = useNavigation();
    
    const [valueBalance, setValueBalance] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState('receita');
    const [checked, setChecked] = useState('receita');

    const {user: usuario} = useContext(AuthContext);

    const [showAlertHide, setShowAlertHide] = useState(false);
    const [showAlertSave, setShowAlertSave] = useState(false);


    function handleTransactions(){
        Keyboard.dismiss();
        if(isNaN(parseFloat(valueBalance)) || checked == null || description == ""){
            setShowAlertHide(true);
            return;
        }

        setShowAlertSave(true);
    }

    async function saveTransactions(){
        let uid = usuario.uid;
        let key = await firebase.database().ref('history').child(uid).push().key;

        await firebase.database().ref('history').child(uid).child(key).set({
            type: checked,
            category: category,
            value: parseFloat(valueBalance),
            description: description,
            date: format(new Date(), 'dd/MM/yyyy'),
            month: getMonth(new Date())
        })

        let user = firebase.database().ref('users').child(uid);
        await user.once('value').then((snapshot)=>{
            let saldo = parseFloat(snapshot.val().saldo);

            checked === 'despesa' ? saldo -= parseFloat(valueBalance) : saldo += parseFloat(valueBalance);

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
                    <Icon name="arrow-back" color="#000" size={35}/>
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

                <Text style={styles.titleCategory}>Selecione uma categoria</Text>
                {
                    checked === 'receita' ? (
                        <Picker
                        style={styles.picker}
                        selectedValue={category}
                        onValueChange={(itemValue, itemIndex) =>
                            setCategory(itemValue)
                        }>
                            <Picker.Item label="Salário" value="salario" />
                            <Picker.Item label="Outros" value="outros" />
                        </Picker>
                    ) : (
                        <Picker
                        style={styles.picker}
                        selectedValue={category}
                        onValueChange={(itemValue, itemIndex) =>
                            setCategory(itemValue)
                        }>
                            <Picker.Item label="Viagem" value="viagem" />
                            <Picker.Item label="Faculdade" value="faculdade" />
                            <Picker.Item label="Carro" value="carro" />
                            <Picker.Item label="Comida e Bebida" value="comida" />
                            <Picker.Item label="Cartão" value="cartao" />
                            <Picker.Item label="Lazer" value="lazer" />
                            <Picker.Item label="Outros" value="outros" />
                        </Picker>
                    )
                }
                
                <View style={styles.boxRadioButtons}>
                    <RadioButton
                        value="receita"
                        status={checked === "receita" ? 'checked' : 'unchecked'}
                        onPress={()=>{
                            setChecked('receita');
                        }}
                        color="#009F40"
                    />

                    <Text style={styles.fontAll}>Receita</Text>

                    <RadioButton
                        value="despesa"
                        status={checked === "despesa" ? 'checked' : 'unchecked'}
                        onPress={()=>{
                            setChecked('despesa');
                        }}
                        color="#922626"
                    />

                    <Text style={styles.fontAll}>Despesa</Text>
                </View>
                

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
                    message={`${checked} no valor de R$ ${valueBalance}`}
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