import React, {useContext} from "react";
import {View, Text, Button} from "react-native";
import {AuthContext} from "../../contexts/auth";

function Home(){

    const { singOut } = useContext(AuthContext);

    return(
        <View>
            <Text>Home</Text>
            <Button title="Sair" onPress={singOut}/>
        </View>
    );
}

export default Home;