import {StyleSheet} from "react-native"

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

export default Homestyles