import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 6
    },
    header:{
        alignItems: "center",
        flexDirection: "row",
    },
    textHeader:{
        color: "#000",
        fontFamily: "Inter-SemiBold",
        fontSize: 16
    },
    containerInputs:{
        alignItems: "center",
        flex: 1,
        marginTop: 10
    },
    inputValue:{
        borderBottomColor: "#222",
        borderBottomWidth: 1,
        color: "#000",
        fontSize: 22,
        fontFamily: "Inter-SemiBold",
        height: 50,
        textAlign: "center",
        width: 200,
    },
    inputDescription:{
        fontSize: 16,
        marginTop: 25,
        width: 300,
    },
    iconDescription:{
        position: "absolute",
        left: 15,
        top: 25,
    },
    titleCategory:{
        color: "#222",
        fontFamily: "Inter-SemiBold",
        fontSize: 13, 
        marginTop: 20
    },
    picker:{
        backgroundColor: "#D9D9D9",
        borderBottomStartRadius: 10,
        color: "#000",
        marginTop: 10,
        width: 300
    },
    boxRadioButtons:{
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 10
    },
    btnSave:{
        alignItems: "center",
        backgroundColor: "#E8560C",
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 20,
        height: 52,
        width: 300
    },
    textBtnSave:{
        color: "#fff",
        fontFamily: "Inter-Bold",
        fontSize: 20,
        textTransform: "uppercase",
    },
    fontAll:{
        color: "#222",
        fontFamily: "Inter-Bold",
        marginRight: 10
    }
});

export default styles;