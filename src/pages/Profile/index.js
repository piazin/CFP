import React, {useContext} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {AuthContext} from "../../contexts/auth";
import styles from "./style";

function Profile(){

    const {user, singOut} = useContext(AuthContext);


    return(
        <View style={styles.container}>
            <Text style={styles.userName}>{user.name}</Text>
            <TouchableOpacity onPress={singOut}
                style={styles.btnSingOut}
            >
                <Text style={styles.textBtnSingOut}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Profile;