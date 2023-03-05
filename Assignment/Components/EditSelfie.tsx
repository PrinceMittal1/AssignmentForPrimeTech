import React from "react";
import { View, Text , Pressable, Image, StyleSheet} from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useState , useEffect} from "react";
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface selfieProps {
  setpic: (list: string) => void;
  pic: string;
}

const EditSelfie: React.FC=() =>{
    interface AllData {
        aPic?: string | number;
    }
    const [changing, setchanging]  = useState(false);
    const [pic, setpic] = useState(null);
    const [Alldata, setAlldata] = useState<AllData>({});

    async function fetchingname(){
        try{
            const dat = await AsyncStorage.getItem("userprofile")
            const data = (JSON.parse(dat));
            setpic(data.aPic);
            setAlldata(data);
        }
        catch{
        }
    }

    useEffect(()=>{
        fetchingname();
    },[])

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
            setpic(response.assets[0].uri)
            setchanging(true);
          }
        })
      }

    const submitting = async () =>{
        Alldata.aPic = pic;
        // console.log(Alldata);r
        try {
            await AsyncStorage.setItem("userprofile" ,JSON.stringify(Alldata));
            console.log('Data saved successfully!');
        } catch (e) {
            console.log('Error saving data:', e);
        }
        setchanging(false);
    }

    const removingpic =() =>{
        console.log("removing picture ");
        setpic("");
        setchanging(true);
    }

    return (
         <View>
            <View style={{alignItems:"center"}}>


                 <View style={SelfieStyles.selfiebox}>
                    {
                        pic ? <Image source={{uri:pic}} style={SelfieStyles.img} /> :  <Entypo name="camera" size={25}color="#1D3932"/>
                    }
                 </View>


                {
                    changing ? 
                    
                    <View style={{width:"40%", marginTop:15}}>
                        <Pressable onPress={()=>{submitting()}}>
                            <View style={SelfieStyles.takepicturebutton}>
                                <Text style={{color:"white"}}>Submit</Text>
                            </View>
                        </Pressable>
                    </View>

                     : 

                     <View style={{marginTop:20, width:"85%", flexDirection:"row",justifyContent:"space-evenly"}}>
                         <Pressable style={{width:"30%"}} onPress={()=>{removingpic()}} >
                             <View style={SelfieStyles.takepicturebutton}>
                                <Text style={{fontSize:18, color:"white"}}>Remove</Text>
                             </View>
                         </Pressable>

                         <Pressable style={{width:"40%"}} onPress={()=>{ClickingPhotofromgallery()}} >
                             <View style={SelfieStyles.takepicturebutton}>
                                <Text style={{fontSize:18, color:"white"}}>Edit Picture</Text>
                             </View>
                         </Pressable>
                   </View>
                }
             
             </View>
         </View>
    )
}

export default EditSelfie

const SelfieStyles = StyleSheet.create({
    takepicturebutton:{
        backgroundColor:"#1D3932", 
        padding:8, 
        borderRadius:18, 
        width:"100%", 
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