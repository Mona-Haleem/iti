import React, { useContext, useRef, useState } from 'react'
import { Keyboard, Text, TextInput,  TouchableOpacity } from 'react-native';
import { styles } from '../../styles.js';
import TodoListContext from '../contexts/TodoListContext.js';


const AddForm = () => {
  const {addItem} = useContext(TodoListContext);
  const [title, setTitle] = useState('');
  const [desc,setDesc] = useState('');

  const handeleAddItem = function(){
    if(title.trim() == '' || desc.trim() == '')
        return
    addItem(title,desc);
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