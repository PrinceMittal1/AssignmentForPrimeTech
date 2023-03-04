import React from "react";
import { View, Text, ScrollView , TextInput, Pressable, StyleSheet} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from 'react-native-vector-icons/Entypo';
import {useState} from "react";

const Home : React.FC =() =>{

    type NamesState = string | null;
    const [Names, setNames] = useState<NamesState>(null);
    const [Ages, setAges] = useState<NamesState>(null);


    return (
        <ScrollView style={{backgroundColor:"white"}}>

            <View>
                <View style={Homestyles.upperbar}></View>

                <View style={Homestyles.restscreen}>
                    <View style={Homestyles.restscreenchild}>
                        
                          <View style={Homestyles.commonbox}>
                              <View>
                                  <Text style={{fontSize:17}}>Name</Text>
                              </View>

                              <View>
                                  <TextInput
                                  style={{borderWidth:1, padding:0, height:30, paddingLeft:10, marginTop:5, borderRadius:10}}
                                  placeholder="Name"
                                  value={Names}
                                  onChangeText={(t)=>{setNames(t)}}
                                  />
                              </View>
                          </View>


                          <View style={Homestyles.commonbox}>
                              <View>
                                 <Text style={{fontSize:17}}>Age</Text>
                              </View>

                              <View>
                                  <TextInput
                                    style={{borderWidth:1, padding:0, height:30, paddingLeft:10, marginTop:5, borderRadius:10}}
                                    placeholder="Age"
                                    value={Ages}
                                    onChangeText={(t)=>{setAges(t)}}
                                    />
                              </View>

                          </View>


                          <View style={Homestyles.commonbox}>
                              <View><Text>Technology on you want to work</Text></View>
                              <View>
                                <TextInput
                                style={{}}
                                />
                              </View>
                          </View>


                          <View style={{alignItems:"center"}}>


                              <View style={Homestyles.selfiebox}>
                                 <Entypo name="camera" size={25}color="#1D3932"/>
                              </View>


                              <View style={{marginTop:20, width:"100%"}}>
                                  <Pressable style={{width:"100%"}}>
                                      <View style={Homestyles.takepicturebutton}>
                                         <Text style={{fontSize:18, color:"white"}}>Take Picture</Text>
                                      </View>
                                  </Pressable>
                               </View>

                          </View>

                          <View style={Homestyles.locationcontainer}>
                              <View><Text style={{fontSize:20}}>Choose Location</Text></View>

                              <View style={{borderWidth:1, width:"100%", height:250}}>
                              </View>

                              <Pressable>

                                 <View style={Homestyles.mylocationbutton}>
                                   <Entypo name="location" size={30} color="white"/>
                                   <Text style={{color:"white", marginLeft:-20}}>Use My Current Location</Text>
                                   <AntDesign name="caretright" size={30} color="white"/>
                                 </View>

                              </Pressable>
                          </View>

                          <View style={{marginBottom:60, marginTop:40}}>
                            <Pressable>
                                <View style={{width:"35%",backgroundColor:"#e1e1d0", borderRadius:10, alignSelf:"center", alignItems:"center", padding:5}}>
                                   <Text style={{fontSize:25, color:"#1D3932"}}>save</Text>
                                </View>
                            </Pressable>
                          </View>

                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default Home

const Homestyles = StyleSheet.create({
    upperbar :{
        backgroundColor:"#1D3932", 
        width:"100%", 
        height:60, 
        borderBottomRightRadius:60
    },
    restscreen:{
        backgroundColor:"#1D3932", 
        width:"100%"
    },
    restscreenchild:{
        backgroundColor:"white",
         width:"100%",
         borderTopLeftRadius:60
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
        marginTop:35,
        width:"85%", 
        alignSelf:"center"
    }
})