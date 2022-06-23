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
        fontSize: 18,
        fontWeight: "800"
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
        height: 50,
        textAlign: "center",
        width: 200,
    },
    inputDescription:{
        fontSize: 16,
        marginTop: 25,
        width: 300,
    },
    picker:{
        borderBottomStartRadius: 10,
        color: "#fff",
        marginTop: 20,
        width: 300
    },
    btnSave:{
        alignItems: "center",
        backgroundColor: "#009F40",
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 20,
        height: 52,
        width: 300
    },
    textBtnSave:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
    }
});

export default styles;