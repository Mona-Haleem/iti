import { Text, View } from 'react-native';
import { styles } from '../styles';
export default function ListItem({title}) {
 
  return (   
        <View style={styles.todosContainer}>
          <Text>{title}</Text>
        </View>  
  );
}

