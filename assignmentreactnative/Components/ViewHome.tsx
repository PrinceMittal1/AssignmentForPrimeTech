import React from "react";
import {useEffect, useState} from "react";
import { View, Text , ScrollView, Pressable, TextInput, StyleSheet} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addPerson } from "./Redux/NewSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditName from "./EditName";
import EditAge from "./EditAge";
import EditList from "./EditList";
import EditSelfie from "./EditSelfie";
import { useIsFocused } from '@react-navigation/native';
import ClearAll from "./Clearall";

const Viewhome : React.FC =({navigation}) =>{

  const dispatch = useDispatch();
  function Savingdata(value){
    const dta = {
        Name : value.aName,
        Age : value.aAge,
        picture : value.aPic,
        Tech : value.aList,
        LocationLong : value.along,
        LocationLat : value.alat,
        LocationArea : value.aarea,
    }
    dispatch(addPerson({dta}));
}

    const handletask= async()=>{
      try {
         const newvale =  await AsyncStorage.getItem("userprofile");
         const value = JSON.parse(newvale);
          Savingdata(value);
        } catch (e) {
          console.log('Error saving data:', e);
        }
    }

    useEffect(()=>{
        console.log("view home redner");
        handletask();
    })

    async function Allchnages(){
        const Alldata = {
            "aAge": "", 
            "aList": [], 
            "aName": "", 
            "aPic": ""
        }
        try {
            await AsyncStorage.setItem("userprofile" ,JSON.stringify(Alldata));
            console.log('Data saved successfully!');
        } catch (e) {
            console.log('Error saving data:', e);
        }
    }

    const clearall =() =>{
        Allchnages();
        navigation.navigate("Home")
    }

    return (
       <ScrollView style={{backgroundColor:"white"}}>
          <View>
                <View style={EditHomeStyle.upperbar}>
                    <Pressable style={{alignItems:"flex-end"}} onPress={()=>{clearall()}}>
                         <Text style={{color:"white", fontSize:25, marginRight:20}}>clear all</Text>
                    </Pressable>
                </View>

                <View style={EditHomeStyle.restscreen}>
                    <View style={EditHomeStyle.restscreenchild}>
                
                        <View style={EditHomeStyle.commonbox}>
                            <EditName />
                        </View>

                        <View style={EditHomeStyle.commonbox}>
                              <EditAge />
                        </View>

                        <View style={EditHomeStyle.commonbox}>
                              <EditList />
                        </View>

                        <View>
                            <EditSelfie />
                        </View>


                    </View>
                </View>
            </View>

       </ScrollView>
    )
}

export default Viewhome

const EditHomeStyle = StyleSheet.create({
  upperbar :{
      backgroundColor:"#1D3932", 
      width:"100%", 
      height:60, 
      borderBottomRightRadius:60
  },
  restscreen:{
      backgroundColor:"#1D3932", 
      width:"100%", 
  },
  restscreenchild:{
      backgroundColor:"white",
       width:"100%",
       borderTopLeftRadius:60,
  },
  takepicturebutton:{
      backgroundColor:"#1D3932", 
      padding:8, 
      borderRadius:18, 
      width:"50%", 
      alignSelf:"center", 
      alignItems:"center"
  },
  selfiebox:{
      marginTop:35, 
      borderWidth:1, 
      width:"85%", 
      height:150, 
      borderRadius:5,
      justifyContent:"center",
      alignItems:"center"
  },
  mylocationbutton:{
      borderWidth:1, 
      height:50, 
      borderRadius:10, 
      marginTop:10,
       flexDirection:"row", 
       justifyContent:"space-around", 
       alignItems:"center", 
      padding:5,
      backgroundColor:"#1D3932"
  }, 
  locationcontainer:{
      marginTop:25,
      width:"85%", 
      alignSelf:"center"
  }, 
  commonbox:{
      marginTop:20,
      width:"85%", 
      alignSelf:"center"
  }
})