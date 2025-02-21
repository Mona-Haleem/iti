import { View, Text, Platform } from 'react-native'
import React from 'react'
import { styles } from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemDetail = ({route}) => {
  const { item } = route.params;
  return (
    <View style={styles.ItemDetail}>
      <View style={styles.iconsContainer}>
        <Text style={styles.detailHeader}>{item.title}</Text>
        {Platform.OS == "ios" ?
          <Icon name={item.done? "check-circle":"circle-thin"} size={25} />:
          <Icon name={ item.done? "check-square":"square-o"} size={25} />
        }
      </View>
      <Text style={styles.detailDesc}>{item.desc}</Text>

    </View>
  )
}

export default ItemDetail