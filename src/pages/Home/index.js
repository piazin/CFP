import React, {useContext, useState, useEffect} from "react";
import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Alert
} from "react-native";
import firebase from "../../services/firebaseConnection";
import {useNavigation} from "@react-navigation/native"
import Icon from "react-native-vector-icons/Feather";
import styles from "./style";
import {AuthContext} from "../../contexts/auth";
import HistoricoList from "../../components/data";
import {format}  from "date-fns";

function Home(){
 
    const navigation = useNavigation();
    
    const [history, setHistory] = useState([]);
    const [balance, setBalance] = useState(0);

    const {user} = useContext(AuthContext);
    const uid = user && user.uid;

    useEffect(()=>{
        async function loadList(){
            await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
                setBalance(snapshot.val().saldo);
            });


            await firebase.database().ref('history')
            .child(uid)
            .orderByChild('date').equalTo(format(new Date(), 'dd/MM/yy'))
            .limitToLast(10)
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

                    setHistory(oldArray => [...oldArray, list].reverse())
                });

            });
        }

        

        loadList();
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
            
            <View style={styles.containerInfoUser}>
                <Image
                    style={styles.imgUserProfile}
                    source={{uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}}
                />

                <Text style={styles.nameUser}>Olá, {user.name}</Text>
                <Text style={styles.balance}>R$: {balance}</Text>

                <View style={{
                    height: 1,
                    backgroundColor: '#000',
                    alignSelf: 'stretch'
                }} />
            </View>

            <TouchableOpacity 
                style={styles.btnNewTranactions}
                onPress={()=> navigation.navigate('NewTransactions')}
            >
                <Icon name="plus" size={30} color="#000"/>
            </TouchableOpacity>

            <Text style={styles.textTransactions}>Ultimas movimentações</Text>

            <FlatList
                style={styles.containerTransactions}
                showsVerticalScrollIndicator={false}
                data={history}
                keyExtractor={ item => item.key}
                renderItem={ ({ item }) => ( <HistoricoList data={item} deleteItem={handleDelete}/> )}
            /> 


            

        </SafeAreaView>
    );
}

export default Home;