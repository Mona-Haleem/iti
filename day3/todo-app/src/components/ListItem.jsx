import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useContext } from 'react';
import TodoListContext from '../contexts/TodoListContext';

export default function ListItem({item}) {
  const navigation = useNavigation();
  const {toggleCompletion, deleteItem} = useContext(TodoListContext);
  return (   
    <TouchableOpacity style={styles.todosContainer} onPress={() => navigation.navigate('Details', { item: item})}>
          <Text  >{item.title}</Text>
          <View style={styles.iconsContainer}>
          <Icon name={Platform.OS == "ios" ?
                        (item.done? "check-circle":"circle-thin"):
                        (item.done? "check-square":"square-o")
                      } 
                      size={25}
                      onPress={(e)=>toggleCompletion(e,item.id)}
            />
            <Icon name="pencil" size={25} onPress={(e)=>editItem(e,item.id)} />
            <Icon name="trash" size={25} onPress={(e)=>deleteItem(e,item.id)} />

          </View>          
    </TouchableOpacity>
  );
}

