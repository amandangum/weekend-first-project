import {View, Text, Image, StyleSheet} from 'react-native'

export default function Card({image, name, price, available}){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={image} style={styles.image}/>
                <Text style={styles.cardName}>Name: {name}</Text> 
                <Text style={styles.cardPrice}>Price: {price}</Text>
                <Text style={styles.cardAvailable}>Available: {available ? "Yes" : "No"}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
    },
    image: {
        width: 150,
        height: 100,
    },
    cardName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardPrice: {
        fontSize: 14,
        color: '#666',
    },
    cardAvailable: {
        fontSize: 14,
        color: '#666',
    }
})