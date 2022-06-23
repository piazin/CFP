import React, {useContext} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {AuthContext} from "../../contexts/auth";

function Profile(){

    const {user, singOut} = useContext(AuthContext);

    return(
        <View>
            <Text style={{fontSize: 20}}>{user.name}</Text>
            <TouchableOpacity onPress={singOut}>
                <Text style={{fontSize: 20}}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Profile;