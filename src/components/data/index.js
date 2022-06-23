import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import Icon from "react-native-vector-icons/Feather";

export default function HistoricoList({ data, deleteItem }) {
 return (
  <TouchableWithoutFeedback
    onLongPress={()=> deleteItem(data)}
  >
   <View style={styles.container}>

    <View style={styles.boxLeft}>
      <View style={styles.containerIcon}>
        <Icon
          name={data.type == "receita" ? "arrow-up" : "arrow-down"}
          
          color={data.type == "receita" ? "#009F40": "#922626"} size={20}/>
        <Text style={styles.textType}>{data.type == "receita" ? "receita" : "despesa"}</Text>
      </View>

      <Text style={styles.textTranactions}>R$: {data.value}</Text>
    </View>

    <View>
      <Text style={styles.textType}>{data.description}</Text>
      <Text style={styles.textTranactions}>{data.date}</Text>
    </View>
   </View>
  </TouchableWithoutFeedback>
  );
}