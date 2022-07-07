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
        alignItems: "flex-end",
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
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
    },
    nameUser:{
        color: "#000",
        fontSize: 20,
        fontFamily: "Inter-Regular",
        fontWeight: "bold",
        paddingBottom: 5
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
        backgroundColor: "#F2F2F2",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        position: "relative",
        height: 200
    },
    noTransactionsContainer: {
        alignItems: 'center',
        height: 390,
        justifyContent: "center"
    },
    imgNoTransactions:{
        width: 200,
        height: 200,
    },
    textNoContainer:{
        color: "#222",
        fontFamily: "Inter-SemiBold",
        fontSize: 16,
        paddingBottom: 20
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
    }, 
    boxDolar:{
        alignItems: "center",
        marginBottom: 20,
    },
    dolarValue: {
        color: "#222",
        fontFamily: "Inter-SemiBold",
        fontSize: 15,
    }
});

export default styles;