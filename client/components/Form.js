import React from "react";
import { SafeAreaView, Button, StyleSheet, TextInput } from "react-native";

const Form = () => {
  const [movie, setMovie] = React.useState("");

  const onSubmit = () => {
    if (movie) {
      console.log(movie);
    }
    setMovie("");
  };

  return (
    <SafeAreaView>
      <TextInput style={styles.input} onChangeText={setMovie} value={movie} />
      <Button title="Add movie" onPress={onSubmit}></Button>
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
