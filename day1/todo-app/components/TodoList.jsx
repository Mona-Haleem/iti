import { FlatList} from 'react-native';
import { useState } from 'react';
import ListItem from './ListItem';

let data = [];
  
for (let i = 1; i < 30 ; i++){
  data.push({
    id:i.toString(),
    title :`item ${i}`
  })
}

export default function TodoList() {
    const [todoList ,updateList] = useState(data);  
  return (
    
      <FlatList data={todoList} 
                keyExtractor={(item => item.id)}
                renderItem={({item}) => <ListItem title={item.title}/>}
          
        /> 
   
  );
}

