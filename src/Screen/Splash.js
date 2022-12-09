import React, { useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorageHelper from '../Common/AsyncStorage';

const Splash = (props) => {
    // useEffect(()=>{

    //   setTimeout(()=>{  
    //     AsyncStorageHelper.getData('Token')
    //     if(Response){
    //         props.navigation.navigate('HomeScreen')
    //     }else{
    //         props.navigation.navigate('SignUp')
    //     }
    //   },2000)
    // },)
        // setTimeout(()=>{
        //   props.navigation.navigate('SignUp')
        // })
    
    useEffect(() => {
        setTimeout(() => {
            props.navigation.replace('SignUp');
      }, 2000)  },);
    return (
    <View style={{ flex: 1,backgroundColor:'pink' }}>


    </View>

  );
}

export default Splash