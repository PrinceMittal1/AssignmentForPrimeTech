import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Components/Navigation/MyTab';
import MyStore from './Components/Redux/Mystore';
import { Provider } from 'react-redux';


const App: React.FC =() => {
  return (
    <Provider store={MyStore}>
      <NavigationContainer>
         <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

