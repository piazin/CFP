import React, {useContext} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {AuthContext} from "../../contexts/auth";

function Profile(){

    const {user, singOut} = useContext(AuthContext);

    return(
        <View>
            <Text>{user.name}</Text>
            <TouchableOpacity onPress={singOut}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Profile;