import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { deleteItem, toggleCompletion } from '../redux/slices/todoSlice';

export default function ListItem({item}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const handelToggleCompletion = (event,id) => {
    event.stopPropagation();
    dispatch(toggleCompletion(id));
  };

  const handeldeleteItem = (event,id) => {
    event.stopPropagation();
    dispatch(deleteItem(id));
  };
  
  return (   
    <TouchableOpacity style={styles.todosContainer} onPress={() => navigation.navigate('Details', { item: item})}>
          <Text  >{item.title}</Text>
          <View style={styles.iconsContainer}>
          <Icon name={Platform.OS == "ios" ?
                        (item.done? "check-circle":"circle-thin"):
                        (item.done? "check-square":"square-o")
                      } 
                      size={25}
                      onPress={(e)=>handelToggleCompletion(e,item.id)}
            />
            <Icon name="pencil" size={25} onPress={() => navigation.navigate('Details', { item: item,editMode:true})} />
            <Icon name="trash" size={25} onPress={(e)=>handeldeleteItem(e,item.id)} />

          </View>          
    </TouchableOpacity>
  );
}

