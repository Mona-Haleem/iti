
import { TodoListProvider } from './src/contexts/TodoListContext.js';
import Router from './src/Router.jsx';
import { StatusBar } from 'react-native';


export default function App() {
  
  return <>
    <StatusBar barStyle="light-content" />
    <TodoListProvider>    
      <Router/>
    </TodoListProvider>
  </>;
}

