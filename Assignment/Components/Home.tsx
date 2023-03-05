import React from "react";
import { View, Text, ScrollView , TextInput, Pressable, StyleSheet, FlatList} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useState, useEffect} from "react";
import SelfieComp from "./SelfieComponent";
import DropDown from "./DropDown";
import { addingdetail } from "./Redux/AllactionsSlice";
import { useDispatch , useSelector} from "react-redux";

const Home : React.FC =() =>{

    type NamesState = string | null;
    type liststate = string[] | null;

    const [Names, setNames] = useState<NamesState>(null);
    const [Ages, setAges] = useState<NamesState>(null);
    const [List, setList] = useState<liststate>([]);
    const [pic, setpic] = useState<NamesState>(null);
    const [long, setlong] = useState(null);
    const [lat, setlat] = useState(null);
    const [area, setarea] = useState(null);

    const dispatch = useDispatch();

    function removingelemtfromList(index){
        let newlist = [...List];
        newlist.splice(index, 1);
        setList(newlist);
    }

    const newdata = useSelector(state => state);

    // console.log(newdata);
    useEffect(()=>{
        // console.log("new data is"  + newdata);
    },[])

    function Savingdata(){
        console.log("clicked on saving")
        const dta = {
            Name : Names,
            Age : Ages,
            picture : pic,
            Selfie : List,
            LocationLong : long,
            LocationLat : lat,
            LocationArea : area,
        }
        dispatch(addingdetail(dta))
    }


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
                                <View style={{marginBottom:5}}><Text>Select Your Technology</Text></View>
                               <FlatList 
                               data={List} 
                               horizontal={true}
                               renderItem={({item, index}) => 
                                <View style={{borderWidth:1, margin:5, padding:5, borderRadius:20, flexDirection:"row", justifyContent:"space-evenly"}}>
                                    <Text>{item}</Text>
                                    <Pressable onPress={()=>{removingelemtfromList(index)}}>
                                        <MaterialIcons name="cancel" size={20} />
                                    </Pressable>
                                </View>
                                }
                               />
                               <DropDown setlist={setList} list={List}/>
                          </View>

                          
                          <View>
                            <SelfieComp />
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
                            <Pressable onPress={()=>{Savingdata()}} >
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