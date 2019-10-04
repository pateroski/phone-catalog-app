# Phone Catalog App 📱

A small and simple Phone Catalog App.

![PhoneCatalogApp](https://media.giphy.com/media/cObKINKfVaNzZW3paK/source.gif)

## Main parts

The application is built with two principal artifacts:

### **Backend** 🐲

Simple REST API using [JSON Server](https://github.com/typicode/json-server) for mocking the phone catalog items.

### **Frontend** ⚛️

React application that shows the phones returned by the API. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To write the application, the following libraries have been used:

- [React](https://reactjs.org) for building the UI.
- [Redux](https://redux.js.org) for UI state management.
- [Axios](https://github.com/axios/axios) for API data consuming.

## How to run the application

### **Install all the dependencies**

We just need to run the following command under the project root directory:

`$ npm install`

### **Backend** 🐲

Next step is to run the JSON server for retrieve data from the UI. Fot that, just run the following command under the root directory:

`$ npm run mock`

Once is up & running, it will be listening under [http://localhost:4000](http://localhost:4000) for UI fetching data.

### **Frontend** ⚛️

Finally we just run the React app and see it working. For that, just run the
following command under the root directory:

`$ npm start`

Then, we will be listening under [http://localhost:3000](http://localhost:3000) for browser interaction.

## How to build the application

### `$ npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

_Made with_ ❤️ _for everyone who wants to Learn_ ⚛️.
