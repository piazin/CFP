import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        //padding: 10
        paddingBottom: 10
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
       
    },
    boxUser:{
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        justifyContent: "center",
        padding: 10,
        width: "100%"
    },
    userImg:{
        borderRadius: 50,
        borderColor: "#FF7A00",
        borderWidth: 2,
        marginBottom: 15,
        height: 100,
        width: 100,
    },
    userName: {
        color: "#000",
        fontSize: 20,
        fontFamily: "Inter-Bold",
    },
    textDescription:{
        color: "#000",
        fontFamily: "Inter-SemiBold",
        fontSize: 14
    },
    boxOptions:{
        alignSelf: "flex-start",
        backgroundColor: "#FFF",
        padding: 10,
        height: 300,
        width: "100%"
    },
    options: {
        borderColor: "#FF7A00",
        borderBottomWidth: 2,
        justifyContent: "center",
        padding: 10,
        marginTop: 20,
        height: 50,
        width: "90%"
    },
    textOptions:{
        color: "#000",
        fontFamily: "Inter-SemiBold",
        fontSize: 16
    }
});

export default styles;