import React from "react";
import {useEffect} from "react";
import { View, Text , ScrollView} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Viewhome from "./ViewHome";

const ViewEdit : React.FC =() =>{

    return (
        <ScrollView>
            <Viewhome />
        </ScrollView>
    )
    
}

export default ViewEdit