import React, {useContext} from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import {AuthContext} from "../../contexts/auth";
import {useNavigation} from "@react-navigation/native";
import styles from "./style";

function Profile(){
    const Navigation = useNavigation();

    const {user, singOut} = useContext(AuthContext);


    return(
        <View style={styles.container}>

            <View style={styles.boxUser}>
                <Image
                    source={user.photoUrl == undefined ? {uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}:{uri: user.photoUrl}}
                    style={styles.userImg}
                />
                <Text style={styles.userName}>Olá, {user.name}</Text>
                <Text style={styles.textDescription}>Gerencie as informações da sua conta.</Text>
            </View>

            <View
                style={styles.boxOptions}
            >
                <TouchableOpacity
                    style={styles.options}
                    onPress={()=> Navigation.navigate('UpdateUser')}
                >
                    <Text style={styles.textOptions}>Atualizar Informações Pessoais</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.options}
                >
                    <Text style={styles.textOptions}>Em desenvolvimento</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.options}
                >
                    <Text style={styles.textOptions}>Em desenvolvimento</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity onPress={singOut}
                style={styles.btnSingOut}
            >
                <Text style={styles.textBtnSingOut}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Profile;