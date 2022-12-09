
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImagePath from '../../Common/ImagePath';
import HomeScreen from '../HomeScreen';




const RenderTabIcon = (props) => {
  const { Tabactive, TabUnActive, isfocused, title } = props
  return (
      <View>
          <Image source={isfocused ? Tabactive : TabUnActive}  style={{ width: 30, height: 30,marginTop:20,}} />
          <Text>{title}</Text>
      </View>
  );
}


const HomeScreenStack = createNativeStackNavigator();
function HomeScreenTab() {
  return (
    <HomeScreenStack.Navigator >
      <HomeScreenStack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
    </HomeScreenStack.Navigator>
  );
}


// const NearByScreenStack = createNativeStackNavigator();
// function NearByScreenTab() {
//   return (
//     <NearByScreenStack.Navigator>
//       <NearByScreenStack.Screen name="NearByScreen" component={NearByScreen} options={{headerShown: false}} />
//     </NearByScreenStack.Navigator>
//   );
// }


// const CartScreenStack = createNativeStackNavigator();
// function CartScreenTab() {
//   return (
//     < CartScreenStack.Navigator>
//       < CartScreenStack.Screen name=" CartScreen" component={ CartScreen} options={{headerShown: false}} />
//     </ CartScreenStack.Navigator>
//   );
// }

// const AccountStack = createNativeStackNavigator();
// function AccountTab() {
//   return (
//     < AccountStack.Navigator>
//       < AccountStack.Screen name=" Account" component={ Account} options={{headerShown: false}} />
//     </ AccountStack.Navigator>
//   );
// }


const Tab = createBottomTabNavigator();

function  BottomTab() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle: { height: 65,width:'100%'},
    }}
    >
  <Tab.Screen name="HomeScreen"component={HomeScreenTab} 
        options={{headerShown: false,
        tabBarLabel:'',
        tabBarIcon: ({focused,size }) => {
          return( 
            <View>
            <Image source={ImagePath.homeIcon} style={{width:25,height:25,marginTop:10}} resizeMode="contain" />
            <Text style={{fontSize:16,right:8,marginVertical:2}}>Home</Text>
          </View>
            // <RenderTabIcon 
            // Tabactive={ImagePath.homeIcon}
            // // TabUnActive={ImagePath.telephoneicons}
            // // title="Siginup"
            // // isfocused={focused}
            // />  
          )
          },
      }}
     />


      {/* <Tab.Screen name="NearByScreen"component={NearByScreenTab} 
      options={{
        tabBarLabel: '',
          tabBarIcon: ({ focused, size }) => {
          return(
            <View>
              <Image source={ImagePath.send} style={{width:25,height:25,marginTop:10}} resizeMode="contain" />
              <Text style={{fontSize:16,right:8,marginVertical:2}}>Nearby</Text>
            </View>
            // <RenderTabIcon 
            // Tabactive={ImagePath.send}
            // // TabUnActive={ImagePath.bellIcon}
            // title="Register"
            // // isfocused={focused}
            // />  
          )
        }, 
      }}/>*/}
 

{/* <Tab.Screen name="CartScreen"component={CartScreenTab} 
      options={{
        tabBarLabel: '',
          tabBarIcon: ({ focused, size }) =>  {
          return(
            <View style={{alignItems:'center'}}>
             <Image style={{width:25,height:25,marginTop:10}} resizeMode="contain" source={ImagePath.cart}/> 
             <Text style={{fontSize:16,marginVertical:2}}>Cart</Text> 
              </View>

            // <RenderTabIcon
            // Tabactive={ImagePath.cart}
            // <View style={{alignItems:'center'}}>
            //  <Image style={{width:30,height:30,}} source={ImagePath.cart}/> 
            //  <Text style={{fontSize:14,color:'red'}}>Notification</Text> 
            //  </View>
             ///>
          )
        },
              
      }}/>  */}
      
      
      {/* <Tab.Screen name="Account" 
      component={AccountTab} 
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ focused, size }) =>  {
          return(

            <View style={{alignItems:'center'}}>
             <Image style={{width:25,height:25,marginTop:10}} source={ImagePath.profile} resizeMode="contain"/> 
              <Text style={{fontSize:16,marginVertical:2}}>Account</Text>
             </View>

            // <RenderTabIcon
            // Tabactive={ImagePath.profile}
            // // <View style={{alignItems:'center'}}>
            // // <Image style={{width:30,height:30,}} source={ImagePath.Account}/> 
            // //  <Text style={{fontSize:14,color:'red'}}>Massge</Text>
            // //  </View>
            // />
          )
        },

      }}/>  */}
     
    </Tab.Navigator>
  );
}
export default BottomTab;
// source={focused? Images.bell_Select:Images.bell}/> 