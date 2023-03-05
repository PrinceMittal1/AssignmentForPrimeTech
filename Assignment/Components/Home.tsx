import React from "react";
import { View, Text, ScrollView , TextInput, Pressable, StyleSheet, FlatList, Alert} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useState, useEffect} from "react";
import SelfieComp from "./SelfieComponent";
import DropDown from "./DropDown";
import { useDispatch} from "react-redux";
import { addPerson } from "./Redux/NewSlice";
import Homestyles from "./Styles/homestyle";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    // const [num, setnum] = useState(null);


    const handletask= async()=>{
        let userprofle = {
            aName : Names,
            aAge : Ages,
            aList : List, 
            aPic : pic,
        }
        if(Names && Ages && List && pic ){
            try {
                await AsyncStorage.setItem("userprofile" ,JSON.stringify(userprofle));
                console.log('Data saved successfully!');
              } catch (e) {
                console.log('Error saving data:', e);
              }
        }
        else{
            Alert.alert("Please fill all detail")
        }
    }

    const dispatch = useDispatch();

    function removingelemtfromList(index){
        let newlist = [...List];
        newlist.splice(index, 1);
        setList(newlist);
    }

    const fltu:string = "prince"
    const flo:string = "age"

    // function Savingdata(){
    //     const dta = {
    //         Name : Names,
    //         Age : Ages,
    //         picture : pic,
    //         Tech : List,
    //         LocationLong : long,
    //         LocationLat : lat,
    //         LocationArea : area,
    //     }
    //     dispatch(addPerson({dta}));
    // }


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
                            <SelfieComp setpic={setpic} pic={pic}/>
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
                            <Pressable onPress={()=>{handletask()}} >
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
