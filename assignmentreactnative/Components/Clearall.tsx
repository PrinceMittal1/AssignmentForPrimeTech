import { View, Text , ScrollView, Pressable} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ClearAll : React.FC =() =>{

    return (
        <View>
            <Pressable >
                <View style={{width:"60%", backgroundColor:"#1D3932", borderRadius:20, padding:10, alignSelf:"center", marginTop:10}}>
                    <Text style={{color:"black"}}>Clear All Data</Text>
                </View>
            </Pressable>
        </View> 
    )
    
}

export default ClearAll







{/* <View style={{marginBottom:10}}>
                            <Pressable >
                                <View style={{width:"60%", backgroundColor:"#1D3932", borderRadius:20, padding:10, }}>
                                    <Text style={{color:"black"}}>Clear All Data</Text>
                                </View>
                            </Pressable>
                        </View> */}