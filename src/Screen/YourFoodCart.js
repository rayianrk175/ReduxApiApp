import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native';
import ImagePath from '../Common/ImagePath';
import String from '../Common/String';

const  YourFoodCart = () => {
const [select1, setSelect1] = useState('0');


    return (
        <View style={Styles.ManView}>
            <View style={Styles.Image_View}>
                <Image style={Styles.Image_Back} source={ImagePath.back} resizeMode="contain"/>
                <Text style={Styles.Item_Text}>{String.Item}</Text>
                <Image source={ImagePath.cart} style={Styles.Image_Cart} resizeMode="contain"/>    
            </View>
            <View style={Styles.View_man}>
              <Text style={Styles.Your_Text}>{String.Your}</Text>
            </View>
            <ScrollView>
            <View style={Styles.Box_View}>
             <Image source={ImagePath.istock1} resizeMode="contain" style={Styles.istock1_Image} />
             <View>
              <Text style={Styles.GrilledSalmon_Text}>{String.GrilledSalmon}</Text>
              <Text style={Styles.$9600_Text}>{String.$9600}</Text>
              <View style={Styles.TouchableOpacity_View}>
                <TouchableOpacity>
                    <Image source={ImagePath.minimize} style={Styles.minus_Image} resizeMode="contain"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.TouchableOpacity_Text_view}>
                        <Text style={Styles.Add_Text}>{String.AddTo2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image style={Styles.plus_Image} source={ImagePath.plus} resizeMode="contain"/>
                   </TouchableOpacity>
                   </View>
             </View>
             <View style={Styles.delete_View}>
              <Image source={ImagePath.delete} style={Styles.delete_Image} resizeMode='contain'/>
             </View>
             
            </View>
            <View style={Styles.Box_View}>
             <Image source={ImagePath.istock1} resizeMode="contain" style={Styles.istock1_Image} />
             <View>
              <Text style={Styles.GrilledSalmon_Text}>{String.GrilledSalmon}</Text>
              <Text style={Styles.$9600_Text}>{String.$9600}</Text>
              <View style={Styles.TouchableOpacity_View}>
                <TouchableOpacity>
                    <Image source={ImagePath.minimize} style={Styles.minus_Image} resizeMode="contain"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.TouchableOpacity_Text_view}>
                        <Text style={Styles.Add_Text}>{String.AddTo2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image style={Styles.plus_Image} source={ImagePath.plus} resizeMode="contain"/>
                   </TouchableOpacity>
                   </View>
             </View>
             <View style={Styles.delete_View}>
              <Image source={ImagePath.delete} style={Styles.delete_Image} resizeMode='contain'/>
             </View>
            </View>

                <TextInput style={{width:'95%',alignSelf:'center',backgroundColor:'#fff',elevation:16,marginVertical:10,borderRadius:8,height:60,padding:10,fontSize:16}} placeholder="Add your Promo code"/>
            <View style={{width:'95%',height:120,backgroundColor:'white',alignSelf:'center',marginVertical:10,elevation:20,flexDirection:'row',justifyContent:'space-between',padding:10,borderRadius:8}}>
            <View>
              <Text style={{fontSize: 18,marginVertical:5}}>{String.GrilledSalmon}</Text>
              <Text style={{fontSize: 18,marginVertical:5}}>{String.Meat}</Text>
              <Text style={{fontSize: 18,marginVertical:5,color:'#000'}}>{String.Total}</Text>
              </View>
              <View>
               <Text style={{fontSize: 18,marginVertical:5}}>{String.$192}</Text>
               <Text style={{fontSize: 18,marginVertical:5}}>{String.$102}</Text>
               <Text style={{fontSize: 18,marginVertical:5,color:'#000'}}>{String.$292}</Text>
              </View>
            </View>
                <Text style={{fontSize:20,color:'#000',paddingHorizontal:10,marginVertical:10}}>{String.Payment}</Text>
                <View style={{width:'95%',height:70,backgroundColor:'#fff',elevation:16,alignSelf:'center',marginVertical:10,padding:16,flexDirection:'row'}}>
                 <Image source={ImagePath.creditCard} resizeMode="contain" style={{width:35,height:35,}}/>
                 <Text style={{fontSize:16,color:'#000',marginHorizontal:10,marginVertical:6}}>{String.Credit}</Text>
                </View>
            </ScrollView>
      </View>
    );
}

export default YourFoodCart;
const Styles = StyleSheet.create({
    ManView:{flex:1,padding:10,},
    View_man:{marginHorizontal:12,marginVertical:20},
    Image_View:{justifyContent:'space-between',flexDirection:'row',marginVertical:10},
    Image_Back:{width:30,height:30,},
    Image_Cart:{width:30,height:30,right:10},
    Item_Text:{fontSize:22,color:'#000'},
    Your_Text:{color:'#000',fontSize:22},

    Box_View:{width:'95%',height:145,backgroundColor:'white',alignSelf:'center',elevation:14,flexDirection:'row',justifyContent:'space-around',padding:12,marginVertical:10,borderRadius:8},
    istock1_Image:{width:100,height:100,},
    GrilledSalmon_Text:{color:'#000',fontSize:16,marginHorizontal:22,marginVertical:10},
    $9600_Text:{color:'#000',fontSize:16,marginHorizontal:22},
    TouchableOpacity_View:{flexDirection:'row',marginVertical:16,left:22},
    PlusMnus_View:{flexDirection:'row',alignSelf:'center',},
    minus_Image:{width:20,height:20,alignSelf:'center',marginHorizontal:18},
    plus_Image:{width:20,height:20,alignSelf:'center',marginHorizontal:18,marginVertical:8},
    TouchableOpacity_Text_view:{backgroundColor:'red',justifyContent:'center',width:'40%',height:35,borderRadius:5,},
    Add_Text:{color:'white',textAlign:'center'},
    delete_View:{right:18,marginVertical:16},
    delete_Image:{width:25,height:25}



    
})