import {View,Image,Text} from 'react-native';
import styles from './card_styles';

const Card =(props)=>{
    return(
        <View style={styles.container}>
           <View style={styles.card}>
            <Image source={{uri:props.data_card.imgURL}} style={styles.img}/>
            <Text style={styles.txt}>{props.data_card.title}</Text>
            <Text style={styles.price}>{props.data_card.price}</Text>
            {//stokta olup olmadığını kontrol eder
                !props.data_card.inStock && (<Text style={styles.instock}>STOKTA YOK!</Text>)
            }
           </View>
        </View>
    )
}

export default Card;