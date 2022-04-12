import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Form from "./components/Form.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/movie-icon.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.header}>My movies</Text>
      <Text>Add a movie you have watched:</Text>
      <StatusBar style="auto" />
      <Form></Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 80,
  },
  image: {
    width: 60,
    height: 60,
    padding: 10,
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 60,
  },
});
