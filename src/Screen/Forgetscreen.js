import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import ImagePath from '../Common/ImagePath';
import {Forget_password} from '../Reduxs/actions/ActionsApi'
// import { Validators } from '../Comman/Validators';
// import apiName from '../Comman/apiName';
// import CustomLoader from '../Comman/CustomLoader';


const Forgetscreen = (props) => {
    const [loader, setloader] = useState(false);
    const [email, setemail] = useState('Nouser123@yopmail.com')

//    const Forgotbtu=async()=>{
//        if(Validators.checkEmail('email',email)){
//            let ForgotData={
//             email:email
//            }
//            setloader(true)
//            const Response =await props.Forget_password(apiName.Forget_password,'POST',ForgotData)
//            console.log('Response',Response)
//            if(Response.data.status){
//             setloader(!loader)
//             props.navigation.navigate('OtpScreen',{value_item:Response.data.data,type:'Forgot'})   
//             }
//             else{
//             setloader(false)
//            }
//            setloader(false)

//        }

//    }


   
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginTop: 60 }}>
                <Image style={{ width: '100%', height: 100 }} source={ImagePath.hellofood} />
            </View>
        
            <View style={{ padding: 10 }}>
                <TextInput style={{ width: "100%", borderRadius: 10, backgroundColor: '#ebeae8', fontSize: 16, padding: 15, paddingLeft: 50, }}
                    placeholder='Enter your email address'
                    placeholderTextColor={'black'}
                    onChangeText={(text) => setemail(text)}
                    value={email}
                >

                </TextInput>
                <Image style={{ width: 25, height: 25, position: 'absolute', top: 26, left: 22, tintColor: 'black' }} source={ImagePath.email} />
            </View>
         

            {/* <TouchableOpacity style={{ width: "100%", padding: 10, marginTop: 20 }} onPress={() => Forgotbtu()} >
                <LinearGradient colors={['#a33363', '#cf7b21']} style={{ alignItems: 'center', padding: 10, borderRadius: 10 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: '700' }}>
                        Forgot Password
                    </Text>

                </LinearGradient>

            </TouchableOpacity>
          
            <CustomLoader loaderVisible={loader}/> */}

        </View>
    );
}

const mapStateToProps = (state) => ({
    data: state,
  });

 const mapDispatchToProps = {
    Forget_password,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Forgetscreen);