import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';

const Stack = createStackNavigator();

function SplashScreen({ navigation }) {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Login');
      }, 2000); // 2 segundos
    }, [navigation]);

    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/logotipo_econecta_341x98.png')}
          style={styles.image}
          />
        <StatusBar style="auto" />
      </View>
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#364b56',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 280,
    height: 70,
  },
});
