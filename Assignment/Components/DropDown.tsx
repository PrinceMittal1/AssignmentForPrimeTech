import {View, Text, RefreshControl, Alert, FlatList} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import {useState} from "react"


const dta = [
    {name:"Mobile", value:"Mobil"},
    {name:"React Native", value:"React Native"},
    {name:"React", value:"React"},
    {name:"Android", value:"Android"},
    {name:"JavaScript", value:"JavaScript"},
    {name:"Flutter", value:"Flutter"},
    {name:"Dart", value:"Dart"},
    {name:"BlockChain", value:"BlockChain"},
]

function ONrefresh(){
    Alert.alert("Choose your Tech stack");
}

interface DropDownProps {
    setlist: (list: string[]) => void;
    list: string[];
  }

const DropDown : React.FC<DropDownProps> =({setlist, list}) =>{
    const [Selected, setSelected] = useState([]);

    return(<View style={{marginTop:5}}>
        <Dropdown 
        style={{backgroundColor:"#d9d9d9", paddingHorizontal:10, paddingVertical:2, borderRadius:10}}
        data={dta}
        labelField="name" 
        backgroundColor={"rgba(0,0,0,0.2)"}
        containerStyle={{ borderWidth:1, borderColor:"black", borderRadius:10}}
        valueField="value" 
         flatListProps={{
            ListEmptyComponent : <View><Text>empty</Text></View>,
            refreshControl : (<RefreshControl refreshing={false} onRefresh={ONrefresh} />)
         }}
         onChange={ item =>
              {
                if(list.includes(item.name)){
                    Alert.alert("You have already selected this Tech")
                }
                else{setlist([...list, item.name])}
              }
            }
         />
    </View>)
}

export default DropDown