import { Text, TextInput,  TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import FilterBtn from './components/TextBtn.jsx';
import TodoList from './components/TodoList.jsx';



export default function App() {
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.appHeader}>Todo App</Text>
      
      <TextInput style={styles.input} placeholder='Enter todo Item'/>
      <TextInput style={styles.input} placeholder='Enter Desccription'/>
      
      <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
        <Text style={{color:"#fff"}}>Submit</Text>
      </TouchableOpacity>
      
      <View style={styles.dividerLine}/>
      
      <View style={styles.filterContainer}>
        <FilterBtn label={"All"} isActive/>
        <FilterBtn label={"In progress"} />
        <FilterBtn label={"Done"} />
      </View>
      <View style={{width:"90%",height:"70%"}}>
        <TodoList/>
      </View>
    </View>
  );
}

