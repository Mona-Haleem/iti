import { FlatList} from 'react-native';
import ListItem from './ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { setTodo } from '../redux/slices/todoSlice';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function TodoList({filterBy}) {
  const dispatch = useDispatch()
  const {todoList} = useSelector((state) => state.todo)

  useEffect(() => {
    const loadTodos = async () => {
        const storedTodos = await AsyncStorage.getItem('todoList');
        if (storedTodos) {
          dispatch(setTodo(JSON.parse(storedTodos)))
        }
    };

    loadTodos();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
           await AsyncStorage.setItem('todoList', JSON.stringify(todoList));
    };
    saveTodos(TodoList);
  }, [todoList]);

  const dataList = filterBy == "All" ? todoList :
                   filterBy == "Done" ? todoList.filter(item => item.done) :
                   todoList.filter(item => !item.done); 
  return (
      <FlatList data={dataList} 
                keyExtractor={(item => item.id)}
                renderItem={({item}) => <ListItem item={item} />}
          
        /> 
  );
}

