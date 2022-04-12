import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Form from "./components/Form.js";

export default function App() {
  return (
    <View style={styles.container}>
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
    justifyContent: "center",
  },
});
