// import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import { networkRequest } from '../Reduxs/actions/ActionsApi';

// const SignUp1 = ({ navigation }) => {
//     const [name, setname] = useState("");
//     const [email, setemail] = useState("");
//     const [phone_number, setphone_number] = useState("");
//     const [password, setpassword] = useState("");

//     const signUpApi = async () => {
//         // fetch('https://jsonplaceholder.typicode.com/todos/2', { method: 'GET' })
//         // .then(response => response.json())
//         // .then(json => console.log(json))
//         let body = {
//             email: email,
//             phone_number: phone_number,
//             name: name,
//             password: password,
//             device_token: '12345678',
//             device_id: '12345678',
//         }
//         // fetch('https://pixelt.in/shreemobile/public/api/register',
//         //     { method: 'POST', body: body, headers: { 'Content-Type': 'application/json' } })
//         //     .then(response => response.json())
//         //     .then((err, res) => {
//         //         if (err) throw err;              
//         //         console.log(res);
//         //     })
//         let response = networkRequest('register','POST',body);
//         console.warn(response);
//         // let Response = await ActionsSigin(apiName.siginup, 'POST', body)
//         // console.log(JSON.stringify(response))
//         // if (Response.data.status == true) {
//         //     navigation.navigate('OtpScreen', { value_item: Response.data.data })

//         // }
//         // else {
//         // }

//     }


//     return (
//         <View style={{ flex: 1, padding: 10 }}>
//             <View>
//                 {/* <Image style={{ alignSelf: 'center', height: 90, width: 250, resizeMode: 'contain' }} source={require('../asstes/Image/logo.png')} /> */}
//                 <Text style={{ fontSize: 43, marginBottom: 60, color: 'black', fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}>Welcome Back</Text>
//                 <View style={{ alignItems: 'center', marginTop: 18 }}>
//                     <TextInput
//                         style={{ color: 'grey', backgroundColor: 'white', elevation: 10, width: '100%', borderRadius: 30, paddingVertical: 12, fontSize: 20, paddingHorizontal: 20 }}
//                         placeholder='name'
//                         placeholderTextColor={'grey'}
//                         onChangeText={(text) => { setname(text) }}
//                         value={name}
//                     />
//                 </View>

//                 <View style={{ alignItems: 'center', marginTop: 18 }}>
//                     <TextInput
//                         style={{ color: 'grey', backgroundColor: 'white', elevation: 10, width: '100%', borderRadius: 30, paddingVertical: 12, fontSize: 20, paddingHorizontal: 20 }}
//                         placeholder='email'
//                         placeholderTextColor={'grey'}
//                         onChangeText={(text) => { setemail(text) }}
//                         value={email}
//                     />
//                 </View>

//                 <View style={{ alignItems: 'center', marginTop: 18 }}>
//                     <TextInput
//                         style={{ color: 'grey', backgroundColor: 'white', elevation: 10, width: '100%', borderRadius: 30, paddingVertical: 12, fontSize: 20, paddingHorizontal: 20 }}
//                         placeholder='phone_number'
//                         placeholderTextColor={'grey'}
//                         onChangeText={(text) => { setphone_number(text) }}
//                         value={phone_number}
//                     // maxLength={10}
//                     />
//                 </View>

//                 <View style={{ alignItems: 'center', marginTop: 18 }}>
//                     <TextInput
//                         style={{ color: 'grey', backgroundColor: 'white', elevation: 10, width: '100%', borderRadius: 30, paddingVertical: 12, fontSize: 20, paddingHorizontal: 20 }}
//                         placeholder='password'
//                         placeholderTextColor={'grey'}
//                         onChangeText={(text) => { setpassword(text) }}
//                         value={password}
//                     />
//                 </View>



//                 <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
//                     <TouchableOpacity style={{ flex: 1, }} onPress={() => { signUpApi() }}>
//                         <Text style={{ backgroundColor: '#FF6480', color: 'white', padding: 10, fontSize: 25, textAlign: 'center', marginTop: 30, borderRadius: 40, elevation: 10 }}>Sign Up</Text>
//                     </TouchableOpacity>
//                 </View>


//             </View>
//         </View>
//     );
// }

// export default SignUp1;

// const styles = StyleSheet.create({})