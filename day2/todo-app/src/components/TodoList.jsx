import { FlatList} from 'react-native';
import { useState } from 'react';
import ListItem from './ListItem';
import data from '../Data';



export default function TodoList({done}) {
  const dataList = !done ? data : data.filter(item => item.done); 
  const [todoList ,updateList] = useState(dataList);  
  console.log(todoList[0])
  return (
    
      <FlatList data={todoList} 
                keyExtractor={(item => item.id)}
                renderItem={({item}) => <ListItem item={item}/>}
          
        /> 
   
  );
}

