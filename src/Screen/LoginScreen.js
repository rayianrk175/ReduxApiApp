
import React, { useState } from 'react';
import { ScrollView, Text, View, Button, Image, TextInput, TouchableOpacity, TouchableOpacityBase, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import apiName from '../Common/ApiName';
import AsyncStorageHelper from '../Common/AsyncStorage';
import { ActionsLogin } from '../Reduxs/actions/ActionsApi'


const LoginScreen = (props) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    console.log("======>Login", JSON.stringify(props))

    
    const LoginApi = async () => {

        let body = {
            email: email,
            password: password
        }
        console.warn(email, password);

        if (email === '' || password === '') {
            console.warn('Enter Email and Password...');
        } else {
            let res = await props.ActionsLogin(apiName.login_Api, 'POST', body)
            console.warn('====>respones', typeof res.data.status)
            if (res.data.status == 'true') {
                console.warn(res.data.massagge)
                props.navigation.navigate('HomeScreen')
            }
            else {
                console.warn(res.data.massagge);
            }
        }
    }



    return (
        <View style={{ flex: 1, padding: 20, }}>
            {/* <Image style={{ alignSelf: 'center', height: 90, width: 250, resizeMode: 'contain' }} source={require('../asstes/image/birohLogo.png')} /> */}
            <Text style={{ fontSize: 43, marginBottom: 60, color: 'black', fontWeight: 'bold', marginTop: 20 }}>Welcome Back</Text>
            <View style={{ alignItems: 'center', marginTop: 18 }}>
                <TextInput
                    style={{ backgroundColor: 'white', elevation: 10, width: '100%', borderRadius: 30, paddingVertical: 12, fontSize: 20, paddingHorizontal: 20 }}
                    placeholder='email'
                    // placeholderTextColor={'grey'}
                    onChangeText={(text) => { setemail(text) }}
                // value={phone_number}
                />
            </View>

            <View style={{ alignItems: 'center', marginTop: 18 }}>
                <TextInput
                    style={{ backgroundColor: 'white', elevation: 10, width: '100%', borderRadius: 30, paddingVertical: 12, fontSize: 20, paddingHorizontal: 20 }}
                    placeholder='password'
                    placeholderTextColor={'grey'}
                    onChangeText={(text) => { setpassword(text) }}
                // value={password}
                />
            </View>


            <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 30 }}>
                <Text style={{ fontSize: 25 }}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { LoginApi() }} style={{ marginVertical: 10 }} >
                <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'darkcyan', backgroundColor: '#FF6480', textAlign: 'center', padding: 10, borderRadius: 30, elevation: 10, color: 'white' }}>
                    LOGIN
                </Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', marginTop: 80, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, }}>Don’t have an account?
                    <TouchableOpacity style={{ marginRight: 7, marginTop: 15 }} onPress={() => props.navigation.navigate('SignUp')}>
                        <Text style={{ fontSize: 17, color: 'black' }}>  Sign Up</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    );
}

const mapStateToProps = (state) => ({
    data: state,
});
const mapDispatchToProps = {
    ActionsLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

//const LoginApi=async()=>{
    //     const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if(email==undefined || password==undefined){
    //         ToastAndroid.showWithGravity(
    //             "Enter email or password",
    //             ToastAndroid.SHORT,
    //             ToastAndroid.CENTER
    //           );
    //         // ToastAndroid.showWithGravity("Enter email or password");
    //     }else if(!reg.test(email)){
    //         ToastAndroid.showWithGravity(
    //             "Email is Invalid",
    //             ToastAndroid.SHORT,
    //             ToastAndroid.CENTER
    //           );
    //     }else{
    //         let  body={
    //           email:email,
    //           password:password
    //         }

    //         let response =await props.ActionsLogin(apiName.login_Api,'POST',body)
    //         console.log('======>kk',response)
    //         if(response.status){
    //           props.navigation.navigate('HomeScreen')
    //         }else{
    //             ToastAndroid.showWithGravity(
    //                 "Not Registered",
    //                 ToastAndroid.SHORT,
    //                 ToastAndroid.CENTER
    //               );
    //         }
    //     }
    // }
    // console.log('=====>',respones)
    // if (respones.data.status) {
    //     props.navigation.navigate('HomeScreen')
    // }
    // else {
    // }
    //}
    //   const  LoginApi= async()=>{
    //     let body={
    //         email:email,
    //         password:password,

    //     }
    //     let respones =await props.ActionsLogin(apiName.login,'POST',body)
    //     console.log('=====>',respones)
    //     if (respones.data.status) {
    //         props.navigation.navigate('HomeScreen')
    //     }
    //     else {
    //     }
    //     }