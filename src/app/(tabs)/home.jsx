import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import StudentCard from "../../components/studentCard";

const home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Hi there👋</Text>
          <Text style={styles.headerText}>Welcome to our app</Text>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>View Products</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.productsSection}>
        <Text style={styles.headerText}>Featured Students</Text>

        <ScrollView>
          
          <StudentCard 
          name="Amanda"
          age={40}
          level="Level 3"
          />
          <StudentCard 
          name="Daniel"
          age={50}
          level="Level 400"
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
  },
  headerContent: {
    width: "100%",
    height: 180,
    backgroundColor: "lightblue",
    borderRadius: 15,
    padding: 10,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: "50%",
    alignItems: "center",
  },
  headerButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  productsSection: {
    padding: 10,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
