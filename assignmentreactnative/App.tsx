import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Components/Navigation/MyTab';
import MyStore from './Components/Redux/Mystore';
import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';

function App(): JSX.Element {
  
  return (
    <Provider store={MyStore}>
      <NavigationContainer>
         <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}


export default App;
