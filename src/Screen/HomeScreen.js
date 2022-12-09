import React, { useEffect, useState } from 'react';
import { Text, View,Image, StyleSheet,TextInput,FlatList, ScrollView, TouchableOpacity,Button, MaskedViewComponent} from 'react-native';
// import apiName from '../Common/ApiName';
// import AsyncStorageHelper from '../Common/AsyncStorage';
import Colors from '../Common/Colors';
import ImagePath from '../Common/ImagePath';
import String from '../Common/String';

const HomeScreen = (porps) => {


//   const [ProductList,setProductList]=useState()
//   useEffect(()=>{
//     getproductlist()
//   },[]) 

//    const getproductlist=async()=>{
//      let  token=await AsyncStorageHelper.getData('Token')
//       console.log('token============',token)
//      const Response=await fetch(apiName.category_url,{
//       //  method:'POST',
//        //  headers:{
//        //   Accept: 'application/json',
//      //   'Content-Type': 'application/json',
//        //   "Authorization": 'Bearer '+token
//        //  }
//       })
//      const Data=await Response.json()
//      setProductList(Data.data.productsList)
//       console.log("ProductList++++++++++++",Response)
      
//    }

  // const ProductDetails=(item)=>{
  //   porps.navigation.navigate('ProductDetails',{id:item.categoryId})
  // }


   
    const DATA = [
        {Photo:ImagePath.burger,title:'Burger',},{Photo:ImagePath.sushi,title:'Sushi',},{Photo:ImagePath.pizza,title:'Pizza',},
        {Photo:ImagePath.cake,title:'Cake',},{Photo:ImagePath.ice,title:'iceCre',},{Photo:ImagePath.burger,title:'Burger',},
        {Photo:ImagePath.burger,title:'Burger',}
      ];

      const renderItem = ({ item }) => (
    <View>
       <View style={Styles.itemView}>
        <Image source={item.Photo} style={Styles.BurgerImage} resizeMode="contain"/>
       </View>
       <Text style={Styles.BurgerText}>{item.title}</Text>
    </View>
      );
    
  return (
    <View style={Styles.ManView}>


      <View style={Styles.WhatView}>
        <TouchableOpacity> 
        <Text style={Styles.WhatWould}>{String.WhatWould}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Image source={ImagePath.bellIcon} resizeMode="contain" style={Styles.bellIconImage}/>
        </TouchableOpacity>
      </View>

       <View style={Styles.positionView}>
        <TextInput style={Styles.Input}placeholder="What Would your like to buy?"/>
        <Image source={ImagePath.searchIcon} resizeMode="contain" style={Styles.searchIcon}/>
        <Image source={ImagePath.menu} resizeMode="contain"style={Styles.MenuImage} />
       </View>

       <View>
    <FlatList
    horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
       </View>

<View style={Styles.PopluarView}>
    <Text style={Styles.PopluarText}>{String.Popluar}</Text>
    <Text style={Styles.SeeAllText}>{String.SeeAll}</Text>
</View>

<View style={Styles.boxView}>
<View style={Styles.heartitem}>
<Image source={ImagePath.heart} resizeMode="contain" style={Styles.heartImage}/>
<Image source={ImagePath.istock1} resizeMode="contain" style={Styles.istock1Image}/>
<View style={Styles.FriedEggView}>
    <Text style={Styles.FriedEggText}>{String.FriedEgg}</Text>
    <Image source={ImagePath.send1} resizeMode="contain" style={Styles.Send1Image}/>
</View>
<View style={Styles.starView}>
    <View style={Styles.flexDirectionView}>
    <Text style={Styles.text49}>4.9</Text>
    <Image source={ImagePath.star} resizeMode="contain" style={Styles.starImage}/>
    <Image source={ImagePath.star} resizeMode="contain" style={Styles.starImage}/>
    <Image source={ImagePath.star} resizeMode="contain" style={Styles.starImage}/>
    <Image source={ImagePath.star} resizeMode="contain" style={Styles.starImage}/>
    <Image source={ImagePath.star1} resizeMode="contain" style={Styles.starImage}/>
    <Text style={Styles.Text200}>(200)</Text>
    </View>
    <Text style={Styles.Text$17}>$15.06</Text>
</View>
</View>


<View style={Styles.heartitem}>
<Image source={ImagePath.heart} resizeMode="contain" style={Styles.heartImage}/>
<Image source={ImagePath.istockphoto2} resizeMode="contain" style={Styles.istock1Image}/>
<View style={Styles.FriedEggView}>
    <Text style={Styles.FriedEggText}>{String.Mixed}</Text>
    <Image source={ImagePath.send1} resizeMode="contain" style={Styles.Send1Image}/>
</View>

<View style={Styles.starView}>
    <View style={Styles.flexDirectionView}>
    <Text style={Styles.text49}>4.9</Text>
    <Image source={ImagePath.star} resizeMode="contain" style={Styles.starImage}/>
    <Image source={ImagePath.star} resizeMode="contain" style={Styles.starImage}/>
    <Image source={ImagePath.star} resizeMode="contain" style={Styles.starImage}/>
    <Image source={ImagePath.star} resizeMode="contain" style={Styles.starImage}/>
    <Image source={ImagePath.star1} resizeMode="contain" style={Styles.starImage}/>
    <Text style={Styles.Text200}>(100)</Text>
    </View>
    <Text style={Styles.Text$17}>$17.03</Text>
</View>
</View>
</View> 

 <Text style={Styles.BestText}>{String.Best}</Text>
<ScrollView>
    <Image source={ImagePath.BestFood}resizeMode='contain' style={Styles.BestFoodImage}/>
    <Image source={ImagePath.istockphoto1}  resizeMode='contain' style={Styles.BestFoodImage}/>
</ScrollView>

<View>
</View>


 {/* <View>
<FlatList
            numColumns={2}
            data={ProductList}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={()=>{ProductDetails(item)}} style={{ flex: 1, minHeight: 200, backgroundColor: 'white', margin: 7, padding: 10, elevation: 15 }}>
                <Image style={{ width: 70, height: 120, alignSelf: 'center' }} source={{uri:item.productImage}} />
                <Image style={{ width: 30, height: 30, resizeMode: 'contain', position: 'absolute', top: 10, right: 10 }} source={require('../Assets/Image/istockphoto.jpg')} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                  <Text style={{ fontSize: 25 }}>{item.productPrice}</Text>
                  <Text style={{ fontSize: 20, textDecorationLine: 'line-through' }}>{item.productBrandName}</Text>
                </View>
                <Text style={{ fontSize: 20 }} numberOfLines={1}>{item.productName}</Text>
              </TouchableOpacity>

            }
          />
</View>  */}
    </View>
  );
}

