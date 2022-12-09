import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screen/Splash';
import SignUp from '../Screen/SignUp';
import OtpScreen from '../Screen/OtpScreen';
import LoginScreen from '../Screen/LoginScreen';
import HomeScreen from '../Screen/HomeScreen';
import Forgetscreen from '../Screen/Forgetscreen';
import BottomTab from '../Screen/BottomTab/BottomTab';
import CartScreen from '../Screen/CartScreen';
import YourFoodCart from '../Screen/YourFoodCart';
// import NearByScreen from '../Screen/BottomTab/NearByScreen';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='YourFoodCart'>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} options={{headerShown:false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
        {/* <Stack.Screen name="SignUp1" component={SignUp1} options={{headerShown:false}} /> */}
        <Stack.Screen name="Forgetscreen" component={Forgetscreen} options={{headerShown:false}} />
        <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}} />
        {/* <Stack.Screen name="CartScreen" component={NearByScreen} options={{headerShown:false}} /> */}
         <Stack.Screen name="CartScreen" component={CartScreen} options={{headerShown:false}} /> 
         <Stack.Screen name="YourFoodCart" component={YourFoodCart} options={{headerShown:false}} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;