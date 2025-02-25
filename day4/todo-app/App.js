import { Provider } from 'react-redux';
import Router from './src/Router.jsx';
import { StatusBar } from 'react-native';
import store from './src/redux/store.js';


export default function App() {
  
  return <>
    <StatusBar barStyle="light-content" />
    <Provider store={store}>    
      <Router/>
    </Provider>
  </>;
}

