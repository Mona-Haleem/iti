import { View, Text, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import TodoListContext from '../contexts/TodoListContext';
import { useNavigation } from '@react-navigation/native';

const ItemDetail = ({route}) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const [todoItem , setitem] = useState(item);
  const {toggleCompletion,deleteItem} = useContext(TodoListContext);
  
  const handelClick = function(e, id){
    setitem((prev)=>({...prev,done:!prev.done}));
    toggleCompletion(e,id);  
  } 

  const handelDelete = function(e, id){
    deleteItem(e,id);  
    navigation.replace('HomePage')
  }

  return (
    <View style={styles.ItemDetail}>
      <View style={styles.iconsContainer}>
        <Text style={styles.detailHeader}>{todoItem.title}</Text>
          <View style={styles.iconsContainer}>
              <Icon name={Platform.OS == "ios" ?
                            (todoItem.done? "check-circle":"circle-thin"):
                            (todoItem.done? "check-square":"square-o")
                          } 
                          size={25}
                          onPress={(e)=>handelClick(e,todoItem.id)}
              />
                          <Icon name="pencil" size={25} onPress={(e)=>editItem(e,item.id)} />
              
              <Icon name="trash" size={25} onPress={(e)=>handelDelete(e,todoItem.id)} />
          </View>
      </View>
      <View style={styles.dividerLine}/>
      
      <Text style={styles.detailDesc}>{todoItem.desc}</Text>

    </View>
  )
}

export default ItemDetail