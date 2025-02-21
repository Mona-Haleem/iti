import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ListItem({item}) {
  const navigation = useNavigation();
  return (   
    <TouchableOpacity style={styles.todosContainer} onPress={() => navigation.navigate('Details', { item: item})}>
          <Text  >{item.title}</Text>
          <View style={styles.iconsContainer}>
            {Platform.OS == "ios" ?
              <Icon name={item.done? "check-circle":"circle-thin"} size={25} />:
              <Icon  name={ item.done? "check-square":"square-o"} size={25} />
            }
              <Icon name="trash" size={25} />
          </View>          
    </TouchableOpacity>
  );
}

