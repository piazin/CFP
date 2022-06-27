import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        flexDirection: "row",
        padding: 10,
        position: "relative",
        margin: 10,
    },
    containerIcon:{
        flexDirection: "row",
    },
    textTranactions:{
        color: "#000",
        fontSize: 20,
        fontWeight: "bold"
    },
    textDate:{
        fontSize: 18
    },
    textType:{
        color: "#000"
    },
    boxLeft:{
        paddingRight: 100,
    }
});

export default styles;