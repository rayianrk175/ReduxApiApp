import React, { useState } from 'react';
import { ScrollView, Text, View,TouchableOpacity, ToastAndroid, } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput'
import {ActionsOtp} from '../Reduxs/actions/ActionsApi'
import { connect } from 'react-redux';
import apiName from '../Common/ApiName';

// props.route.params.value_item.otp
const OtpScreen = (props) => {
     console.log('==========>Otp',JSON.stringify(props))
    //  console.log('++++++',props.route.params.value_item)
     const [apiOtp, setApiOTP] = useState(props?.route?.params?.item_data?.otp)
    // const [otp, setotp] = useState(JSON.stringify(props.route.params.item_data.otp))
    // const [email, setemail] = useState(props.route.params.item_data.email)
    // const [token,settoken] =useState(JSON.stringify(props.route.params.item_data.token))
    const [otp, setotp] = useState('')
    const [email, setemail] = useState('rayianrk175@gmail.com');
    const [token,settoken] =useState('');

    //   console.log('++++++',JSON.stringify(props.route.params.item_data))
    const resendOTP =async()=>{
        let body = {
            email:email
        }
        let res = await props.ActionsOtp(apiName.resend_otp,'POST',body);
        setApiOTP(res.data.data.otp)
        // console.warn(res.data.data.otp);
        // console.warn(otp);
    }
    const OtpApi=async()=>{
        let body ={
            otp:otp,
            email:email,
          }
          let res= await props.ActionsOtp(apiName.otp_verify,'POST',body)
          console.log("======>",res) 
          if(res.data.status){
            //   console.warn(res.data.msg);  
           props.navigation.navigate('LoginScreen',)
          }else if(!res.data.status){
            // console.warn(res.data.msg);
          }  

     }



    // const  OtpApi= async()=>{
    //     if(otps){
    //         console.log('otps!=Current_Otp',otps,Current_Otp)
    //         if(otps){
    //             let body ={
    //                 // number:number,
    //                 otp:otps,
    //                 device_token:"12345678",
    //                 user_id:" 4221"

    //             }
    //             // console.log('body',body)   

    //            let  Response =await props.ActionsOtp(apiName.otp_verify,'POST',body)
    //            console.log('Response',JSON.stringify(Response))   
    //            if(Response){
    //             props.navigation.navigate('LoginScreen',{value_item:Response.data.data})   
    //             }
    //         }else{
    //             alert('otp note found') 
    //         }

    //     }else{
    //        alert('pls enter otp') 
    //     }
    // }
    return (
        <View style={{ flex: 1, padding: 20, }}>
            <Text style={{ fontSize: 43, marginBottom: 60, color: 'black', fontWeight: 'bold', marginTop: 20 }}>OTP Screen</Text>


            <OTPTextInput
                inputCount={4}
                handleTextChange={(text) => setotp(text)}
                defaultValue={otp}
            />
            <Text>{apiOtp}</Text>

            <TouchableOpacity onPress={()=>props.navigation.navigate('Forgetscreen')} style={{ alignSelf: 'flex-end', marginTop: 30 }}>
                <Text style={{ fontSize: 18,color:'red' }}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={OtpApi} style={{marginTop:29}}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'darkcyan', backgroundColor: '#FF6480', textAlign: 'center', padding: 10, borderRadius: 30, elevation: 10, color: 'white' }}>
                Verify
                </Text>
            </TouchableOpacity>




            {/* <View style={{ alignItems: 'center', marginTop: 80, flexDirection: 'row', justifyContent: 'center' }}> */}
                {/* <Text style={{ fontSize: 18, }}>Don’t have an account? */}
                    {/* <TouchableOpacity style={{ marginRight: 7, marginTop: 10 }} onPress={() => navigation.navigate('SignUpScreen')}> */}
                        {/* <Text style={{ fontSize: 17, color: 'black' }}>  Sign Up</Text> */}
                    {/* </TouchableOpacity> */}
                {/* </Text> */}
            {/* </View> */}
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginTop:20}} onPress={resendOTP}>
                <Text style={{fontSize:18,color:'red'}}>Resend OTP</Text>
            </TouchableOpacity>
        </View>
    );
}


const mapStateToProps = (state) => ({
    data: state,
  });
  const mapDispatchToProps = {
    ActionsOtp,
  };

export default connect(mapStateToProps, mapDispatchToProps)(OtpScreen);
