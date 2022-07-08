import React, {useContext, useState, useEffect} from "react";
import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView
} from "react-native";
import firebase from "../../services/firebaseConnection";
import {useNavigation} from "@react-navigation/native"
import Icon from "react-native-vector-icons/Feather";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./style";
import {AuthContext} from "../../contexts/auth";
import HistoricoList from "../../components/data";
import format from "date-fns/format";
import api from "../../services/api";


function Home(){
 
    const navigation = useNavigation();
    
    const [history, setHistory] = useState([]);
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState([]);

    const {user} = useContext(AuthContext);
    const uid = user && user.uid;

    const [dolar, setDolar] = useState(0);

    const [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        async function loadList(){
            
            await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
                setBalance(snapshot.val().saldo);
            });

            await firebase.database().ref('history')
            .child(uid)
            .orderByChild('date').equalTo(format(new Date, 'dd/MM/yyyy'))
            .limitToLast(20)
            .on('value', (snapshot)=>{
                
                setHistory([]);

                snapshot.forEach((item)=>{
                    let list = {
                        key: item.key,
                        description: item.val().description,
                        type: item.val().type,
                        value: item.val().value,
                        date: item.val().date,
                    }

                    setHistory(oldArray => [...oldArray, list].reverse());
        
                });

            });

        }

        function apiMoney(){
            api.get('USD-BRL').then((res)=>{
                let money = res.data.USDBRL.bid;
                setDolar(money);
            }).catch((err)=>{
                console.log(err);
            })
        }
    
        loadList();
        apiMoney();
    }, []);

    function handleDelete(data){
        
        Alert.alert(
            'Cuidado!',
            `Deseja excluir está ${data.type}, no valor de ${data.value}?`,
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Deletar",
                    onPress: ()=> handleDeleteOK(data)
                }
            ]
        );
    }

    async function handleDeleteOK(data){
        await firebase.database().ref('history')
        .child(uid).child(data.key).remove()
        .then( async ()=>{
            let balaceAtt = balance;
            data.type === 'despesa' ? balaceAtt += parseFloat(data.value) : balaceAtt -= parseFloat(data.value);

            await firebase.database().ref('users').child(uid)
            .child('saldo').set(balaceAtt);

        }).catch((err)=>{
            console.log(err);
        })
    }

    
    return(
        <SafeAreaView style={styles.container}>
            <View 
                style={styles.containerInfoUser}
            > 
                <View >
                    <Image
                        style={styles.imgUserProfile}
                        source={user.photoUrl == undefined ? {uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} : user.photoUrl}
                    />

                    <Text style={styles.nameUser}>Olá, {user.name}</Text>
                    <Text style={styles.balance}>R$: {balance}</Text>
                    <Text>{income}</Text>
                </View>

                <View style={styles.boxDolar}>
                    <Text style={styles.dolarValue}>1 dólar {<IconFontAwesome name="money" size={15} color="#222"/>}</Text>
                    <Text style={styles.dolarValue}>R$: {Number(dolar).toFixed(2)}</Text>
                </View>
            </View>

            <View style={{
                height: 1,
                backgroundColor: '#FF7A00',
                alignSelf: 'stretch',
                marginBottom: 10
            }} />


            <View style={styles.middleContainer}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop: 20}}
                >
                    <View style={styles.boxMiddleBtns}>
                        <TouchableOpacity
                            style={styles.middleBtn}
                        >
                            <IconMaterial name="bank-transfer" size={23} color="#b35404"/>
                        </TouchableOpacity>
                        <Text style={styles.textMiddleBtn}>Movimentações</Text>
                    </View>

                    <View style={styles.boxMiddleBtns}>
                        <TouchableOpacity
                            style={styles.middleBtn}
                            onPress={()=>{
                                navigation.navigate("Wallet");
                            }}
                        >
                            <IconMaterial name="wallet" size={20} color="#000"/>
                        </TouchableOpacity>
                        <Text style={styles.textMiddleBtn}>Carteira</Text>
                    </View>

                    <View style={styles.boxMiddleBtns}>
                        <TouchableOpacity
                            style={styles.middleBtn}
                            onPress={()=>navigation.navigate('New')}
                        >
                            <IconMaterial name="piggy-bank" size={20} color="#000"/>
                        </TouchableOpacity>
                        <Text style={styles.textMiddleBtn}>Adcionar</Text>
                    </View>


                    <View style={styles.boxMiddleBtns}>
                        <TouchableOpacity
                            style={styles.middleBtn}
                            onPress={()=> navigation.navigate('Profile')}
                        >
                            <IconMaterial name="account-cog" size={20} color="#000"/>
                        </TouchableOpacity>
                        <Text style={styles.textMiddleBtn}>Conta</Text>
                    </View>

                </ScrollView>
            </View>


            <View style={{
                height: 1,
                backgroundColor: '#FF7A00',
                alignSelf: 'stretch',
                marginBottom: 10
            }} />
            

            <TouchableOpacity 
                style={styles.btnNewTranactions}
                onPress={()=> navigation.navigate('New')}
            >
                <Icon name="plus" size={30} color="#000"/>
            </TouchableOpacity>

            <Text style={styles.textTransactions}>Ultimas movimentações</Text>
                
            {
                history.length <= 0  ? (
                    <View style={[styles.containerTransactions, styles.noTransactionsContainer]}>
                        <Text style={styles.textNoContainer}>{
                        `Você não tem movimentações,
                         recentes.`
                         }</Text>
                        <Image
                            source={require('../../images/home/Savings-bro.png')}
                            style={styles.imgNoTransactions}
                        />
                    </View>
                ) : (
                    <FlatList
                        style={styles.containerTransactions}
                        showsVerticalScrollIndicator={false}
                        data={history}
                        keyExtractor={ item => item.key}
                        renderItem={ ({ item }) => ( <HistoricoList data={item} deleteItem={handleDelete}/> )}
                    /> 
                )
            }
        </SafeAreaView>
    );
}

export default Home;