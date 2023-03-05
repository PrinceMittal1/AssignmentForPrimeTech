import React from "react";
import {useEffect, useState} from "react";
import { View, Text , ScrollView, TextInput, Pressable} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from "react-redux";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EditName : React.FC =() =>{
    interface AllData {
        aName?: string;
    }
    const [changing, setchanging]  = useState(false);
    const [name, setname] = useState(null);
    const [Alldata, setAlldata] = useState<AllData>({});
    async function fetchingname(){
        try{
            const dat = await AsyncStorage.getItem("userprofile")
            const data = (JSON.parse(dat));
            setname(data.aName);
            setAlldata(data);
        }
        catch{
        }
    }

    useEffect(()=>{
        fetchingname();
    },[])

    async function namechanged(){
        Alldata.aName = name;
        // console.log(Alldata);r
        try {
            await AsyncStorage.setItem("userprofile" ,JSON.stringify(Alldata));
            console.log('Data saved successfully!');
        } catch (e) {
            console.log('Error saving data:', e);
        }
        setchanging(false);
    }

    return (
        <View style={{}}>
            <Text>Your Name</Text>
            {
                changing 
                ?
                <View style={{borderWidth:1, borderRadius:10, padding:5, flexDirection:"row", justifyContent:"space-between"}}>
                    <TextInput 
                    style={{padding:0, marginLeft:5, fontSize:20}}
                    value={name}
                    onChangeText={(t)=>{setname(t)}}
                    />
                    <Pressable onPress={namechanged}>
                        <View style={{padding:2, paddingLeft:5, borderRadius:5}}>
                            <Text style={{fontSize:22, color:"#1D3932"}}>Submit</Text>
                        </View>
                    </Pressable>
                </View>
                : 
                <View style={{borderWidth:1, borderRadius:10, padding:5, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                    <View><Text style={{fontSize:20}}>{name}</Text></View>
                    <Pressable onPress={()=>{setchanging(true)}}>
                        <View style={{borderWidth:1, padding:2, paddingLeft:5, borderRadius:5}}>
                            <FontAwesome name="edit" size={25}/>
                        </View>
                    </Pressable>
                </View>
            }
        </View>
    )
    
}

export default EditName
