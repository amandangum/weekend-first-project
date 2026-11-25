import { View, Text, StyleSheet } from "react-native";


export default function StudentCard({name, age, level}){
    return(
        <View>
            <View style={styles.card}>
               <Text style={styles.name}>{name}</Text>
               <Text>{age}</Text>
               <Text>{level}</Text>
               </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        backgroundColor: "gray",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    name: {
        fontSize: 20,
        fontWeight: "bold"
    }
})