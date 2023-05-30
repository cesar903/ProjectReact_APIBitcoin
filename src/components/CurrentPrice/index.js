import React from "react";
import { View, Text } from "react-native";
import styles from "./style"

export default function CurrentPrice(){
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ 4.03</Text>
            <Text style={styles.textPrice}>Ultima Cotação</Text>
        </View>
    )
}