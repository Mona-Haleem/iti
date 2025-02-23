import { FlatList} from 'react-native';
import { useContext } from 'react';
import ListItem from './ListItem';
import TodoListContext from '../contexts/TodoListContext';



export default function TodoList({filterBy}) {
  const {TodoList} = useContext(TodoListContext);
  const dataList = filterBy == "All" ? TodoList :
                   filterBy == "Done" ? TodoList.filter(item => item.done) :
                   TodoList.filter(item => !item.done); 
  return (
    
      <FlatList data={dataList} 
                keyExtractor={(item => item.id)}
                renderItem={({item}) => <ListItem item={item} />}
          
        /> 
   
  );
}

