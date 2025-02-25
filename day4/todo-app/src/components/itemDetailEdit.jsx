import { TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import {  editItem } from '../redux/slices/todoSlice';

const ItemDetailEdit = ({todoItem,setEdit,setitem}) => {

  const dispatch = useDispatch();

  const [title , setTitle] = useState(todoItem.title);
  const [desc , setDesc] = useState(todoItem.desc);

  const handelEdit = () =>{
    let newItem = {
        id:todoItem.id,
        title : title.trim() != '' ?title :todoItem.title,
        desc : desc.trim() !=''?desc :todoItem.desc
    }
    dispatch(editItem(newItem));
    setitem({...todoItem,...newItem})
    setEdit(false)
    }

  return (
    <View style={styles.ItemDetail}>
      <View style={styles.iconsContainer}>
        <TextInput style={styles.editorInput} value={title} onChangeText={setTitle} />
          <View style={styles.iconsContainer}>
              <Icon name="check" size={25} onPress={handelEdit} />
              <Icon name="close" size={25} onPress={()=>setEdit(false)} />
          </View>
      </View>
      <View style={styles.dividerLine}/>
      <TextInput style={[styles.editorInput,styles.editorTextarea]} value={desc} multiline={true} onChangeText={setDesc}/>
    </View>
  )
}

export default ItemDetailEdit