# Brandbook POC

### To run this project on your local computer:

To install and run this programme on your local computer, you will need Node.js, MySQL and npm on your computer, and Expo Go on your mobile.

1. Clone the repository to your local computer and navigate to the directory where you saved the repository.
2. Create a MySQL database, add a user with a password, and grant permissions to the user on that database.
3. In the `.env` file in the root of the project, save the above credentials to `DATABASE_NAME`, `DATABASE_USERNAME`, and `DATABASE_PASSWORD` variables, respectively.
4. Start a terminal window in your repository's directory. Type `npm install` and wait for the process to run. This will ensure that you have the right dependencies installed.
5. Type `npm run development` to start the server.
6. Type `cd client` to navigate to the client folder.
7. Once there, type `npm start` to start the client.
8. When that is done, type `w` to view the app in your browser.
9. To view the app on your iOS or Android device, you will need to install Expo Go on them. After that, you can scan the QR code in the terminal.

## Steps taken:

1. Create a MySQL database and user for the project.
2. Create a Strapi project and connect it to the SQL database and user.
3. Hide database login details and tokens in uncommitted .env file.
4. Start Git repository and commit initial project setup.
5. Create movies model on Strapi UI and grant all users access.
6. Install GraphQL plugin and test the endpoint with a GraphQL query and mutation.
7. Install Expo and use it to create a React Native project.
8. Create a form to add movies and test the form within the client using console.log.
9. Call the backend using a GraphQL query and test that a movie is being added to the database.
10. Add styling and test iOS and Android display.

### Sources consulted outside of those provided:

- https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b
- https://stepzen.com/docs/using-graphql/making-queries-with-fetch

### Given more time, I would:

- Deploy the app to learn that process too
- Include validation and error handling on the front end
- Add snapshot tests to the front end
- Make use of Apollo client to simplify queries
- Enable the user to view, edit and delete watched movies
