import React, { useState } from 'react'
import { Keyboard, Text, TextInput,  TouchableOpacity } from 'react-native';
import { styles } from '../../styles.js';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/todoSlice.js';


const AddForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [desc,setDesc] = useState('');

  const handeleAddItem = function(){
    if(title.trim() == '' || desc.trim() == '')
        return
    
    const newItem = {
      id :Date.now(),
      title,
      desc,
      done:false
    }

    dispatch(addItem(newItem))
    setTitle('');
    setDesc('');
    Keyboard.dismiss()
  } 

  return (  
        <>
            <TextInput onChangeText={(e)=>setTitle(e)} value={title} style={styles.input} placeholder='Enter todo Item'/>
            <TextInput onChangeText={(e)=>setDesc(e)} value={desc} style={styles.input} placeholder='Enter Desccription'/>
            
            <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8} onPress={handeleAddItem}>
            <Text style={{color:"#fff"}}>Submit</Text>
            </TouchableOpacity>
        </>   
         
        
    
  )
}

export default AddForm