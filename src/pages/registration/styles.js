import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      backgroundColor: "#fff",
      justifyContent: "center",
    },
    arrowPrev:{
      left: 15,
      position: "absolute", 
      top: 15, 
    },
    textLogin:{
      color: "#000",
      fontSize: 35,
      fontFamily: "Inter-Bold",
      marginBottom: 20,
      marginTop: 90
    },
    boxInputs:{
      padding: 1,
      marginTop: 10
    },
    inputNameAndEmail:{
      backgroundColor: "#D7D7D7",  
      borderRadius: 40,
      color: "#000",
      fontFamily: "Inter-Regular",
      fontSize: 15,
      marginBottom: 12,
      height: 52,
      textAlign: "center",
      width: 345
    },
    inputPassword:{
      backgroundColor: "#D7D7D7",  
      borderRadius: 40,
      color: "#000",
      fontFamily: "Inter-Regular",
      fontSize: 15,
      marginTop: 14,
      height: 52,
      textAlign: "center",
      width: 345
    },
    eyesPassword:{
      position: "absolute",
      right: 25,
      bottom: 10
    },
    textTerms:{
      alignSelf: "center",
      color: "#000",
      fontFamily: "Inter-SemiBold",
      fontSize: 14,
      paddingTop: 14,
      marginRight: 5,
    },
    boxButtons:{
      alignItems: "center",
      marginBottom: 80
    },
    btnLogIn:{
      alignItems: "center",
      backgroundColor: "#FF7A00",
      borderRadius: 10,
      elevation: 1,
      justifyContent: "center",
      marginTop: 45,
      height: 52,
      width: 345,
    },
    textLogIn:{
      color: "#fff",
      fontSize: 22,
      fontFamily: "Inter-Bold",
      textTransform: "uppercase"
    },
    btnloginGoogle:{
      alignItems: "center",
      backgroundColor: "#EEEEEE",
      borderRadius: 10,
      elevation: 1,
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 15,
      shadowColor: "#000",
      shadowOffset: {width: 2, height: 4},
      shadowOpacity: 2,
      shadowRadius: 3,
      height: 52,
      width: 218,
    },
    textLoginGoogle:{
      color: "#000",
      fontSize: 15,
      fontFamily: "Inter-Bold",
      lineHeight: 18
    },
    logoGoogle:{
        marginRight: 6,
        height: 34,
        width: 34
    },
    textCreateAccount:{
      color: "#1629DA",
      fontFamily: "Inter-Bold",
      fontSize: 15,
      marginLeft: 25
    }
});

export default styles;