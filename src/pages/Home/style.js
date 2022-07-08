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
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingHorizontal: 10,
        height: 150,
        marginBottom: 10
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
        flex: 3,
        position: "relative",

    },
    noTransactionsContainer: {
        alignItems: 'center',
        flex: 3,
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
        alignSelf: "flex-end",
        alignItems: "center",
        marginBottom: 20,
    },
    dolarValue: {
        color: "#222",
        fontFamily: "Inter-SemiBold",
        fontSize: 12,
    },
    middleContainer:{
        alignItems: "center",
        justifyContent: "center",
        height: 120
    },
    boxMiddleBtns:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        height: 70,
        width: 110
    },
    middleBtn:{
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        borderRadius: 50,
        justifyContent: "center",
        height: 50,
        width: 50
    },
    textMiddleBtn:{
        color: "#222",
        fontFamily: "Inter-SemiBold",
        fontSize: 12,
        textAlign: "center"
    }
});

export default styles;