import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFFFFF",
        flex: 1,
        paddingHorizontal: 20,
        position: "relative"
    },
    containerInfoUser:{
        alignItems: "flex-start",
        backgroundColor: "#FFFFFF",
        flex: 1,
        justifyContent: "center",
    },
    imgUserProfile:{
        borderRadius: 50,
        marginBottom: 11,
        height: 59,
        width: 59
    },
    balance:{
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
        paddingBottom: 5
    },
    nameUser:{
        color: "#000",
        fontSize: 20,
        fontFamily: "Inter-Regular",
        fontWeight: "bold",
        paddingBottom: 15
    },
    textBalance:{
        color: "#fff",
        fontSize: 16,
        fontFamily: "Inter-Regular",
    },
    textTransactions:{
        color: "#FF7A00", 
        fontFamily: "Inter-Regular",
        fontSize: 20, 
        fontWeight: "bold", 
        marginLeft: 10,
        marginBottom: 10
    },
    containerTransactions:{
        backgroundColor: "#454545",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 200
    },
    btnNewTranactions:{
        alignItems: "center",
        backgroundColor: "#FF7A00",
        borderRadius: 50,
        bottom: 28,
        elevation: 5,
        position: "absolute",
        justifyContent: "center",
        height: 55,
        right: 10,
        shadowColor:  'rgba(0, 0, 0)',
        shadowOffset: {width: -4, height: 7},
        shadowOpacity: 1,
        width: 55,
        zIndex: 10
    }
});

export default styles;