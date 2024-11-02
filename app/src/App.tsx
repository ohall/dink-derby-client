// App.js
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Derby from './screens/Derby';
import CreateDerby from './screens/CreateDerby';
import AddCatch from './screens/AddCatch';

const Stack = createStackNavigator();

const App = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Derby" component={Derby} />
    <Stack.Screen name="CreateDerby" component={CreateDerby} />
    <Stack.Screen name="AddCatch" component={AddCatch} />
  </Stack.Navigator>
);

export default App;