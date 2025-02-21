import {  View } from 'react-native';
import TodoList from './TodoList.jsx';
import { styles } from '../../styles.js';

const DoneItems = () => {
  return (  
    <View style={styles.container}>
    <View style={{width:"90%",flex:1}}>
        <TodoList done={true}/>
    </View>
  </View>
    
  )
}

export default DoneItems