import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './Home';
import ItemDetail from './ItemDetail';
import { styles } from '../../styles';
import DoneItems from './DoneItems';
const Stack = createNativeStackNavigator();

const StackNav = ({route}) => {
    
    return (
      <Stack.Navigator screenOptions={styles.navigatorScreenoptions}>
        <Stack.Screen name='Home' component={route.name == 'Done'?DoneItems:Home}  
                      options={{ title:route.name == 'Done'? 'Done Items':'Todo App' 
        }} />
        <Stack.Screen  name='Details' component={ItemDetail} options={
            ({ route }) =>({title: route.params.item.title + " Details"}) 
        }/>
      </Stack.Navigator>
    )
  
}

export default StackNav