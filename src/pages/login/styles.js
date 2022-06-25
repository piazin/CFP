import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "center",
        position: "relative"
    },
    arrowPrev:{
        left: 15,
        position: "absolute",  
        top: 15, 
    },
    textLogin:{
        color: "#000",
        fontSize: 35,
        fontFamily: "Inter-Bold",
        marginTop: 20
    },
    subTextLogin:{
        color: "#000",
        fontFamily: "Inter-Regular",
        fontSize: 15,
        marginTop: 15
    },
    boxInputs:{
        padding: 5,
        marginTop: 25
    },
    inputEmailAndPassword:{
        backgroundColor: "#D7D7D7",  
        borderRadius: 40,
        borderColor: "#922626",
        color: "#000",
        elevation: 1,
        fontFamily: "Inter-Regular",
        fontSize: 15,
        marginTop: 44,
        height: 52,
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 2,
        shadowRadius: 3,
        width: 345
    },
    eyesPassword:{
        position: "absolute",
        right: 25,
        bottom: 10
    },
    forgotPassword:{
        alignSelf: "flex-end",
        color: "#000",
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
        paddingTop: 14,
        marginRight: 5
    },
    boxButtons:{
        flexDirection: "row",
        marginTop: 35,
        marginBottom: 80
    },
    btnLogIn:{
        alignItems: "center",
        backgroundColor: "#FF7A00",
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 65,
        height: 52,
        width: 345,
    },
    textLogIn:{
        color: "#fff",
        fontSize: 22,
        fontFamily: "Inter-Bold",
        textTransform: "uppercase"
    },
    textHelp:{
        color: "#000",
        fontFamily: "Inter-SemiBold",
        fontSize: 14,
        marginRight: 25
    },
    textCreateAccount:{
        color: "#1629DA",
        fontFamily: "Inter-Bold",
        fontSize: 15,
        marginLeft: 25
    },
    textError:{
        color: "#922626",
        fontSize: 18,
        top: 50
    }
});

export default styles;