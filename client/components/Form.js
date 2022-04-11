import React from "react";
import { SafeAreaView, Button, StyleSheet, TextInput } from "react-native";

const Form = () => {
  const [movie, setMovie] = React.useState("");
  const url = "http://localhost:1337/graphql";

  // Handler for when form is submitted: supplied movie gets added to the database
  const onSubmit = async () => {
    // Ensure the input field is not blank
    if (movie) {
      // Call the server and pass it a GraphQL mutation
      let response = await fetch(url, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          query: `mutation CreateMovie($movieTitle: String!) {          
            createMovie(data: { Title: $movieTitle } ) {
                data {
                  id
                  attributes {
                    Title
                  }
                }
              }
            }`,
          variables: {
            movieTitle: movie,
          },
        }),
      });
    }
    // Reset the input field to empty so a new one can be entered
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
