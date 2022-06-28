import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
    },
    arrowBack:{
        position: "absolute",
        left: 15,
        top: 10
    },  
    textTitle:{
        color: "#000",
        fontFamily: "Inter-SemiBold",
        fontSize: 20,
        marginVertical: 15
    },
    textLabel:{
        color: "#000",
        fontFamily: "Inter-SemiBold",
        fontSize: 16,
        paddingTop: 25
    },
    boxInputs:{
        backgroundColor: "#FFF",
        flex: 1

    },
    inputs:{
        borderBottomColor: "#FF7A00",
        borderBottomWidth: 1,
        color:"#000",
        width: 320
    },
    btnDefault:{
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#FF7A00",
        justifyContent: "center",
        marginTop: 15,
        height: 40,
        width: 80,
    },
    textBtn:{
        color: "#fff",
        fontFamily: "Inter-Bold",
        fontSize: 16,
    },
    textHelp:{
        color: "#000",
        fontFamily: "Inter-Regular",
        paddingVertical: 10
    },
    boxOthers:{
        alignItems: "center",
        flex: 1,
        marginVertical: 20
    },
    btnSendPassword:{
        width: 100
    }
    
});

export default styles;