import {View, Text, Image, StyleSheet} from 'react-native'

export default function Card({image, name, price, available}){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={image} style={styles.image}/>
                <Text>Name: {name}</Text> 
                <Text>Price: {price}</Text>
                <Text>Available: {available ? "Yes" : "No"}</Text>
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
        width: "50%"
    },
    image: {
        width: 150,
        height: 100,
    },
})