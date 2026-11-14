import { View, Text, StyleSheet, ScrollView} from 'react-native'
import Card from '../../components/card'

const home = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card 
        image={require("../../../assets/images/favicon.png")}
        name="Icon"
        price="$50"
        available={true}
        />
        <Card 
        image={require("../../../assets/images/icon.png")}
        name="Gown"
        price="$100"
        available={false}
        />
        <Card 
        image={require("../../../assets/images/android-icon-background.png")}
        name="Dress"
        price="$75"
        available={true}
        />

      </View>
    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})