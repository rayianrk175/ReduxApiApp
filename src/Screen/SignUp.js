import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import apiName from '../Common/ApiName';
import { ActionsSigin } from '../Reduxs/actions/ActionsApi'


const SignUp = (props) => {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [password, setpassword] = useState("");


    useEffect(() => {
        
    })
 
    const signUpApi = async () => {
        let body = {
            email: email,
            mobile: mobile,
            username:username ,
            password: password,
            device_token: '12345678',
            device_id: '12345678',
        }
        let Response = await props.ActionsSigin(apiName.siginup, 'POST', body)
        console.log('====>',Response)
        
        if(Response.data.status){
              props.navigation.navigate('OtpScreen',{item_data:Response.data.data,})
        }else{
            
        }
        // if (Response.data.status == true) {
        //     props.navigation.navigate('Splash', { value_item: Response.data.data })
        // // {value_item:Response.data.data}
        // }
        // else {
        // }

    }


    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View>
                {/* <Image style={{ alignSelf: 'center', height: 90, width: 250, resizeMode: 'contain' }} source={require('../asstes/Image/logo.png')} /> */}
                <Text style={{ fontSize: 43, marginBottom: 60, color: 'black', fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}>Welcome Back</Text>
                <View style={{ alignItems: 'center', marginTop: 18 }}>
                    <TextInput
                        style={{ color:'grey',backgroundColor: 'white', elevation: 10, width: '100%', borderRadius: 30, paddingVertical: 12, fontSize: 20, paddingHorizontal: 20 }}
                        placeholder='username'
                        placeholderTextColor={'grey'}
                        onChangeText={(text) => { setusername(text) }}
                        value={username}
                    />
                </View>

                <View style={{ alignItems: 'center', marginTop: 18 }}>
                    <TextInput
                        style={{ color:'grey',backgroundColor: 'white', elevation: 10, width: '100%', borderRadius: 30, paddingVertical: 12, fontSize: 20, paddingHorizontal: 20 }}
                        placeholder='email'
                        placeholderTextColor={'grey'}
                        onChangeText={(text) => { setemail(text) }}
                        value={email}
                    />      
                </View>

                <View style={{ alignItems: 'center', marginTop: 18 }}>
                    <TextInput
                        style={{color:'grey', backgroundColor: 'white', elevation: 10, width: '100%', borderRadius: 30, paddingVertical: 12, fontSize: 20, paddingHorizontal: 20 }}
                        placeholder='mobile_number'
                        placeholderTextColor={'grey'}
                        onChangeText={(text) => { setmobile(text) }}
                        value={mobile}
                        // maxLength={10}
                    />
                </View>

                <View style={{ alignItems: 'center', marginTop: 18 }}>
                    <TextInput
                        style={{ color:'grey',backgroundColor: 'white', elevation: 10, width: '100%', borderRadius: 30, paddingVertical: 12, fontSize: 20, paddingHorizontal: 20 }}
                        placeholder='password'
                        placeholderTextColor={'grey'}
                        onChangeText={(text) => { setpassword(text) }}
                        value={password}
                    />
                </View>



                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ flex: 1, }} onPress={() => { signUpApi() }}>
                        <Text style={{ backgroundColor: '#FF6480', color: 'white', padding: 10, fontSize: 25, textAlign: 'center', marginTop: 30, borderRadius: 40, elevation: 10 }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',flexDirection:'row',marginTop:20}}>
                    <Text>Already Have an Account</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("LoginScreen")}>
                        <Text style={{marginLeft:10,color:'blue'}}>Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}
const mapStateToProps = (state) => ({
    data: state,
});
const mapDispatchToProps = {
    ActionsSigin,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);


   // const signupAPI = () => {
    //     return fetch('https://pixelt.in/shreemobile/public/api/register', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             email: email,
    //             phone_number: phone_number,
    //             name: name,
    //             password: password,
    //             device_token: '12345678',
    //             device_id: '12345678',
    //         })
    //     });
    // }
    
    // const onSignUp = async () => {
    //     let body = {
    //         email: email,
    //         phone_number: phone_number,
    //         name: name,
    //         password: password,
    //         device_token: '12345678',
    //         device_id: '12345678',
    //     }
    //     let res = await signupAPI(url, method, body)
    //     console.log(res);
    // }