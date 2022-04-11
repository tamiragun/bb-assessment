import React from "react";
import { SafeAreaView, Button, StyleSheet, TextInput } from "react-native";

const Form = () => {
  const [movie, setMovie] = React.useState("");

  // Handler for when the submit button is clicked. It calls the server and adds the movie
  const submitForm = () => {
    // Ensure the text field isn't empty
    if (movie) {
      console.log("Simple Button pressed");
    }
  };

  return (
    <SafeAreaView>
      <TextInput style={styles.input} onChangeText={setMovie} value={movie} />
      <Button title="Add movie" onPress={submitForm}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Form;
