import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ImagePath from '../Common/ImagePath';
import String from '../Common/String';

const CartScreen = () => {
const [select1, setSelect1] = useState('0');


    return (
        <View style={{ flex: 1,}}>
             <View style={Styles.Image_View}>
                <Image style={Styles.Image_Back} source={ImagePath.back} resizeMode="contain"/>
                <Image source={ImagePath.cart} style={Styles.Image_Back} resizeMode="contain"/>    
            </View>
            <View style={Styles.ManView}>
                <Image source={ImagePath.BestFood} resizeMode="contain" style={Styles.BestFoodImage} />
                <View style={Styles.Text_View}>
                    <Text style={Styles.Grilled_Text}>{String.Grilled}</Text>
                    <Text style={Styles.Grilled_Text}>{String.$96}</Text>
                </View>
                <Text style={Styles.byText}>{String.byPizza}</Text>
                <View style={Styles.PlusMnus_View}>
                    <Image source={ImagePath.minimize} style={Styles.minus_Image} resizeMode="contain"/>
                    <TouchableOpacity style={Styles.TouchableOpacity_Text_view}>
                        <Text style={Styles.Add_Text}>{String.Add}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image style={Styles.plus_Image} source={ImagePath.plus} resizeMode="contain"/>
                   </TouchableOpacity>
                </View>

                

              <View style={{ flexDirection: 'row',justifyContent:'space-around'}}>
                <TouchableOpacity onPress={() => { setSelect1('0') }}  >
                  <Text style={[Styles.Food_Detalis_Text, { color: select1 == '0' ? 'red' : '#000', }]}>{String.Food_Detalis}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setSelect1('1') }} >
                  <Text style={[Styles.myprofile, { color: select1 == '1' ? 'red' : '#000', }]}>{String.Food_Reviews}</Text>
                </TouchableOpacity>
              </View>
          
        </View>
      </View>
    );
}

export default CartScreen
const Styles = StyleSheet.create({
    ManView: { padding: 12, },
    Image_View:{justifyContent:'space-between',flexDirection:'row',paddingHorizontal:5,marginVertical:10},
    Image_Back:{width:30,height:30},
    BestFoodImage: { width: "100%", height: 250 },
    Text_View: { flexDirection: 'row', justifyContent: 'space-between' },
    Grilled_Text: { fontSize: 18, },
    byText: { fontSize: 14 },
    PlusMnus_View:{flexDirection:'row',alignSelf:'center',marginVertical:16},
    minus_Text:{fontSize:22},
    minus_Image:{width:25,height:25,alignSelf:'center',marginHorizontal:16,},
    plus_Image:{width:25,height:25,marginVertical:10,marginHorizontal:16},
    TouchableOpacity_Text_view:{backgroundColor:'red',padding:10,width:'60%',borderRadius:8,},
    Add_Text:{fontSize:18,color:'white',textAlign:'center'},
    Food_Detalis_Text:{fontSize:16}
})