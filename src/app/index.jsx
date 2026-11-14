import { View,Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter()
  

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
          <Text style={styles.profileText}>EduConnect</Text>
         </View>

      <Text 
      style={styles.text} 
      >
       Welcome to my app
      </Text>
      <Text style={styles.subText}>Connect. Learn. Grow</Text>

      <TouchableOpacity style={styles.button} onPress={() => { router.push('/signup') }}>
      <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <Text style={styles.accountText}>Already have an account?  
        <TouchableOpacity onPress={() => { router.replace('/(tabs)/home')}}>
          <Text style={{color: "blue", textDecoration: "underline"}}>Login</Text>
        </TouchableOpacity> 
        </Text>

    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profile: {
      width: 150,
      height: 150,
      borderRadius: 80,
      backgroundColor: "blue",
      marginBottom: 15,
      justifyContent: "center",
      alignItems: "center"
    },
    profileText: {
      color: "#fff",
      fontSize: 24,
      fontWeight: 700
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subText: {
      marginBottom: 30,
      fontSize: 18
    },
    button: {
      padding: 18,
      backgroundColor: "blue",
      borderRadius: 15,
      width: 150
    },
    buttonText: {
      color: "#fff",
      textAlign: "center",
      fontSize: 15,
      fontWeight: "bold"
    },
    accountText: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: 500
    }
})
