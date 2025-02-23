import React, { useState } from 'react'
import { View } from 'react-native';
import { styles } from '../../styles.js';
import FilterBtn from './FilterBtn.jsx';
import TodoList from './TodoList.jsx';
import AddForm from './AddForm.jsx';

const filters = ["All","In progress","Done"];
const Home = () => {
  const [filter,setFilter] = useState("All");

  return (  
        <View style={styles.container}>       
            <AddForm/>
            
            <View style={styles.dividerLine}/>
            
            <View style={styles.filterContainer}>
              {filters.map(label =>
              <FilterBtn key={label} label={label} isActive={filter === label} setFilter={setFilter}/>
              )}
              </View>
            <View style={{width:"90%",flex:1}}>
              <TodoList filterBy={filter} />
            </View>
       </View>
    
  )
}

export default Home