import React, {useContext, useState} from "react";
import {View, Text, TouchableOpacity, Image, Modal} from "react-native";
import {AuthContext} from "../../contexts/auth";
import {useNavigation} from "@react-navigation/native";
import styles from "./style";
import stylesModal from "./styles.modal";

function Profile(){
    const Navigation = useNavigation();

    const {user, singOut, deleteAccount, setUser} = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);

    

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
                    onPress={()=> setModalVisible(true)}
                >
                    <Text style={styles.textOptions}>Deletar sua conta</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={()=>{
                    setModalVisible(false);
                }}
                
            >
                <View style={stylesModal.container}>
                    <View style={stylesModal.boxTexts}>
                        <Text style={[stylesModal.texts,{fontSize: 20}]}>Excluir conta</Text>
                        <Text style={stylesModal.texts}>Todos seus dados e movimentações serão excluidos, isso não pode ser revertido.</Text>
                        <Text style={stylesModal.texts}>Deseja continuar?</Text>
                    </View>
                    

                    <View style={stylesModal.boxButtons}>
                        <TouchableOpacity
                            style={stylesModal.btnActions}
                            onPress={()=> setModalVisible(!modalVisible)}
                        >
                            <Text style={[stylesModal.texts, {color:"#FFF"}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[stylesModal.btnActions, stylesModal.btnDelete]}
                        >
                            <Text style={[stylesModal.texts, {color:"#FFF"}]}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </Modal>
            
            <TouchableOpacity onPress={singOut}
                style={styles.btnSingOut}
            >
                <Text style={styles.textBtnSingOut}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Profile;