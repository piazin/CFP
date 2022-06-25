import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 10
    },
    btnSingOut:{
        alignItems: "center",
        backgroundColor: "#222",
        borderRadius: 10,
        elevation: 1,
        height: 30,
        justifyContent: "center",
        width: 100
    },
    textBtnSingOut:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
       
    }
});

export default styles;