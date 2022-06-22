import React, {useContext, useState} from "react";
import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    Image,
    TouchableOpacity
} from "react-native";
import {useNavigation} from "@react-navigation/native"
import Icon from "react-native-vector-icons/Feather";
import styles from "./style";
import {AuthContext} from "../../contexts/auth";
import HistoricoList from "../../components/data";

function Home(){
 
    const navigation = useNavigation();
    
    const [historico, setHistorico] = useState([
        {key: '1', tipo: 'receita', valor: 1200},
        {key: '2', tipo: 'despesa', valor: 200},
        {key: '3', tipo: 'receita', valor: 40},
        {key: '4', tipo: 'receita', valor: 89.62},
        {key: '5', tipo: 'despesa', valor: 500},
        {key: '6', tipo: 'despesa', valor: 310},
    ]);

    const {user} = useContext(AuthContext);

    return(
        <SafeAreaView style={styles.container}>
            
            <View style={styles.containerInfoUser}>
                <Image
                    style={styles.imgUserProfile}
                    source={{uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}}
                />

                <Text style={styles.nameUser}>Olá, {user.name}</Text>
                <Text style={styles.balance}>R$: {user.saldo}</Text>

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
                data={historico}
                keyExtractor={ item => item.key}
                renderItem={ ({ item }) => ( <HistoricoList data={item}/> )}
            /> 


            

        </SafeAreaView>
    );
}

export default Home;