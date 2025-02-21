import React from 'react'
import { Text, TextInput,  TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles.js';
import FilterBtn from './TextBtn.jsx';
import TodoList from './TodoList.jsx';

const Home = () => {
  return (  
        <View style={styles.container}>       
         <TextInput style={styles.input} placeholder='Enter todo Item'/>
         <TextInput style={styles.input} placeholder='Enter Desccription'/>
         
         <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
           <Text style={{color:"#fff"}}>Submit</Text>
         </TouchableOpacity>
         
         <View style={styles.dividerLine}/>
         
         <View style={styles.filterContainer}>
           <FilterBtn label={"All"} isActive/>
           <FilterBtn label={"In progress"} />
           <FilterBtn label={"Done"} />
         </View>
         <View style={{width:"90%",flex:1}}>
           <TodoList/>
         </View>
       </View>
    
  )
}

export default Home