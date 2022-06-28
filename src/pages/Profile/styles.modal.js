import {StyleSheet} from "react-native";

const stylesModal = StyleSheet.create({
    container:{
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    texts:{
        color: "#000",
        fontFamily: "Inter-Bold",
        fontSize: 16,
        marginVertical: 10
    },
    boxTexts:{
        alignItems: "center"
    },
    boxButtons:{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    btnActions:{
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#009F40",
        justifyContent: "center",
        marginHorizontal: 30,
        marginTop: 20,
        height: 50,
        width: 100,
    },
    btnDelete:{
        backgroundColor: "#922626"
    }
});

export default stylesModal;