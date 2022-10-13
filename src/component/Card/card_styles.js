import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
    },
    card:{
        margin:9,
        backgroundColor:'#DCDCDC',
        width:170,
        height:300,
        borderRadius:7,
    },
    img:{
        height:180,
        width:150,
        margin:9,
        borderRadius:7,
    },
    txt:{
        fontWeight:'bold',
        fontSize:15,
        marginLeft:9,
        marginBottom:5,
    },
    price:{
        marginLeft:9,
    },
    instock:{
        marginTop:5,
        marginLeft:9,
        color:'red',
        fontWeight:'bold'
    }
})