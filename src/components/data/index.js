import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import Icon from "react-native-vector-icons/Feather";

export default function HistoricoList({ data }) {
 return (
   <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon
          name={data.tipo == "receita" ? "arrow-up" : "arrow-down"}
          
          color={data.tipo == "receita" ? "#009F40": "#922626"} size={20}/>
        <Text style={styles.textType}>{data.tipo == "receita" ? "receita" : "despesa"}</Text>
      </View>

      <Text style={styles.textTranactions}>R$: {data.valor}</Text>
   </View>
  );
}