export default HomeScreen
const Styles=StyleSheet.create({
  ManView:{flex:1,padding:10,backgroundColor:'#ededed'},
  WhatView:{flexDirection:'row',justifyContent:'space-between'},
  WhatWould:{color:Colors.black,fontSize:16},
  bellIconImage:{width:25,height:25},

  positionView:{position:'relative',justifyContent:'space-between',marginVertical:16},
  Input:{height:50,borderWidth:1,paddingLeft:50,fontSize:16},
  searchIcon:{width:20,height:20,position:'absolute',marginTop:14,left:8},
  MenuImage:{width:25,height:25,position:'absolute',right:10,marginTop:14},

  itemView:{backgroundColor:'#fff',padding:10,marginHorizontal:8,},
  BurgerImage:{width:25,height:25,},
  BurgerText:{fontSize:16,marginVertical:8,fontWeight:'bold',marginHorizontal:8},

  PopluarView:{justifyContent:'space-between',flexDirection:'row',marginVertical:8},
  PopluarText:{fontSize:18,fontWeight:'bold'},
  SeeAllText:{fontSize:16,color:Colors.blue,fontWeight:'bold'},

  boxView:{flexDirection:'row',justifyContent:'space-between'},
  heartitem:{flex:1,backgroundColor:Colors.White,padding:8,borderRadius:8,marginHorizontal:5},
  heartImage:{width:18,height:18,alignSelf:'flex-end'},
  istock1Image:{width:100,height:100,borderRadius:60,alignSelf:'center',marginTop:-16},

  FriedEggView:{flexDirection:'row',justifyContent:'space-between'},
  FriedEggText:{fontSize:16,fontWeight:'bold',marginTop:8},
  Send1Image:{width:18,height:18,marginTop:10},

  starImage:{width:14,height:14,alignSelf:'center'},
  starView:{flexDirection:'row',marginVertical:10},
  flexDirectionView:{flexDirection:'row'},
  text49:{fontSize:12,marginVertical:8},
  Text200:{fontSize:12,marginVertical:8,marginHorizontal:4},
  Text$17:{fontSize:12,marginVertical:8,marginHorizontal:5},

  BestText:{marginVertical:22,fontSize:18,fontWeight:'bold'},
  BestFoodImage:{width:'100%',height:300,borderRadius:14}


})
