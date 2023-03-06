import React from "react";
import {useEffect, useState} from "react";
import { View, Text , ScrollView, TextInput, Pressable, FlatList} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector , useDispatch} from "react-redux";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DropDown from "./DropDown";
import { changeinlist } from "./Redux/NewSlice";
import { useIsFocused } from '@react-navigation/native';

const EditList : React.FC =() =>{
    interface AllData {
        aList?: string[];
    }
    const [changing, setchanging]  = useState(false);
    const [newlist, setnewlist] = useState(null);
    const [Alldata, setAlldata] = useState<AllData>({});
    async function fetchingname(){
        try{
            const dat = await AsyncStorage.getItem("userprofile")
            const data = (JSON.parse(dat));
            setnewlist(data.aList);
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
        dispatch(changeinlist(newlist));
    }

    function removingelemtfromList(index){
        let list = [...newlist];
        list.splice(index, 1);
        setnewlist(list);
    }
    async function namechanged(){
        Alldata.aList = newlist;
        try {
            await AsyncStorage.setItem("userprofile" ,JSON.stringify(Alldata));
            console.log('Data saved successfully!');
        } catch (e) {
            console.log('Error saving data:', e);
        }
        setchanging(false);
        Savingdata();
    }

    return (
        <View style={{}}>
            <Text style={{color:"black"}}>Tech You Selected</Text>
            {
                changing 
                ?
                <View style={{borderRadius:10, padding:5, }}>
                    <View style={{alignSelf:"flex-end"}}>
                        <Pressable onPress={namechanged}>
                            <View style={{padding:5, borderRadius:15, backgroundColor:"#1D3932"}}>
                                <Text style={{fontSize:22, color:"white"}}>Submit</Text>
                            </View>
                        </Pressable>
                    </View>

                    <View>
                          <FlatList 
                               data={newlist} 
                               horizontal={true}
                               renderItem={({item, index}) => 
                                <View style={{borderWidth:1, margin:5, padding:5, borderRadius:20, flexDirection:"row", justifyContent:"space-evenly"}}>
                                    <Text style={{color:"black"}}>{item}</Text>
                                    <Pressable onPress={()=>{removingelemtfromList(index)}}>
                                        <MaterialIcons name="cancel" color="black" size={20} />
                                    </Pressable>
                                </View>
                                }
                            />
                    </View>

                    <View style={{width:"100%"}}><DropDown  setlist={setnewlist} list={newlist}/></View>

                </View>
                : 

                <View style={{borderWidth:1, borderRadius:10, padding:5, flexDirection:"row", justifyContent:"space-between"}}>
                   
                    <View>
                        <FlatList 
                        data={newlist}
                        renderItem={({item}) =>
                           <View>
                              <Text style={{color:"black"}}>{item}</Text>
                           </View>
                        }
                        />
                    </View>

                    <Pressable onPress={()=>{setchanging(true)}}>
                        <View style={{borderWidth:1, padding:2, paddingLeft:5, borderRadius:5}}>
                            <FontAwesome name="edit" color="black" size={25}/>
                        </View>
                    </Pressable>

                </View>
            }
        </View>
    )
    
}

export default EditList

{/* <View>
                        <FlatList
                        data={list}
                        renderItem={({item}) =><View>{item}</View>}
                        />
                    </View> */}

                    // <FlatList 
                    // horizontal={true}
                    // data={newlist}
                    // renderItem={({item}) =><View><Text>{item}</Text></View>}
                    // />