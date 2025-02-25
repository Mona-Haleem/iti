import { View, Text, Platform } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { deleteItem, toggleCompletion } from '../redux/slices/todoSlice';
import ItemDetailEdit from './itemDetailEdit';

const ItemDetail = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { item ,editMode} = route.params;
  const [todoItem , setitem] = useState(item);
  const [isEdit , setIsEdit] = useState(editMode);
  console.log(isEdit);
  
  const handelClick = function(id){
    setitem((prev)=>({...prev,done:!prev.done}));
    dispatch(toggleCompletion(id));
  } 

  const handelDelete = function(id){
    dispatch(deleteItem(id));
    navigation.replace('HomePage')
  }

 


  return isEdit ? <ItemDetailEdit todoItem={todoItem} setitem={setitem} setEdit={setIsEdit}/> : (
    <View style={styles.ItemDetail}>
      <View style={styles.iconsContainer}>
        <Text style={styles.detailHeader}>{todoItem.title}</Text>
          <View style={styles.iconsContainer}>
              <Icon name={Platform.OS == "ios" ?
                            (todoItem.done? "check-circle":"circle-thin"):
                            (todoItem.done? "check-square":"square-o")
                          } 
                          size={25}
                          onPress={()=>handelClick(todoItem.id)}
              />
              <Icon name="pencil" size={25} onPress={()=>setIsEdit(true)} />
              <Icon name="trash" size={25} onPress={()=>handelDelete(todoItem.id)} />
          </View>
      </View>
      <View style={styles.dividerLine}/>
      
      <Text style={styles.detailDesc}>{todoItem.desc}</Text>

    </View>
  )
}

export default ItemDetail