import React from "react";
import {useEffect, useState} from "react";
import { View, Text , ScrollView, TextInput, Pressable} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EditAge : React.FC =() =>{
    interface AllData {
        aAge?: string | number;
    }
    const [changing, setchanging]  = useState(false);
    const [age, setage] = useState(null);
    const [Alldata, setAlldata] = useState<AllData>({});
    async function fetchingname(){
        try{
            const dat = await AsyncStorage.getItem("userprofile")
            const data = (JSON.parse(dat));
            setage(data.aAge);
            setAlldata(data);
        }
        catch{
        }
    }

    useEffect(()=>{
        fetchingname();
    },[])

    async function namechanged(){
        Alldata.aAge = age;
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
            <Text>Your Age</Text>
            {
                changing 
                ?
                <View style={{borderWidth:1, borderRadius:10, padding:5, flexDirection:"row", justifyContent:"space-between"}}>
                    <TextInput 
                    style={{padding:0, marginLeft:5, fontSize:20}}
                    value={age}
                    onChangeText={(t)=>{setage(t)}}
                    />
                    <Pressable onPress={namechanged}>
                        <View style={{padding:2, paddingLeft:5, borderRadius:5}}>
                            <Text style={{fontSize:22, color:"#1D3932"}}>Submit</Text>
                        </View>
                    </Pressable>
                </View>
                : 
                <View style={{borderWidth:1, borderRadius:10, padding:5, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                    <View><Text style={{fontSize:20}}>{age}</Text></View>
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

export default EditAge