import React from "react";
import { View, Text , Pressable, Image, StyleSheet} from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useState , useEffect} from "react";
import { useDispatch } from "react-redux";
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeinpic } from "./Redux/NewSlice";
import { useIsFocused } from '@react-navigation/native';


interface selfieProps {
  setpic: any;
  pic: string;
}

const EditSelfie: React.FC=() =>{
    interface AllData {
        aPic?: any;
    }

    interface resp{
        assets : any;
    }
    const [changing, setchanging]  = useState(false);
    const [pic, setpic] = useState(null);
    const [Alldata, setAlldata] = useState<AllData>({});

    async function fetchingname(){
        try{
            const dat : any= await AsyncStorage.getItem("userprofile")
            const data = (JSON.parse(dat));
            setpic(data.aPic);
            setAlldata(data);
        }
        catch{
        }
    }

    const isfocus = useIsFocused();
    
    useEffect(()=>{
        fetchingname();
    },[isfocus])

    const dispatch = useDispatch();

    function Savingdata(){
        dispatch(changeinpic(pic));
    }

    function ClickingPhotofromgallery() {
        interface MyImageLibraryOptions {
            storageOption: {
              path: string;
              mediaType: string;
            };
            includeBase64: boolean;
            cameraType: string;
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
          cameraType : 'front',
          maxWidth:800,
        }
  
  
        launchCamera(options, response =>{
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
        Savingdata();
    }

    const removingpic =() =>{
        let empt = "";
        console.log("removing picture ");
        setpic(empt);
        setchanging(true);
    }

    return (
         <View style={{marginBottom:100}}>
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