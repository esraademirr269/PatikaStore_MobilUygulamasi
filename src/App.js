import React from 'react';
import {View,Text,StyleSheet, Dimensions,TextInput,FlatList} from 'react-native';
import Card from './component/Card/Card';
import card_data from './card_data.json';
const App = () =>{
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>PATIKASTORE</Text>
            <TextInput placeholder="Ara.." style={styles.txtinput}/>
            <FlatList
                numColumns={2} //verileri 2 şer gönderir
                data={card_data}
                renderItem={({item})=><Card data_card={item}/>}
                columnWrapperStyle={{ justifyContent:'space-between' }} //2 tane card yan yana ekler
            />
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        color:'purple',
        textSize:37, 
        fontWeight:'bold',
        marginTop:7,
        marginLeft:11,
    },
    txtinput:{
        borderRadius:11,
        height:45,
        backgroundColor:'#DCDCDC',
        margin:7,
        padding:13,
    }
});

export default App;
