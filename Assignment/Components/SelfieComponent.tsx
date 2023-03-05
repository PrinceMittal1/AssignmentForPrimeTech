import React from "react";
import { View, Text , Pressable, Image, StyleSheet} from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useState } from "react";
import Entypo from 'react-native-vector-icons/Entypo';

const SelfieComp: React.FC =() =>{

    const [img, setimg] = useState(null);


    function ClickingPhotofromgallery() {
        interface MyImageLibraryOptions {
            storageOption: {
              path: string;
              mediaType: string;
            };
            includeBase64: boolean;
            maxHeight: number;
            maxWidth: number;
        }

        let options : MyImageLibraryOptions = {
          storageOption: {
            path  : 'images',
            mediaType: 'photo',
          },
          includeBase64: false,
          maxHeight:600,
          maxWidth:800,
        }
  
  
        launchImageLibrary(options, response =>{
          if(response.didCancel){
            console.log("users canceled image picker")
          }
          else{
            setimg(response.assets[0].uri)
          }
        })
      }

    return (
         <View>
            <View style={{alignItems:"center"}}>


                 <View style={SelfieStyles.selfiebox}>
                    {
                        img ? <Image source={{uri:img}} style={SelfieStyles.img} /> :  <Entypo name="camera" size={25}color="#1D3932"/>
                    }
                 </View>


                 <View style={{marginTop:20, width:"100%"}}>
                     <Pressable style={{width:"100%"}} onPress={()=>{ClickingPhotofromgallery()}}>
                         <View style={SelfieStyles.takepicturebutton}>
                            <Text style={{fontSize:18, color:"white"}}>Take Picture</Text>
                         </View>
                     </Pressable>
                  </View>
             
             </View>
         </View>
    )
}

export default SelfieComp

const SelfieStyles = StyleSheet.create({
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
        height:300,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },
    img:{
        width:"100%", 
        height:300, 
        borderRadius:5
    }
})